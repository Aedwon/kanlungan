"""Transcribe the approved Shop artboards and isolate their CSS. Standard library only."""
from pathlib import Path
import json, re
ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'site'
# Reuse the foundation's HTML parser, React attribute conversion and CSS scoping.
source = (OUT/'scripts/transcribe-studio.py').read_text()
exec(source[:source.index('data={};')])
def read_data(file, name):
 s=(OUT/f'src/data/{file}.ts').read_text(); start=s.index('= [',s.index('export const '+name))+2
 return json.loads(s[start:s.index('\n];',start)+2])
products=read_data('products','products'); collections=read_data('collections','collections'); makers=read_data('makers','makers')
for p in products: routes[p['name']]='/shop/products/'+p['slug']
for c in collections: routes[c['name']]='/shop/collections/'+c['slug']
for m in makers: routes[m['name']]='/shop/makers/'+m['slug']
for name in ['Seating','Tables','Beds','Storage','Lighting','Rugs and textiles','Decor and objects','Art']: routes[name]='/shop/'+name.lower().replace(' ','-')
routes.update({'All collections':'/shop/collections','All makers':'/shop/makers','All pieces':'/shop','Care guide':'/help/care-guide','Read our care guide':'/help/care-guide','Delivery and returns':'/help/delivery-and-returns','Full delivery and returns':'/help/delivery-and-returns','Ask the studio':'/contact?subject=Silong%20Sofa','About the studio':'/about','Your cart':'/cart','See the collection':'/shop/collections/quiet-living'})
base_convert=convert
def convert(node,size):
 if isinstance(node,Node):
  if node.tag=='a' and node.attrs.get('href')=='#':
   label=node.text().strip().replace('→','').strip()
   product=next((p for p in products if any(x.attrs.get('role')=='img' and x.attrs.get('aria-label','').startswith(p['name']) for x in walk(node))),None)
   found=[product['name']] if product else [key for key in routes if key.lower() in label.lower()]
   if found: node.attrs['href']=routes[max(found,key=len)]
   elif label=='All seating': node.attrs['href']='/shop/seating'
   elif label in ['Sofas','Lounge chairs','Dining chairs','Stools and benches']: node.attrs['href']='/shop/seating?subcategory='+label.replace(' ','%20')
   else: raise ValueError('Unresolved Shop link: '+label)
  for key in ['id','for','aria-labelledby']:
   if key in node.attrs: node.attrs[key]+='-'+size
  for key in ['autocomplete','inputmode','maxlength','minlength','stroke-dasharray','aria-pressed']:
   if key in node.attrs:
    new={'autocomplete':'autoComplete','inputmode':'inputMode','maxlength':'maxLength','minlength':'minLength','stroke-dasharray':'strokeDasharray'}.get(key,key)
    if new!=key: node.attrs[new]=node.attrs.pop(key)
  if node.tag=='option': node.attrs.pop('selected',None)
 return base_convert(node,size)
data={}; css=[]; paintings={}
for name in ['shop','category','collection','product','maker','makers']:
 for size in ['desktop','mobile']:
  file=ROOT/f'design/round-2-templates/T-{name}-{size}.dc.html'
  if not file.exists(): continue
  raw=file.read_text(); parser=Parser(); parser.feed(raw); main=next(n for n in walk(parser.root) if n.tag=='main')
  scope=f'shop-{name}-{size}'; main.tag='div'; main.attrs={'class':f'shop-page shop-{size} {scope}'}
  data[f'{name}-{size}']=convert(main,size)
  css.append('@media ('+('min-width:1280px' if size=='desktop' else 'max-width:1279px')+') {\n'+scope_css(raw.split('<style>')[1].split('</style>')[0],scope)+'}\n')
  for n in walk(main):
   if n.tag=='a' and n.attrs.get('href','').startswith('/shop/products/'):
    slug=n.attrs['href'].split('/')[-1]
    image=next((x for x in walk(n) if x.attrs.get('role')=='img'),None)
    if image:
     paintings.setdefault(slug,base_convert(image,size))
parser=Parser(); parser.feed((ROOT/'design/round-2-templates/T-components.dc.html').read_text())
toast=next(n for n in walk(parser.root) if n.attrs.get('role')=='status' and n.text().startswith('Added to your cart.'))
data['toast']=convert(toast,'desktop')
(OUT/'src/data/shop-templates.json').write_text(json.dumps(data,ensure_ascii=False,separators=(',',':'))+'\n')
(OUT/'src/data/shop-paintings.json').write_text(json.dumps(paintings,ensure_ascii=False,separators=(',',':'))+'\n')
(OUT/'src/styles/shop-reference.css').write_text('/* Generated verbatim from approved Shop artboards. */\n'+''.join(css))
print(f'Transcribed {len(data)-1} Shop artboards, {len(paintings)} product paintings, and the added-to-cart toast.')
