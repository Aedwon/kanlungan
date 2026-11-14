"""Preserve approved wave 4 artboard markup and isolate its CSS. Standard library only."""
from pathlib import Path
import json,re
ROOT=Path(__file__).resolve().parents[2]; OUT=ROOT/'site'
s=(OUT/'scripts/transcribe-studio.py').read_text();exec(s[:s.index('data={};')])
routes.update({'Continue shopping':'/shop','Checkout':'/checkout','View cart':'/cart','studio@kanlungan.example':'mailto:studio@kanlungan.example'})
for file in ['products','collections','makers']:
 raw=(OUT/f'src/data/{file}.ts').read_text(); start=raw.index('= [',raw.index('export const '+file))+2
 for p in json.loads(raw[start:raw.index('\n];',start)+2]):routes[p['name']]='/shop/'+('products' if file=='products' else file)+'/'+p['slug']
for name in ['Seating','Tables','Beds','Storage','Lighting','Rugs and Textiles','Decor and Objects','Art']:routes[name]='/shop/'+name.lower().replace(' ','-')
base=convert
def convert(node,size):
 if isinstance(node,Node):
  for k in ['id','for','aria-labelledby','aria-describedby']:
   if k in node.attrs:node.attrs[k]=' '.join(x+'-'+size for x in node.attrs[k].split())
  for k,v in {'autocomplete':'autoComplete','inputmode':'inputMode','novalidate':'noValidate','stroke-dasharray':'strokeDasharray'}.items():
   if k in node.attrs:node.attrs[v]=node.attrs.pop(k)
  if node.tag=='option':node.attrs.pop('selected',None)
  if node.tag in ['input','textarea']:
   if node.attrs.get('type')!='radio':node.attrs.pop('value',None)
   node.attrs.pop('checked',None)
  if node.tag=='a' and node.attrs.get('href')=='#':
   label=node.text().replace('→','').strip()
   if label.endswith('.'):label=label[:-1]
   if label in routes:node.attrs['href']=routes[label]
   elif 'Ask the studio' in label:node.attrs['href']='/contact'
 return base(node,size)
data={};css=[]
for name in ['cart','cart-empty','cart-drawer','checkout','confirmation','booking','booking-submitted','booking-error','contact']:
 for size in ['desktop','mobile']:
  file=ROOT/f'design/round-2-templates/T-{name}-{size}.dc.html'
  if not file.exists():continue
  raw=file.read_text();p=Parser();p.feed(raw)
  main=next(n for n in walk(p.root) if n.tag==('aside' if name=='cart-drawer' else 'main'))
  scope=f'flow-{name}-{size}'
  if name!='cart-drawer':main.tag='div'
  main.attrs['class']=f'flow-page flow-{size} {scope}'
  data[f'{name}-{size}']=convert(main,size)
  scoped=scope_css(raw.split('<style>')[1].split('</style>')[0],scope)
  css.append(scoped if name=='contact' else '@media ('+('min-width:1280px' if size=='desktop' else 'max-width:1279px')+'){\n'+scoped+'}\n')
(OUT/'src/data/checkout-templates.json').write_text(json.dumps(data,ensure_ascii=False,separators=(',',':'))+'\n')
(OUT/'src/styles/checkout-reference.css').write_text('/* Transcribed from approved wave 4 artboards. */\n'+''.join(css))
print(f'Transcribed {len(data)} wave 4 artboards.')
