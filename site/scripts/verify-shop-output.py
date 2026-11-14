"""Check the production HTML for catalog coverage, links, and control IDs."""
from pathlib import Path
from html.parser import HTMLParser
from collections import Counter
import json, re
SITE=Path(__file__).resolve().parents[1]
class Page(HTMLParser):
 def __init__(self, source):
  super().__init__(convert_charrefs=True); self.ids=[]; self.refs=[]; self.links=[]; self.in_main=False; self.nodes=[]; self.h1=[]; self.heading=False; self.feed(source)
 def handle_starttag(self, tag, attributes):
  attrs=dict(attributes)
  if 'id' in attrs: self.ids.append(attrs['id'])
  if 'for' in attrs: self.refs.append(attrs['for'])
  if 'aria-labelledby' in attrs: self.refs.extend(attrs['aria-labelledby'].split())
  if tag=='a': self.links.append(attrs.get('href',''))
  if tag=='main': self.in_main=True
  if self.in_main:
   self.nodes.append((tag,attrs))
   if tag=='h1': self.heading=True; self.h1.append('')
 def handle_endtag(self, tag):
  if tag=='main': self.in_main=False
  if tag=='h1': self.heading=False
 def handle_data(self, value):
  if self.heading: self.h1[-1]+=value

def data(name):
 s=(SITE/f'src/data/{name}.ts').read_text();start=s.index('= [',s.index('export const '+name))+2
 return json.loads(s[start:s.index('\n];',start)+2])
products=data('products');collections=data('collections');makers=data('makers')
base=SITE/'.next/server/app'
routes=['/shop','/shop/collections','/shop/makers']+['/shop/'+x for x in ['seating','tables','beds','storage','lighting','rugs-and-textiles','decor-and-objects','art']]+['/shop/products/'+p['slug'] for p in products]+['/shop/collections/'+c['slug'] for c in collections]+['/shop/makers/'+m['slug'] for m in makers]
for route in routes:
 file=base/(route.lstrip('/')+'.html');assert file.exists(),route
 source=file.read_text();page=Page(source)
 duplicates=[id for id,count in Counter(page.ids).items() if count>1];assert not duplicates,(route,duplicates)
 for ref in page.refs: assert ref in page.ids,(route,'missing control reference',ref)
 for link in page.links:
  if link.startswith('/'):
   path=link.split('?')[0].split('#')[0]
   target=base/('index.html' if path=='/' else path.lstrip('/')+'.html')
   assert target.exists(),(route,'unresolved link',link)
 assert 'Kanlungan is a fictional brand created as a portfolio project.' in source,route
for p in products:
 page=Page((base/('shop/products/'+p['slug']+'.html')).read_text())
 assert page.h1==[p['name'],p['name']],(p['slug'],page.h1)
 inputs=[a for tag,a in page.nodes if tag=='input' and a.get('type')=='email']
 if p['slug']=='kiso-stool': assert len(inputs)==2
 else:
  for option in p['variants']:
   controls=[a for tag,a in page.nodes if tag=='button' and a.get('data-option-name')==option['name']]
   assert len(controls)==len(option['choices'])*2,(p['slug'],option['name'],len(controls))
   assert sum(a.get('aria-pressed')=='true' for a in controls)==2
for c in collections:
 page=Page((base/('shop/collections/'+c['slug']+'.html')).read_text())
 for slug in c['productSlugs']: assert '/shop/products/'+slug in page.links,(c['slug'],slug)
for m in makers:
 page=Page((base/('shop/makers/'+m['slug']+'.html')).read_text())
 for p in products:
  if p['maker']==m['name']: assert '/shop/products/'+p['slug'] in page.links,(m['slug'],p['slug'])
print(f'PASS: {len(routes)} Shop routes; both product headings and every option control; collection and maker product memberships; unique IDs and label references; all internal links resolve; fictional notice on every page.')
