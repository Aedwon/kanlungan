"""One-time faithful transcription of the approved local references into typed source."""
from pathlib import Path
from html.parser import HTMLParser
import re, json
ROOT=Path(__file__).resolve().parents[2]
SITE=ROOT/'site'
def dump(v): return json.dumps(v,ensure_ascii=False,indent=2)
def slug(v): return re.sub(r'[^a-z0-9]+','-',v.lower()).strip('-')
def write(f,s): (SITE/f).write_text(s)
catalog=(ROOT/'docs/content/catalog.md').read_text()
products=[]; variants={}; collections=[]; section=''; group=''
for line in catalog.splitlines():
 if line.startswith('## '): section=line[3:]
 if line.startswith('### '): group=line[4:]
 if line.startswith('| ') and not line.startswith('| Name') and not line.startswith('|---') and section not in ['Variants']:
  cells=[x.strip() for x in line.strip('|').split('|')]
  if len(cells)==9:
   name,sub,desc,price,maker,materials,dims,origin,availability=cells
   p=dict(slug=slug(name),name=name,category=section,subcategory=sub,description=desc,price=int(re.search(r'[\d,]+',price)[0].replace(',','')),priceUnit='per panel' if 'per panel' in price else None,maker=maker,materials=materials,dimensions=dims,origin=origin,availability='made-to-order' if availability.startswith('Made') else 'one-of-a-kind' if 'one of a kind' in availability else 'in-stock',availabilityText=availability,leadTimeWeeks=int(re.search(r'\d+',availability)[0]) if availability.startswith('Made') else None,variants=[])
   products.append(p)
 if section=='Variants' and line.startswith('| ') and not line.startswith('| Product') and not line.startswith('|---'):
  name,opt,choices,effect=[x.strip() for x in line.strip('|').split('|')]
  choices=choices.split(', '); prices=re.findall(r'₱([\d,]+)',effect)
  options=[{'label':c} for c in choices]
  if len(prices)==len(options):
   for o,p in zip(options,prices): o['price']=int(p.replace(',',''))
  elif name=='Silong Sofa' and opt=='Size': options[1]['price']=158000
  next(p for p in products if p['name']==name)['variants'].append(dict(name=opt,choices=options,effect=effect))
 if section=='Collections' and line.startswith('- **'):
  m=re.match(r'- \*\*(.+?):\*\* (.+)',line); name,body=m.groups()
  body,*description=body.split('. Text: ')
  names=body.rstrip('.').split(', ')
  collections.append(dict(slug=slug(name),name=name,type=group,description=description[0].strip('".')+'.' if description else None,productSlugs=[slug(n) for n in names]))
write('src/data/products.ts','// Transcribed from docs/content/catalog.md. Prices are Philippine pesos.\nexport type Availability = "in-stock" | "made-to-order" | "sold-out" | "one-of-a-kind";\nexport interface ProductVariant { name: string; choices: { label: string; price?: number }[]; effect: string }\nexport interface Product { slug: string; name: string; category: string; subcategory: string; description: string; price: number; priceUnit: string | null; maker: string; materials: string; dimensions: string; origin: string; availability: Availability; availabilityText: string; leadTimeWeeks: number | null; variants: ProductVariant[] }\nexport const products: Product[] = '+dump(products)+';\nexport const featuredProductSlugs = '+dump([slug(n) for n in ['Silong Sofa','Hapag Dining Table','Dapithapon Lounge Chair','Kapis Pendant','Aparador Cabinet','Tapayan Vessel']])+';\n')
write('src/data/collections.ts','// Transcribed from docs/content/catalog.md.\nexport interface Collection { slug: string; name: string; type: string; description: string | null; productSlugs: string[] }\nexport const collections: Collection[] = '+dump(collections)+';\n')
makers=[]
for name,body in re.findall(r'### ([^\n]+)\n(.*?)(?=\n### |\n## |\Z)',(ROOT/'docs/content/makers.md').read_text(),re.S):
 fields=dict(re.findall(r'- \*\*(.+?):\*\* (.+)',body)); makers.append(dict(slug=slug(name),name=name,place=fields['Place'],craft=fields['Craft'],story=fields['Story'].replace('**','')))
write('src/data/makers.ts','// Transcribed from docs/content/makers.md. Kanlungan Originals is not a maker page.\nexport interface Maker { slug: string; name: string; place: string; craft: string; story: string }\nexport const makers: Maker[] = '+dump(makers)+';\n')
projects=[]
for name,body in re.findall(r'\n## ([^\n]+)\n(.*?)(?=\n## |\Z)',(ROOT/'docs/content/projects.md').read_text(),re.S):
 fields=dict(re.findall(r'- \*\*(.+?):\*\* (.+)',body))
 if 'Location' not in fields: continue
 projects.append(dict(slug=slug(name),name=name,location=fields['Location'],type=fields['Type'],floorArea=fields['Floor area'],service=fields['Service'],year=int(fields['Year']),scope=fields['Scope'],brief=fields['Brief'],approach=fields['Approach'],materialPalette=fields['Material palette'],shopTheProject=fields['Shop the project'].split(', '),imageNotes=fields['Image notes'],galleryCaptions=re.findall(r'^\d+\. (.+)',body,re.M),approachExpanded=body.split('### Approach, expanded\n\n')[1].strip()))
write('src/data/projects.ts','// Transcribed from docs/content/projects.md.\nexport interface Project { slug: string; name: string; location: string; type: string; floorArea: string; service: string; year: number; scope: string; brief: string; approach: string; materialPalette: string; shopTheProject: string[]; imageNotes: string; galleryCaptions: string[]; approachExpanded: string }\nexport const projects: Project[] = '+dump(projects)+';\n')
# Preserve every supplied copy line, including forms and future-wave copy.
copySource=(ROOT/'docs/content/copy.md').read_text(); sections={}; section=''; subsection=''; fields={}
for line in copySource.splitlines():
 if line.startswith('## '): section=line[3:]; subsection=''; sections[section]={}
 if line.startswith('### '): subsection=line[4:]
 m=re.match(r'- \*\*(.+?):\*\* (.+)',line)
 if m:
  key=(subsection+' / ' if subsection else '')+m[1]; sections.setdefault(section,{})[key]=m[2]
notice=re.search(r'^> (.+)',copySource,re.M)[1]
# DOM tree for exact conversion, without raw HTML injection.
class Node:
 def __init__(self,tag,attrs): self.tag=tag; self.attrs=dict(attrs); self.children=[]
 def text(self): return ''.join(c.text() if isinstance(c,Node) else c for c in self.children)
class Parser(HTMLParser):
 def __init__(self): super().__init__(convert_charrefs=True); self.root=Node('root',[]); self.stack=[self.root]
 def handle_starttag(self,t,a):
  n=Node(t,a); self.stack[-1].children.append(n)
  if t not in ['input','link','meta','br','hr','img']: self.stack.append(n)
 def handle_startendtag(self,t,a): self.handle_starttag(t,a); self.handle_endtag(t) if t not in ['input','link','meta','br','hr','img'] else None
 def handle_endtag(self,t):
  for i in range(len(self.stack)-1,0,-1):
   if self.stack[i].tag==t: self.stack=self.stack[:i]; break
 def handle_data(self,d): self.stack[-1].children.append(d)
def parse(s): p=Parser(); p.feed(s); return p.root
def walk(n):
 if isinstance(n,Node):
  yield n
  for c in n.children: yield from walk(c)
def find(n,tag): return next(c for c in walk(n) if c.tag==tag)
source={size:(ROOT/f'design/round-2-templates/T-home-{size}.dc.html').read_text() for size in ['desktop','mobile']}
trees={k:parse(v) for k,v in source.items()}
# Copy lookup uses the source strings as stable keys, avoiding copy embedded in page components.
texts={}
for tree in trees.values():
 for n in walk(tree):
  if n.tag in ['style','script','title']: continue
  for c in n.children:
   if isinstance(c,str) and c.strip() and not re.fullmatch(r'[\d→]+',c.strip()): texts[c.strip()]=c.strip()
for data in sections.values():
 for s in data.values(): texts[s]=s
write('src/data/copy.ts','// Verbatim strings from docs/content/copy.md and the approved Home templates.\nexport const copy = '+dump(sections)+' as const;\nexport const fictionalBrandNotice = '+dump(notice)+';\nexport const pageCopy: Record<string, string> = '+dump(texts)+';\n')
routeMap={'Studio':'/studio','Projects':'/projects','View projects':'/projects','Shop':'/shop','Explore the shop':'/shop','About':'/about','Book a discovery call':'/book','Full-Service Furnishing':'/studio/full-service-furnishing','Interior Design Direction':'/studio/interior-design-direction','Makers':'/shop/makers','Collections':'/shop/collections','Privacy':'/legal/privacy','Terms':'/legal/terms','Contact':'/contact','Delivery and returns':'/help/delivery-and-returns','Care guide':'/help/care-guide','FAQ':'/help/faq','studio@kanlungan.example':'mailto:studio@kanlungan.example','+63 2 8555 0100':'tel:+63285550100'}
for p in products: routeMap[p['name']]='/shop/products/'+p['slug']
for p in projects: routeMap[p['name']]='/projects/'+p['slug']
for c in collections: routeMap[c['name']]='/shop/collections/'+c['slug']
categories=['Seating','Tables','Beds','Storage','Lighting','Rugs and Textiles','Decor and Objects','Art']
for c in categories: routeMap[c]='/shop/'+slug(c)
write('src/data/navigation.ts','export const categories = '+dump([dict(name=c,slug=slug(c),href='/shop/'+slug(c)) for c in categories])+' as const;\n')
# Extract exact product placeholder paintings from the artboards.
placeholderData={}
componentTree=parse((ROOT/'design/round-2-templates/T-components.dc.html').read_text())
for tree in [trees['desktop'],componentTree]:
 for n in walk(tree):
  if n.tag in ['a','article'] and 'card' in n.attrs.get('class','').split():
   imgs=[x for x in walk(n) if x.attrs.get('role')=='img']
   if not imgs: continue
   image=imgs[0]; name=next((p['name'] for p in products if image.attrs.get('aria-label','').startswith(p['name'])),None)
   if name and slug(name) not in placeholderData:
    paint=next((x for x in walk(image) if x is not image and 'background:' in x.attrs.get('style','')), image)
    background=next((x.split(':',1)[1].strip() for x in paint.attrs['style'].split(';') if x.strip().startswith('background:')), '#E8DFD2')
    placeholderData[slug(name)]={'alt':image.attrs['aria-label'],'background':background,'caption':next((x.text().strip() for x in walk(image) if 'ph' in x.attrs.get('class','').split()), 'Placeholder · '+name)}
write('src/data/product-placeholders.ts','// Exact gradient paintings from the approved artboards.\nexport const productPlaceholders: Record<string, { alt: string; background: string; caption: string }> = '+dump(placeholderData)+';\n')
# resolve the remaining context-dependent links before serialization.
for size,tree in trees.items():
 firstBook=next(n for n in walk(find(tree,'main')) if n.tag=='a' and n.text().strip()=='Book a discovery call')
 firstBook.attrs['data-hero-book']='true'
 for n in walk(tree):
  if n.tag=='a' and n.attrs.get('href')=='#':
   txt=n.text().strip().replace('→','').strip()
   if 'About this service' in txt:
    # assigned in document order below
    continue
   pin=re.search(r'\bp(\d)\b',n.attrs.get('class','')); card=re.search(r'\bk(\d)\b',n.attrs.get('class',''))
   if pin or card: n.attrs['href']=routeMap[['Silong Sofa','Hapag Dining Table','Dapithapon Lounge Chair','Kapis Pendant','Aparador Cabinet','Tapayan Vessel'][int((pin or card)[1])-1]]
   else:
    matches=sorted([key for key in routeMap if txt.startswith(key)],key=len,reverse=True)
    n.attrs['href']=routeMap[matches[0]] if matches else '/'
 serviceLinks=[n for n in walk(tree) if n.tag=='a' and 'About this service' in n.text()]
 for n,url in zip(serviceLinks,['/studio/full-service-furnishing','/studio/interior-design-direction']): n.attrs['href']=url
styles=[]
def camel(s): return re.sub(r'-([a-z])',lambda m:m[1].upper(),s)
def styleObj(s):
 obj={}
 for entry in s.split(';'):
  if ':' not in entry: continue
  k,v=entry.split(':',1); k=k.strip(); v=v.strip().replace("\\'", "'")
  v=re.sub(r"'Newsreader'",'var(--font-newsreader)',v); v=re.sub(r"'Hanken Grotesk'",'var(--font-hanken)',v)
  obj[k if k.startswith('--') else camel(k)]=v
 return obj
counter=0
void=['input','link','meta','br','hr','img']
def serialize(n,prefix):
 global counter
 if isinstance(n,str):
  if not n.strip(): return n
  parts=re.split(r'(₱[\d,]+)',n)
  out=''
  for part in parts:
   if re.fullmatch(r'₱[\d,]+',part): out+='{formatPrice('+part[1:].replace(',','')+')}'
   elif part.strip() in texts: out+=(' ' if part.startswith(' ') else '')+'{pageCopy['+json.dumps(part.strip(),ensure_ascii=False)+']}' + (' ' if part.endswith(' ') else '')
   else: out+=part.replace('&','&amp;').replace('>','&gt;').replace('{','&#123;').replace('}','&#125;')
  return out
 tag=n.tag; attrs=n.attrs.copy()
 card=re.search(r'\bk(\d)\b',attrs.get('class',''))
 if tag=='a' and card and 'card' in attrs.get('class','').split():
  names=['Silong Sofa','Hapag Dining Table','Dapithapon Lounge Chair','Kapis Pendant','Aparador Cabinet','Tapayan Vessel']
  return '<ProductCard product={products.find((product) => product.slug === '+json.dumps(slug(names[int(card[1])-1]))+')!} number={'+card[1]+'} variant="home" />'
 if tag=='a': tag='Link'
 if attrs.get('role')=='img': tag='ImagePlaceholder'; attrs['alt']=attrs.pop('aria-label'); attrs.pop('role')
 if attrs.get('id')=='proc-h': attrs['id']='proc-h-'+prefix
 if attrs.get('aria-labelledby')=='proc-h': attrs['aria-labelledby']='proc-h-'+prefix
 if tag=='input' and attrs.get('id'): attrs['id']+='-'+prefix
 if 'for' in attrs: attrs['for']+='-'+prefix
 if tag=='form': attrs.pop('action',None); attrs['action']='/contact'
 if 'style' in attrs:
  counter+=1; cls=f'ref-{prefix}-{counter}'; obj=styleObj(attrs.pop('style'))
  # Mobile artboard measurements become fluid while keeping 390px geometry exact.
  if prefix=='mobile':
   for k,v in obj.items():
    if k=='width' and v=='350px': obj[k]='calc(100% - 40px)'
    if v=='87.4px': obj[k]='25%'
    if v=='calc(87.4px + 12px)': obj[k]='calc(25% + 12px)'
    if v=='calc(87.5px * 3)': obj[k]='75%'
  css=';'.join(re.sub(r'[A-Z]',lambda m:'-'+m[0].lower(),k)+':'+v for k,v in obj.items())
  styles.append('.'+cls+'{'+css+'}')
  attrs['class']=(attrs.get('class','')+' '+cls).strip()
 atr=''
 for k,v in attrs.items():
  k={'class':'className','for':'htmlFor','autocomplete':'autoComplete','viewbox':'viewBox','stroke-width':'strokeWidth','stroke-linecap':'strokeLinecap','stroke-linejoin':'strokeLinejoin'}.get(k,k)
  if v is None: atr+=' '+k
  else: atr+=' '+k+'='+json.dumps(v,ensure_ascii=False)
 return '<'+tag+atr+(' />' if n.tag in void else '>'+''.join(serialize(c,prefix) for c in n.children)+'</'+tag+'>')
for size,tree in trees.items():
 main=find(tree,'main'); main.tag='div'; main.attrs['class']='home-'+size
 jsx=serialize(main,size)
 write('src/components/Home'+size.title()+'.tsx','// Faithful transcription of T-home-'+size+'.dc.html, sections 1 to 9.\nimport Link from "next/link";\nimport { ProductCard } from "./ProductCard";\nimport { products } from "@/data/products";\nimport { ImagePlaceholder } from "./ImagePlaceholder";\nimport { pageCopy } from "@/data/copy";\nimport { formatPrice } from "@/lib/formatPrice";\nexport function Home'+size.title()+'() { return ('+jsx+'); }\n')
 css=re.search(r'<style>(.*?)</style>',source[size],re.S)[1]
 css=css.replace("'Hanken Grotesk'",'var(--font-hanken)').replace("'Newsreader'",'var(--font-newsreader)')
 write('src/styles/home-'+size+'.css','/* Approved '+size+' template choreography. */\n@media ('+('min-width: 1280px' if size=='desktop' else 'max-width: 1279px')+') {\n'+css+'\n}\n')
write('src/styles/reference.css','/* Exact layout measurements and gradient placeholders from the approved Home artboards. */\n'+'\n'.join(styles)+'\n')
# Eight exact icon drawings from the header states, including Storage inset panels.
h=parse((ROOT/'design/round-2-templates/T-header-states-desktop.dc.html').read_text())
icons=[find(n,'svg') for n in walk(h) if n.tag=='a' and n.attrs.get('class')=='cat'][:8]
iconjsx=[]
for name,n in zip(categories,icons): iconjsx.append('case '+dump(name)+': return ('+serialize(n,'icon')+');')
write('src/components/CategoryIcon.tsx','export function CategoryIcon({ name }: { name: string }) { switch (name) {\n'+'\n'.join(iconjsx)+'\ndefault: return null; } }\n')
print(f'Transcribed {len(products)} products, {len(collections)} collections, {len(projects)} projects, {len(makers)} makers.')
