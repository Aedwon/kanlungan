"""Transcribe wave 2 artboards without changing their layout or paintings.

Run from any directory with Python's standard library. Only writes under site/.
"""
from pathlib import Path
from html.parser import HTMLParser
import json, re
ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'site'
class Node:
 def __init__(self, tag, attrs): self.tag, self.attrs, self.children = tag, dict(attrs), []
 def text(self): return ''.join(x.text() if isinstance(x, Node) else x for x in self.children)
class Parser(HTMLParser):
 def __init__(self): super().__init__(convert_charrefs=True); self.root=Node('div', []); self.stack=[self.root]
 def handle_starttag(self, tag, attrs):
  node=Node(tag, attrs); self.stack[-1].children.append(node)
  if tag not in ['input','link','meta','br','hr','img','col']: self.stack.append(node)
 def handle_endtag(self, tag):
  for i in range(len(self.stack)-1,0,-1):
   if self.stack[i].tag==tag: self.stack=self.stack[:i]; break
 def handle_data(self, data): self.stack[-1].children.append(data)
def walk(node):
 if isinstance(node, Node):
  yield node
  for child in node.children: yield from walk(child)
def camel(s): return re.sub(r'-([a-z])',lambda m:m[1].upper(),s)
def style(s, size):
 result={}
 for part in s.split(';'):
  if ':' not in part: continue
  k,v=part.split(':',1); k,v=k.strip(),v.strip()
  v=v.replace("'Newsreader'",'var(--font-newsreader)').replace("'Hanken Grotesk'",'var(--font-hanken)')
  # Fluid at other mobile widths, preserving the 390px board geometry.
  if size=='mobile' and k=='width' and v=='350px': v='calc(100% - 40px)'
  result[k if k.startswith('--') else camel(k)]=v
 return result
routes={'Studio':'/studio','Projects':'/projects','View projects':'/projects','Shop':'/shop','About':'/about','Makers':'/shop/makers','Book a discovery call':'/book','Full-Service Furnishing':'/studio/full-service-furnishing','Interior Design Direction':'/studio/interior-design-direction','Lilok Workshop':'/shop/makers/lilok-workshop','Sulihiya Studio':'/shop/makers/sulihiya-studio','Tikog Loom':'/shop/makers/tikog-loom'}
for name in ['Lilim House','Tanaw Residence','Dalampasigan Inn','Pahinga Villas','Hardin Apartment']:
 routes[name]='/projects/'+name.lower().replace(' ','-')
def convert(node,size):
 if isinstance(node,str): return node
 attrs={}
 for k,v in node.attrs.items():
  k={'class':'className','tabindex':'tabIndex','viewbox':'viewBox','stroke-width':'strokeWidth','stroke-linecap':'strokeLinecap','stroke-linejoin':'strokeLinejoin','for':'htmlFor'}.get(k,k)
  if k=='style': v=style(v,size)
  elif v is None: v=True
  elif k=='tabIndex': v=int(v)
  attrs[k]=v
 if node.tag=='a' and attrs.get('href')=='#':
  text=node.text().strip().replace('→','').strip()
  keys=[k for k in routes if text.startswith(k) or (routes[k].startswith('/projects/') and k in text)]
  if keys: attrs['href']=routes[max(keys,key=len)]
  elif text.startswith('About this service'): pass # resolved in document order below
  elif 'pin' not in node.attrs.get('class','').split() and not re.search(r'\bk\d+\b',node.attrs.get('class','')): raise ValueError('Unresolved link: '+text)
 if node.tag=='a' and node.text().strip()=='Book a discovery call': attrs['data-page-book']=True
 if node.tag=='details': attrs['name']='faq-'+size
 return {'tag':node.tag,'attrs':attrs,'children':[convert(c,size) for c in node.children if not isinstance(c,str) or c.strip()]}
def scope_css(css,scope):
 # Isolate choreography: the reference uses common names also present on Home.
 names=set(re.findall(r'@keyframes\s+(\w+)',css))
 for name in names:
  css=re.sub(r'(@keyframes\s+)'+name+r'\b',lambda m:m[1]+scope+'-'+name,css)
  css=re.sub(r'(animation(?:-name)?:)([^;}]+)',lambda m:m[1]+re.sub(r'\b'+name+r'\b',scope+'-'+name,m[2]),css)
 css=css.replace("'Newsreader'",'var(--font-newsreader)').replace("'Hanken Grotesk'",'var(--font-hanken)')
 def blocks(s):
  result=''; start=0
  while start<len(s):
   op=s.find('{',start)
   if op<0: break
   selector=s[start:op].strip(); level=1; end=op+1
   while level:
    if s[end]=='{': level+=1
    elif s[end]=='}': level-=1
    end+=1
   inner=s[op+1:end-1]
   if selector.startswith('@keyframes'): result+=selector+'{'+inner+'}\n'
   elif selector.startswith('@'): result+=selector+'{'+blocks(inner)+'}\n'
   else:
    # Split selector lists only at top level, not inside :has() or :is().
    sels=re.split(r',\s*(?![^()]*\))',selector)
    sels=['.'+scope if x in [':root','.pg','body'] else '.'+scope+' '+x for x in sels]
    result+=','.join(sels)+'{'+inner+'}\n'
   start=end
  return result
 return blocks(css)
data={}; css=[]; extra_paints={}
for name in ['studio','service','projects','project','about']:
 for size in ['desktop','mobile']:
  source=(ROOT/f'design/round-2-templates/T-{name}-{size}.dc.html').read_text()
  parser=Parser(); parser.feed(source)
  main=next(n for n in walk(parser.root) if n.tag=='main')
  links=[n for n in walk(main) if n.tag=='a' and n.text().strip().startswith('About this service')]
  for n,url in zip(links,['/studio/full-service-furnishing','/studio/interior-design-direction']): n.attrs['href']=url
  # Harvest every project product painting, extending the foundation's six.
  if name=='project' and size=='desktop':
   for n in walk(main):
    if n.tag=='a' and re.search(r'\bk\d+\b',n.attrs.get('class','')):
     image=next(x for x in walk(n) if x.attrs.get('role')=='img')
     product=image.attrs['aria-label'].split(' on a pale')[0]
     paint=next(x for x in walk(image) if x.attrs.get('class')=='im')
     extra_paints[product.lower().replace(' ','-')]={'alt':image.attrs['aria-label'],'background':style(paint.attrs['style'],size)['background'],'caption':'Placeholder · '+product}
  scope=f'wave-{name}-{size}'
  main.tag='div'; main.attrs={'class':f'wave-page wave-{size} {scope}'}
  data[f'{name}-{size}']=convert(main,size)
  css.append('@media ('+('min-width:1280px' if size=='desktop' else 'max-width:1279px')+') {\n'+scope_css(source.split('<style>')[1].split('</style>')[0],scope)+'}\n')
(OUT/'src/data/studio-templates.json').write_text(json.dumps(data,ensure_ascii=False,separators=(',',':'))+'\n')
(OUT/'src/styles/studio-reference.css').write_text('/* Generated from the approved wave 2 artboards. */\n'+''.join(css))
(OUT/'src/data/project-product-placeholders.ts').write_text('// Approved project artboard product paintings.\nexport const projectProductPlaceholders: Record<string, { alt: string; background: string; caption: string }> = '+json.dumps(extra_paints,ensure_ascii=False,indent=2)+';\n')
# Service facts absent from the foundation transcription, sourced directly at build time.
source=(ROOT/'docs/concept/services.md').read_text()
services={}
for key,title in [('furnishing','Full-Service Furnishing'),('direction','Interior Design Direction')]:
 section=source.split('## Process\n')[1].split('## Pricing model')[0]
 body=section.split('### '+title+'\n')[1].split('### ')[0]
 process=[]
 for title_,text in re.findall(r'^\d+\. \*\*(.+?)\.\*\* (.+)',body,re.M): process.append({'title':title_,'text':text})
 scope=source.split('Scope may include:\n\n')[1 if key=='furnishing' else 2].split('\n\n')[0]
 faq_source=(ROOT/'docs/content/copy.md').read_text().split('## Service page FAQs')[1].split('## Studio page')[0].split('### '+title+'\n')[1].split('### ')[0]
 services[key]={'process':process,'included':[x[2:] for x in scope.splitlines() if x.startswith('- ')],'faq':[{'question':q,'answer':a} for q,a in re.findall(r'- \*\*(.+?)\*\* (.+)',faq_source)]}
(OUT/'src/data/service-content.json').write_text(json.dumps(services,ensure_ascii=False,indent=2)+'\n')
print('Transcribed 10 artboards, both service scopes and processes, and 10 product paintings.')
