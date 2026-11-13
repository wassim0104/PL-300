import json,sys
d=json.load(open('/workspace/jamel/analysis/bank-raw.json'))
a,b=int(sys.argv[1]),int(sys.argv[2])
for i,x in enumerate(d[a:b],a):
    o=x['options'];L=[len(s) for s in o]
    if x['multi']: flag='M'
    else:
        r=max(L)/min(L); lg=L[x['answer']]==max(L) and L.count(max(L))==1
        flag='' if not(r>1.4 or lg) else 'FIX'
    print(f"## {i} {x['id']} {flag} ans={x['answer']}\nQ: {x['q']}")
    for j,s in enumerate(o): print(f"  {'*' if (j in x['answer'] if x['multi'] else j==x['answer']) else ' '}{j} [{len(s)}] {s}")
