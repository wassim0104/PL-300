import json,re,html,random,glob,importlib.util,sys
d=json.load(open('/workspace/jamel/analysis/bank-raw.json'))
R={}
for f in sorted(glob.glob('/workspace/jamel/analysis/bank-work/c[0-9].py')):
    ns={};exec(open(f).read(),ns);
    for k,v in ns['R'].items():
        assert k not in R,k; R[k]=v
ids={x['id'] for x in d}
assert set(R)<=ids,set(R)-ids
for x in d:
    v=R.get(x['id'])
    if v is None: continue
    if isinstance(v,tuple): _,x['options'],x['answer']=v; continue
    if isinstance(v,dict): x['q']=v['q']; v=v['o']
    x['options']=v; x['answer']=0   # correct first
# balanced positions
rnd=random.Random(300)
singles=[x for x in d if not x['multi']]
pos=[i%4 for i in range(len(singles))]; rnd.shuffle(pos)
def vl(s): return len(html.unescape(re.sub('<[^>]+>','',s)))
# prefer position where correct is not the longest
for x,p in zip(singles,pos):
    o=x['options'];a=x['answer'];c=o[a];rest=o[:a]+o[a+1:]
    L=[vl(s) for s in o]
    # if correct is longest (incl. ties) try other target positions in cyclic order pref
    x['_c']=c;x['_r']=rest;x['_p']=p
cnt=[0]*4
# second pass: assign positions greedily to balance; keep rnd pos as default
for x in singles:
    c,rest,p=x['_c'],x['_r'],x['_p']
    o=rest[:p]+[c]+rest[p:]
    x['options']=o;x['answer']=p
    del x['_c'],x['_r'],x['_p']
# escape
ent=re.compile(r'&(#\d+|#x[0-9a-fA-F]+|[a-zA-Z]+);')
def esc(s,opt):
    if opt:
        s=html.unescape(s)
        return s.replace('&','&amp;').replace('<','&lt;').replace('>','&gt;')
    # q/explain: keep tags, escape bare & and bare < > not tags
    s=re.sub(r'&(?!(#\d+|#x[0-9a-fA-F]+|[a-zA-Z]+);)','&amp;',s)
    s=re.sub(r'<(?!/?[a-zA-Z][^<>]*>)','&lt;',s)
    s=re.sub(r'(?<![a-zA-Z0-9"\'/ ])>','&gt;',s) if False else s
    return s
for x in d:
    x['options']=[esc(s,True) for s in x['options']]
    x['q']=esc(x['q'],False); x['explain']=esc(x['explain'],False)
json.dump(d,open('/workspace/jamel/analysis/bank.json','w'),ensure_ascii=False,indent=None) if False else None
body=',\n'.join(json.dumps(x,ensure_ascii=False) for x in d)
open('/workspace/jamel/analysis/bank.json','w').write('[\n'+body+'\n]\n')
open('/workspace/jamel/assets/bank.js','w').write('window.PL300_BANK = [\n'+body+'\n];\n')
