import json,re,sys,collections
src=open('/workspace/jamel/analysis/synthesis.md').read()
lesson=None;qs=[];bad=0
for line in src.splitlines():
    m=re.match(r'### Lesson (\d{4})',line)
    if m: lesson=m.group(1)
    if re.match(r'^\s*(-\s*)?`?\{"id"',line.strip()) or line.strip().startswith('{"id"'):
        s=line.strip().lstrip('-').strip().strip('`')
        try: q=json.loads(s)
        except Exception as e: bad+=1; print('BAD',lesson,s[:80],e); continue
        q['id']=f"L{lesson}-{q['id']}"; q['lesson']=lesson; qs.append(q)
print('questions',len(qs),'bad',bad)
print('domains',collections.Counter(q['domain'] for q in qs))
pos=collections.Counter(str(q['answer']) for q in qs); print('answer pos',pos)
ratios=[]
for q in qs:
    L=[len(o) for o in q['options']]; ratios.append((max(L)/max(1,min(L)),q['id']))
ratios.sort(reverse=True); print('worst option length ratios',ratios[:8])
# longest option is correct?
lc=sum(1 for q in qs if not q.get('multi') and len(q['options'][q['answer']])==max(len(o) for o in q['options']))
print('correct==longest',lc,'of',sum(1 for q in qs if not q.get('multi')))
print('missing cite',[q['id'] for q in qs if not q.get('cite')])
json.dump(qs,open(sys.argv[1],'w'),indent=0,ensure_ascii=False)
