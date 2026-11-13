import json,re,html,collections
d=json.load(open('/workspace/jamel/analysis/bank.json'))
def vl(s): return len(html.unescape(s))
print('count',len(d)); print(collections.Counter(x['domain'] for x in d))
print('ids unique',len({x['id'] for x in d})==len(d))
S=[x for x in d if not x['multi']]
print('pos',sorted(collections.Counter(x['answer'] for x in S).items()))
lg=0;lg_strict=0;r16=[];r14=[];errs=[]
for x in d:
    o=x['options'];L=[vl(s) for s in o]
    if len(o)!=4 or len(set(o))!=4: errs.append(x['id'])
    r=max(L)/min(L)
    if r>1.6:r16.append((x['id'],round(r,2)))
    if r>1.4:r14.append(x['id'])
    if x['multi']:
        assert all(0<=i<4 for i in x['answer'])
        continue
    a=x['answer']
    if L[a]==max(L):lg+=1
    if L[a]==max(L) and L.count(max(L))==1:lg_strict+=1
print('correct==longest (ties incl)',lg,'strict',lg_strict,'target<=53')
print('ratio>1.6',len(r16),r16); print('ratio>1.4',len(r14),r14)
print('option errors',errs)
for x in d:
    for s in x['options']:
        if re.search(r'[<>]|&(?!(amp|lt|gt|#\d+);)',s): print('unescaped',x['id'],s)
