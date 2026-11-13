import re,os,glob,collections,sys
root='/workspace/jamel'; bad=collections.defaultdict(list); n=0
files=[f for f in glob.glob(root+'/**/*.html',recursive=True) if '/pl300/' not in f and '/.claude/' not in f]
for f in files:
    s=open(f,encoding='utf-8').read()
    for m in re.finditer(r'''(?:href|src)=["']([^"'#?]+)(#[^"']*)?["']''',s):
        u=m.group(1)
        if re.match(r'(https?:|mailto:|javascript:|data:)',u): continue
        n+=1
        t=os.path.join(root,u.lstrip('/')) if u.startswith('/') else os.path.join(os.path.dirname(f),u)
        if u.startswith('/api/'): continue
        if not os.path.exists(os.path.normpath(t)): bad[u].append(os.path.relpath(f,root))
print(len(files),'files',n,'local links',sum(len(v) for v in bad.values()),'broken')
for u,v in sorted(bad.items(),key=lambda x:-len(x[1])): print(f'{len(v):3} {u}  <- {", ".join(sorted(set(v))[:4])}')
