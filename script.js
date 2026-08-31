/* ═══════════ APP — tidak perlu diedit untuk mengganti konten ═══════════ */
(function(){
"use strict";
const $  = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>Array.prototype.slice.call(r.querySelectorAll(s));
const esc = s => String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const P = SITE.profile, S = SITE.social;

const I={
 linkedin:'<path d="M4.98 3.5a2.5 2.5 0 11-.01 5 2.5 2.5 0 01.01-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-4z" fill="currentColor" stroke="none"/>',
 github:'<path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.2-3.37-1.2-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z" fill="currentColor" stroke="none"/>',
 mail:'<rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="M3 7l9 6 9-6"/>',
 whatsapp:'<path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.53 3.76 1.45 5.32L2 22l4.98-1.6a9.8 9.8 0 005.06 1.4h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.48 2 12.04 2zm5.72 13.9c-.24.68-1.4 1.3-1.93 1.34-.5.05-.98.23-3.3-.7-2.78-1.1-4.55-3.94-4.69-4.12-.14-.19-1.13-1.5-1.13-2.87 0-1.36.71-2.03.97-2.31.24-.27.53-.34.71-.34.18 0 .35 0 .5.01.17.01.4-.06.62.48.24.57.8 1.98.87 2.12.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.17-.3.37-.42.5-.14.14-.29.29-.12.57.16.28.73 1.2 1.56 1.95 1.07.95 1.97 1.25 2.25 1.39.28.14.44.12.6-.07.17-.19.7-.81.88-1.09.19-.28.37-.23.62-.14.25.09 1.6.75 1.87.89.28.14.46.21.53.32.07.12.07.66-.17 1.34z" fill="currentColor" stroke="none"/>',
 network:'<circle cx="12" cy="5" r="2.4"/><circle cx="5" cy="18" r="2.4"/><circle cx="19" cy="18" r="2.4"/><path d="M12 7.4v4.2M12 11.6L6.6 16M12 11.6L17.4 16"/>',
 server:'<rect x="3" y="4" width="18" height="6" rx="1.6"/><rect x="3" y="14" width="18" height="6" rx="1.6"/><path d="M7 7h.01M7 17h.01"/>',
 storage:'<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
 pulse:'<path d="M2.5 12h4l2.5-7 4 14 3-7h5.5"/>',
 terminal:'<rect x="2.5" y="4" width="19" height="16" rx="2.2"/><path d="M7 9l3 3-3 3M13 15h4"/>',
 pin:'<path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>',
 cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
 ext:'<path d="M14 4h6v6M20 4l-9 9M18 14v5a1.6 1.6 0 01-1.6 1.6H5.6A1.6 1.6 0 014 19V8.2A1.6 1.6 0 015.6 6.6h5"/>',
 award:'<circle cx="12" cy="9" r="5.2"/><path d="M8.2 13.4L7 21.5l5-2.6 5 2.6-1.2-8.1"/>',
 cap:'<path d="M2.5 8.5L12 4l9.5 4.5L12 13 2.5 8.5z"/><path d="M6.5 10.6V16c0 1.6 2.6 3 5.5 3s5.5-1.4 5.5-3v-5.4"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 check:'<path d="M20 6L9 17l-5-5"/>'
};
const svg=(d,w)=>'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="'+(w||2)+'" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+d+'</svg>';

const mailTo="mailto:"+S.email;
const waLink=S.whatsapp?"https://wa.me/"+String(S.whatsapp).replace(/\D/g,""):"";
const socialSet=[
  {label:"LinkedIn",href:S.linkedin,icon:I.linkedin},
  {label:"GitHub",href:S.github,icon:I.github},
  {label:"Email",href:mailTo,icon:I.mail},
  {label:"WhatsApp",href:waLink,icon:I.whatsapp}
].filter(x=>x.href);

/* ── teks statis ── */
const firstName=P.fullName.split(" ")[0].toLowerCase();
const bind={
  brandName:P.fullName, brandRole:P.title.toUpperCase(), fullName:P.fullName, fullName2:P.fullName,
  status:P.status, intro:P.intro, locationTag:P.location, roleFoot:P.title,
  motto:SITE.footer.motto, signature:SITE.footer.signature,
  aboutHeading:SITE.about.heading, envCaption:"· "+SITE.environment.caption,
  cvMeta:SITE.cv.updated, termHost:firstName+"@infra:~",
  copyright:"© "+new Date().getFullYear()+" "+P.fullName+". All rights reserved."
};
Object.keys(bind).forEach(k=>{const el=$('[data-bind="'+k+'"]'); if(el) el.textContent=bind[k];});
document.title=P.fullName+" — "+P.title;

["navCv","heroCv","resumeCv"].forEach(id=>{const a=$("#"+id); if(a) a.href=SITE.cv.file;});
$("#resumeOnline").href=SITE.cv.online||"#experience";

$("#portraitSlot").outerHTML = P.photo
  ? '<img src="'+esc(P.photo)+'" alt="Foto profil '+esc(P.fullName)+'" decoding="async">'
  : '<div class="initials" role="img" aria-label="Inisial '+esc(P.fullName)+'">'+esc(P.initials)+'</div>';

const socialHTML=socialSet.map(s=>'<a class="icon-btn" href="'+esc(s.href)+'" aria-label="'+s.label+'"'+(/^https?:/.test(s.href)?' target="_blank" rel="noopener"':'')+'>'+svg(s.icon,1.9)+'</a>').join("");
$("#heroSocials").innerHTML=socialHTML;
$("#footSocials").innerHTML=socialHTML;
$("#heroFocus").innerHTML=P.focus.map(f=>'<span class="chip">'+esc(f)+'</span>').join("");

/* ── nav ── */
const SECTIONS=[["home","Home"],["about","About"],["experience","Experience"],["skills","Skills"],
  ["projects","Projects"],["certifications","Certifications"],["education","Education"],["contact","Contact"]];
$("#navLinks").innerHTML=SECTIONS.map(s=>'<a href="#'+s[0]+'" data-nav="'+s[0]+'">'+s[1]+'</a>').join("");
$("#drawer").innerHTML=SECTIONS.map((s,i)=>'<a href="#'+s[0]+'" data-nav="'+s[0]+'">'+s[1]+'<span>0'+(i+1)+'</span></a>').join("")
  +'<a class="btn btn-primary" href="'+esc(SITE.cv.file)+'" download>Download CV</a>';

const nav=$("#nav"),burger=$("#burger"),drawer=$("#drawer");
burger.addEventListener("click",()=>{
  const open=drawer.classList.toggle("open");
  burger.setAttribute("aria-expanded",String(open));
  burger.setAttribute("aria-label",open?"Close menu":"Open menu");
  document.body.style.overflow=open?"hidden":"";
});
drawer.addEventListener("click",e=>{ if(e.target.closest("a")){drawer.classList.remove("open");burger.setAttribute("aria-expanded","false");document.body.style.overflow="";} });

const progress=$("#progress"),toTop=$("#toTop");
let ticking=false;
function onScroll(){
  const y=window.scrollY;
  nav.classList.toggle("stuck",y>12);
  toTop.classList.toggle("show",y>620);
  const h=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(h>0?(y/h)*100:0)+"%";
  ticking=false;
}
window.addEventListener("scroll",()=>{if(!ticking){ticking=true;requestAnimationFrame(onScroll);}},{passive:true});
onScroll();
toTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:reduced?"auto":"smooth"}));

const navAnchors=$$("[data-nav]");
const spy=new IntersectionObserver(es=>{
  es.forEach(e=>{ if(e.isIntersecting) navAnchors.forEach(a=>a.classList.toggle("active",a.dataset.nav===e.target.id)); });
},{rootMargin:"-45% 0px -50% 0px"});
SECTIONS.map(s=>document.getElementById(s[0])).filter(Boolean).forEach(s=>spy.observe(s));

/* ── theme ── */
let light=false;
$("#themeBtn").addEventListener("click",()=>{
  light=!light;
  document.documentElement.dataset.theme=light?"light":"dark";
  $("#themeBtn").setAttribute("aria-label",light?"Switch to dark theme":"Switch to light theme");
  $("#themeIcon").innerHTML=light
    ? '<path d="M21 13.2A8.6 8.6 0 1110.8 3a6.9 6.9 0 1010.2 10.2z"/>'
    : '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';
  const tc=document.querySelector('meta[name="theme-color"]'); if(tc) tc.content=light?"#f3f6fb":"#05070d";
});

/* ── reveal ── */
const rvObs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");rvObs.unobserve(e.target);}});},{rootMargin:"0px 0px -8% 0px",threshold:.08});
function watch(el){ if(reduced) el.classList.add("in"); else rvObs.observe(el); }
$$(".rv").forEach(watch);

/* ── typing ── */
(function(){
  const el=$("#typed"), list=(P.typing&&P.typing.length)?P.typing:[P.title];
  if(reduced||list.length===1){el.textContent=list[0];return;}
  let i=0,c=0,del=false;
  (function tick(){
    const word=list[i];
    c+=del?-1:1;
    el.textContent=word.slice(0,c);
    let wait=del?45:78;
    if(!del&&c===word.length){wait=1900;del=true;}
    else if(del&&c===0){del=false;i=(i+1)%list.length;wait=280;}
    setTimeout(tick,wait);
  })();
})();

/* ── hero network canvas ── */
(function(){
  const cv=$("#net"); if(!cv||!cv.getContext) return;
  const ctx=cv.getContext("2d"); if(!ctx) return;
  let w=0,h=0,nodes=[],packets=[],raf=null,visible=true;

  function build(){
    const r=cv.getBoundingClientRect(); if(!r.width) return;
    const dpr=Math.min(window.devicePixelRatio||1,1.6);
    w=r.width; h=r.height;
    cv.width=Math.round(w*dpr); cv.height=Math.round(h*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    const n=Math.max(16,Math.min(50,Math.round(w*h/26000)));
    nodes=Array.from({length:n},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:Math.random()*1.6+1}));
    packets=Array.from({length:Math.min(7,Math.round(n/6))},()=>({a:(Math.random()*n)|0,b:(Math.random()*n)|0,t:Math.random(),sp:.0022+Math.random()*.0026}));
  }
  function frame(){
    ctx.clearRect(0,0,w,h);
    const isLight=document.documentElement.dataset.theme==="light";
    const lineC=isLight?"37,99,235":"90,150,225", nodeC=isLight?"37,99,235":"34,211,238";
    const D=Math.min(180,Math.max(110,w/9));
    for(const n of nodes){
      n.x+=n.vx; n.y+=n.vy;
      if(n.x<-20)n.x=w+20; if(n.x>w+20)n.x=-20;
      if(n.y<-20)n.y=h+20; if(n.y>h+20)n.y=-20;
    }
    ctx.lineWidth=.7;
    for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){
      const a=nodes[i],b=nodes[j],dx=a.x-b.x,dy=a.y-b.y,d2=dx*dx+dy*dy;
      if(d2<D*D){
        const o=(1-Math.sqrt(d2)/D)*(isLight?.22:.3);
        ctx.strokeStyle="rgba("+lineC+","+o.toFixed(3)+")";
        ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
      }
    }
    ctx.fillStyle="rgba("+nodeC+","+(isLight?.45:.62)+")";
    for(const n of nodes){ctx.beginPath();ctx.arc(n.x,n.y,n.r,0,6.283);ctx.fill();}
    ctx.fillStyle="rgba("+nodeC+",.9)";
    for(const p of packets){
      if(nodes.length<2)break;
      const a=nodes[p.a%nodes.length],b=nodes[p.b%nodes.length];
      p.t+=p.sp;
      if(p.t>=1){p.t=0;p.a=(Math.random()*nodes.length)|0;p.b=(Math.random()*nodes.length)|0;continue;}
      ctx.beginPath();ctx.arc(a.x+(b.x-a.x)*p.t,a.y+(b.y-a.y)*p.t,1.9,0,6.283);ctx.fill();
    }
    raf=requestAnimationFrame(frame);
  }
  function start(){ if(!raf&&visible&&!reduced) raf=requestAnimationFrame(frame); }
  function stop(){ if(raf){cancelAnimationFrame(raf);raf=null;} }
  build();
  if(reduced){ frame(); stop(); }
  new IntersectionObserver(es=>{visible=es[0].isIntersecting;visible?start():stop();},{threshold:.02}).observe(cv);
  document.addEventListener("visibilitychange",()=>document.hidden?stop():start());
  let t; window.addEventListener("resize",()=>{clearTimeout(t);t=setTimeout(build,220);},{passive:true});
  start();
})();

/* ── about ── */
$("#aboutBody").innerHTML=SITE.about.paragraphs.map(p=>"<p>"+esc(p)+"</p>").join("");
$("#aboutHighlights").innerHTML=SITE.about.highlights.map(h=>"<li>"+svg(I.check,2.4)+"<span>"+esc(h)+"</span></li>").join("");
$("#termBody").innerHTML=SITE.about.terminal.map(t=>'<div><span class="c">$</span> '+esc(t.cmd)+'</div><div class="o">'+esc(t.out)+"</div>").join("");

$("#stats").innerHTML=SITE.stats.map(s=>'<div class="card stat rv"><b data-val="'+esc(s.value)+'" data-suf="'+esc(s.suffix||"")+'">'+esc(s.value)+esc(s.suffix||"")+"</b><span>"+esc(s.label)+"</span></div>").join("");
$$("#stats .rv").forEach(watch);
if(!reduced){
  const cObs=new IntersectionObserver(es=>es.forEach(e=>{
    if(!e.isIntersecting)return;
    cObs.unobserve(e.target);
    const b=e.target.querySelector("b"),raw=b.dataset.val,suf=b.dataset.suf,n=parseFloat(raw);
    if(!isFinite(n)||/[^\d.]/.test(raw))return;
    const t0=performance.now();
    (function step(now){
      const k=Math.min(1,(now-t0)/1100),eased=1-Math.pow(1-k,3);
      b.textContent=Math.round(n*eased)+(k===1?suf:"");
      if(k<1)requestAnimationFrame(step);
    })(t0);
  }),{threshold:.4});
  $$("#stats .stat").forEach(el=>cObs.observe(el));
}

/* ── skills ── */
const LV=["","Beginner","Intermediate","Advanced","Expert"];
const skillCats=["All"].concat(SITE.skills.map(g=>g.category));
$("#skillTabs").innerHTML=skillCats.map((c,i)=>{
  const count=c==="All"?SITE.skills.reduce((a,g)=>a+g.items.length,0):(SITE.skills.filter(g=>g.category===c)[0]||{items:[]}).items.length;
  return '<button class="tab" role="tab" aria-selected="'+(i===0)+'" data-cat="'+esc(c)+'">'+esc(c)+"<i>"+count+"</i></button>";
}).join("");
function renderSkills(cat){
  const groups=cat==="All"?SITE.skills:SITE.skills.filter(g=>g.category===cat);
  const items=[];
  groups.forEach(g=>g.items.forEach(it=>items.push({name:it.name,level:it.level,cat:g.category,icon:g.icon})));
  $("#skillGrid").innerHTML=items.map(s=>
    '<article class="card skill"><div class="skill-top"><span class="skill-ico">'+svg(I[s.icon]||I.terminal,1.9)+'</span>'
    +'<span><span class="skill-name">'+esc(s.name)+'</span><br><span class="skill-cat">'+esc(s.cat)+'</span></span></div>'
    +'<div class="level"><span class="bars" role="img" aria-label="Level '+LV[s.level]+'">'
    +[1,2,3,4].map(i=>'<i class="'+(i<=s.level?"on":"")+'"></i>').join("")
    +'</span><span>'+LV[s.level]+"</span></div></article>").join("");
}
renderSkills("All");
$("#skillTabs").addEventListener("click",e=>{
  const b=e.target.closest(".tab"); if(!b)return;
  $$("#skillTabs .tab").forEach(t=>t.setAttribute("aria-selected",String(t===b)));
  renderSkills(b.dataset.cat);
});

/* ── experience ── */
$("#expList").innerHTML=SITE.experience.map((x,i)=>
 '<div class="tl-item rv"><article class="card exp'+(i===0?" open":"")+'">'
 +'<button class="exp-head" aria-expanded="'+(i===0)+'" aria-controls="expp-'+i+'"><span>'
 +'<span class="exp-role">'+esc(x.role)+'</span><span class="exp-co">'+esc(x.company)+'</span>'
 +'<span class="exp-meta"><span>'+svg(I.cal,1.8)+esc(x.start)+" — "+esc(x.end)+'</span>'
 +'<span>'+svg(I.pin,1.8)+esc(x.location)+"</span>"
 +(x.current?'<span class="chip" style="padding:2px 8px">Current</span>':"")+"</span></span>"
 +'<span class="exp-toggle" aria-hidden="true">'+svg(I.plus,2.2)+"</span>"
 +(x.summary?'<span class="exp-summary">'+esc(x.summary)+"</span>":"")
 +'</button><div class="exp-panel" id="expp-'+i+'"><div><div class="exp-inner">'
 +((x.responsibilities||[]).length?'<div class="exp-block"><h4>responsibilities</h4><ul>'+x.responsibilities.map(r=>"<li>"+esc(r)+"</li>").join("")+"</ul></div>":"")
 +((x.achievements||[]).length?'<div class="exp-block win"><h4>achievements</h4><ul>'+x.achievements.map(r=>"<li>"+esc(r)+"</li>").join("")+"</ul></div>":"")
 +((x.projects||[]).length?'<div class="exp-block"><h4>projects handled</h4><div class="tags">'+x.projects.map(t=>'<span class="chip">'+esc(t)+"</span>").join("")+"</div></div>":"")
 +((x.tech||[]).length?'<div class="exp-block"><h4>technologies</h4><div class="tags">'+x.tech.map(t=>'<span class="chip">'+esc(t)+"</span>").join("")+"</div></div>":"")
 +"</div></div></div></article></div>").join("");
$$("#expList .rv").forEach(watch);
$("#expList").addEventListener("click",e=>{
  const b=e.target.closest(".exp-head"); if(!b)return;
  const card=b.closest(".exp"),open=card.classList.toggle("open");
  b.setAttribute("aria-expanded",String(open));
});

/* ── projects ── */
function projArt(seed){
  const r=n=>(Math.sin(seed*9.7+n*3.1)+1)/2;
  let g="";
  for(let i=0;i<7;i++){
    const x=30+r(i)*300,y=20+r(i+9)*90;
    if(i){const px=30+r(i-1)*300,py=20+r(i+8)*90;
      g+='<line x1="'+px.toFixed(1)+'" y1="'+py.toFixed(1)+'" x2="'+x.toFixed(1)+'" y2="'+y.toFixed(1)+'" stroke="rgba(120,170,235,.3)" stroke-width="1"/>';}
    g+='<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="'+(2+r(i+3)*2).toFixed(1)+'" fill="rgba(34,211,238,.8)"/>';
  }
  return '<svg viewBox="0 0 360 130" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
   +'<defs><pattern id="p'+seed+'" width="26" height="26" patternUnits="userSpaceOnUse"><path d="M26 0H0v26" fill="none" stroke="rgba(120,170,235,.13)" stroke-width="1"/></pattern></defs>'
   +'<rect width="360" height="130" fill="url(#p'+seed+')"/>'+g+"</svg>";
}
const statusCls=s=>/live|active/i.test(s)?"live":/progress|ongoing/i.test(s)?"progress":"done";
const projCats=["All"].concat(SITE.projects.map(p=>p.category).filter((v,i,a)=>a.indexOf(v)===i));
$("#projTabs").innerHTML=projCats.map((c,i)=>'<button class="tab" role="tab" aria-selected="'+(i===0)+'" data-cat="'+esc(c)+'">'+esc(c)+"</button>").join("");
function renderProjects(cat){
  const list=cat==="All"?SITE.projects:SITE.projects.filter(p=>p.category===cat);
  const grid=$("#projGrid");
  if(!list.length){grid.innerHTML='<p class="empty">Belum ada proyek pada kategori ini.</p>';return;}
  grid.innerHTML=list.map((p,i)=>
   '<article class="card proj"><div class="proj-vis">'
   +(p.image?'<img src="'+esc(p.image)+'" alt="Pratinjau proyek '+esc(p.name)+'" loading="lazy" decoding="async">':projArt(i+1))
   +'<span class="pv-tag">'+esc(p.category)+" · "+esc(p.year)+"</span></div>"
   +'<div class="proj-body"><div class="proj-top"><h3>'+esc(p.name)+"</h3>"
   +'<span class="badge '+statusCls(p.status)+'">'+esc(p.status)+"</span></div>"
   +"<p>"+esc(p.description)+"</p>"
   +'<div class="tags">'+p.tech.map(t=>'<span class="chip">'+esc(t)+"</span>").join("")+"</div>"
   +'<div class="proj-foot"><span class="proj-role">role · '+esc(p.role)+'</span><span class="proj-links">'
   +((p.links&&p.links.github)?'<a href="'+esc(p.links.github)+'" target="_blank" rel="noopener" aria-label="Repositori '+esc(p.name)+'">'+svg(I.github,1.8)+"</a>":"")
   +((p.links&&p.links.demo)?'<a href="'+esc(p.links.demo)+'" target="_blank" rel="noopener" aria-label="Demo '+esc(p.name)+'">'+svg(I.ext,1.8)+"</a>":"")
   +"</span></div></div></article>").join("");
}
renderProjects("All");
$("#projTabs").addEventListener("click",e=>{
  const b=e.target.closest(".tab"); if(!b)return;
  $$("#projTabs .tab").forEach(t=>t.setAttribute("aria-selected",String(t===b)));
  renderProjects(b.dataset.cat);
});

/* ── certifications ── */
$("#certList").innerHTML=SITE.certifications.map(c=>
 '<article class="card cert"><span class="cert-seal">'+svg(I.award,1.9)+"</span><div><h3>"+esc(c.name)+"</h3>"
 +'<p class="cert-sub">'+esc(c.issuer)+(c.date?" · "+esc(c.date):"")+"</p>"
 +(c.credentialId?'<p class="cert-id">ID · '+esc(c.credentialId)+"</p>":"")+"</div>"
 +(c.url?'<a class="cert-verify" href="'+esc(c.url)+'" target="_blank" rel="noopener">Verify '+svg(I.ext,2)+"</a>":"")
 +"</article>").join("");

/* ── education ── */
$("#eduList").innerHTML=SITE.education.map(e=>
 '<article class="card edu"><div style="display:flex;gap:14px;align-items:flex-start">'
 +'<span class="cert-seal">'+svg(I.cap,1.9)+"</span><div><h3>"+esc(e.institution)+"</h3>"
 +'<p class="edu-sub">'+esc(e.degree)+'</p><p class="edu-meta"><span>'+esc(e.start)+" — "+esc(e.end)+"</span>"
 +(e.gpa?"<span>GPA "+esc(e.gpa)+"</span>":"")+"</p></div></div>"
 +(((e.coursework||[]).length||e.achievement)?'<div class="edu-extra">'
   +(e.achievement?'<p class="edu-note">'+esc(e.achievement)+"</p>":"")
   +((e.coursework||[]).length?'<div class="tags" style="margin-top:10px">'+e.coursework.map(c=>'<span class="chip">'+esc(c)+"</span>").join("")+"</div>":"")
   +"</div>":"")
 +"</article>").join("");

/* ── environment diagram ── */
(function(){
  const E=SITE.environment,byId={};
  E.nodes.forEach(n=>byId[n.id]=n);
  const W=760,H=300,bw=112,bh=54;
  const links=E.links.map(pair=>{
    const A=byId[pair[0]],B=byId[pair[1]]; if(!A||!B)return "";
    const x1=A.x+bw/2,y1=A.y,x2=B.x-bw/2,y2=B.y,mx=(x1+x2)/2;
    const d=Math.abs(y1-y2)<2?"M"+x1+" "+y1+" L"+x2+" "+y2
      :"M"+x1+" "+y1+" C"+mx+" "+y1+" "+mx+" "+y2+" "+x2+" "+y2;
    return '<path class="link" data-a="'+pair[0]+'" data-b="'+pair[1]+'" d="'+d+'"/>';
  }).join("");
  const nodesSvg=E.nodes.map(n=>
    '<g class="node" data-id="'+n.id+'" tabindex="0" role="button" aria-label="'+esc(n.label)+" — "+esc(n.kind)+'">'
    +'<rect x="'+(n.x-bw/2)+'" y="'+(n.y-bh/2)+'" width="'+bw+'" height="'+bh+'" rx="11"/>'
    +'<text class="nlabel" x="'+n.x+'" y="'+(n.y-2)+'" text-anchor="middle">'+esc(n.label)+"</text>"
    +'<text x="'+n.x+'" y="'+(n.y+15)+'" text-anchor="middle">'+esc(n.kind)+"</text></g>").join("");
  const motion=reduced?"":'<circle class="packet" r="3"><animateMotion dur="4.6s" repeatCount="indefinite" path="M'+(byId.inet?byId.inet.x+bw/2:0)+' '+(byId.inet?byId.inet.y:0)+' L'+(byId.sw?byId.sw.x-bw/2:0)+' '+(byId.sw?byId.sw.y:0)+'"/></circle>';
  $("#diagram").innerHTML='<svg viewBox="0 0 '+W+" "+H+'" role="img" aria-label="Diagram topologi infrastruktur">'+links+nodesSvg+motion+"</svg>";
  $("#nodeChips").innerHTML=E.nodes.map(n=>'<button class="chip node-chip" data-id="'+n.id+'">'+esc(n.label)+"</button>").join("");

  function show(id){
    const n=byId[id]; if(!n)return;
    $("#envInfo").innerHTML='<p class="kind">'+esc(n.kind)+"</p><h3>"+esc(n.label)+"</h3><p>"+esc(n.detail)+"</p>"
      +'<ul class="env-specs">'+(n.specs||[]).map(s=>"<li><span>"+esc(s[0])+"</span><span>"+esc(s[1])+"</span></li>").join("")+"</ul>";
    $$(".node").forEach(g=>g.classList.toggle("sel",g.dataset.id===id));
    $$(".node-chip").forEach(c=>c.classList.toggle("sel",c.dataset.id===id));
    $$(".link").forEach(l=>l.classList.toggle("hot",l.dataset.a===id||l.dataset.b===id));
  }
  const pick=e=>{const t=e.target.closest("[data-id]"); if(t)show(t.dataset.id);};
  ["mouseover","focusin","click"].forEach(ev=>$("#diagram").addEventListener(ev,pick));
  $("#nodeChips").addEventListener("click",pick);
  show(E.nodes[3]?E.nodes[3].id:E.nodes[0].id);

  $("#stacks").innerHTML=E.stacks.map(s=>
    '<div class="card stack rv"><h4>'+esc(s.title)+"</h4><ul>"+s.items.map(i=>"<li>"+esc(i)+"</li>").join("")+"</ul></div>").join("");
  $$("#stacks .rv").forEach(watch);
})();

/* ── journey ── */
$("#journey").innerHTML=SITE.journey.map(j=>
 '<div class="jr'+(j.now?" now":"")+'"><b>'+esc(j.year)+"</b><h3>"+esc(j.title)+"</h3><p>"+esc(j.text)+"</p></div>").join("");

/* ── contact ── */
const rows=[
  {label:"Email",value:S.email,href:mailTo,icon:I.mail},
  {label:"LinkedIn",value:String(S.linkedin).replace(/^https?:\/\/(www\.)?/,""),href:S.linkedin,icon:I.linkedin},
  {label:"GitHub",value:String(S.github).replace(/^https?:\/\/(www\.)?/,""),href:S.github,icon:I.github},
  {label:"WhatsApp",value:S.whatsapp?"+"+String(S.whatsapp).replace(/\D/g,""):"",href:waLink,icon:I.whatsapp},
  {label:"Location",value:P.location,href:"",icon:I.pin}
].filter(r=>r.value);
$("#contactList").innerHTML=rows.map(r=>{
  const inner='<span class="cl-ico">'+svg(r.icon,1.9)+'</span><span><small>'+r.label+"</small><b>"+esc(r.value)+"</b></span>";
  return r.href?'<a class="card cl" href="'+esc(r.href)+'"'+(/^https?:/.test(r.href)?' target="_blank" rel="noopener"':"")+">"+inner+"</a>"
               :'<div class="card cl">'+inner+"</div>";
}).join("");

const form=$("#contactForm"),endpoint=(SITE.form&&SITE.form.endpoint)||"";
$("#formNote").textContent=endpoint?"Pesan dikirim langsung ke inbox saya.":"Tombol ini membuka aplikasi email kamu dengan pesan yang sudah terisi.";
function mark(el,bad){el.closest(".field").classList.toggle("bad",bad);return !bad;}
form.addEventListener("submit",async e=>{
  e.preventDefault();
  const n=$("#f-name"),em=$("#f-email"),su=$("#f-subject"),ms=$("#f-message");
  const ok=[
    mark(n,n.value.trim().length<2),
    mark(em,!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em.value.trim())),
    mark(su,su.value.trim().length<3),
    mark(ms,ms.value.trim().length<10)
  ].every(Boolean);
  if(!ok){const f=form.querySelector(".field.bad input,.field.bad textarea"); if(f)f.focus(); return;}
  const btn=$("#sendBtn"); btn.disabled=true; btn.style.opacity=".65";
  const data={name:n.value.trim(),email:em.value.trim(),subject:su.value.trim(),message:ms.value.trim(),website:$("#f-website").value};
  try{
    if(endpoint){
      const res=await fetch(endpoint,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(data)});
      const payload=await res.json().catch(()=>({}));
      if(!res.ok) throw new Error(payload.error||"bad status");
      $("#sentMsg").textContent="Terima kasih, "+data.name+". Balasan akan dikirim ke "+data.email+" dalam satu hari kerja.";
    }else{
      const body=encodeURIComponent(data.message+"\n\n— "+data.name+" ("+data.email+")");
      window.location.href=mailTo+"?subject="+encodeURIComponent(data.subject)+"&body="+body;
      $("#sentMsg").textContent="Aplikasi email kamu terbuka dengan pesan yang sudah terisi. Tinggal tekan kirim.";
    }
    form.style.display="none";
    $("#sent").classList.add("show");
  }catch(err){
    const note=$("#formNote");
    note.textContent="Pengiriman gagal. Coba lagi, atau email langsung ke "+S.email+".";
    note.style.color="#ff8087";
  }finally{ btn.disabled=false; btn.style.opacity=""; }
});
$("#sendAgain").addEventListener("click",()=>{
  form.reset();
  $$(".field").forEach(f=>f.classList.remove("bad"));
  $("#sent").classList.remove("show");
  form.style.display="grid";
  $("#f-name").focus();
});
})();
