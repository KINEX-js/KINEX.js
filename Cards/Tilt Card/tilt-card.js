const COMPONENT={
 'tilt-card':{name:'Tilt Card',hint:'Move your cursor over the card',desc:'Leans toward your cursor in 3D with a moving glare.',cat:'Cards',
  inner:'<!-- your content -->',
  css:`.kx-tilt{--kx-w:300px;--kx-radius:20px;--kx-bg:#1b1b24;--kx-fg:#fff;--kx-tilt:14;--kx-glare:rgba(255,255,255,.35);position:relative;display:inline-block;vertical-align:top;box-sizing:border-box;width:var(--kx-w);aspect-ratio:5/7;padding:1.6rem;border-radius:var(--kx-radius);background:var(--kx-bg);color:var(--kx-fg);font-family:inherit;box-shadow:0 14px 34px rgba(0,0,0,.25);transform-style:preserve-3d;transform:perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--s,1));transition:transform .5s cubic-bezier(.2,.9,.3,1),box-shadow .4s}
.kx-tilt.kx-on{transition:transform .08s linear,box-shadow .4s;box-shadow:0 30px 60px rgba(0,0,0,.4)}
.kx-tilt>*{transform:translateZ(30px)}
.kx-tilt::after{content:'';position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .4s;background:radial-gradient(circle at var(--gx,50%) var(--gy,50%),var(--kx-glare),transparent 55%)}
.kx-tilt.kx-on::after{opacity:1}
@media(prefers-reduced-motion:reduce){.kx-tilt{transition:none!important}}`,
  html:'<div class="kx-tilt"></div>',
  on:c=>{const s=(k,v)=>c.style.setProperty(k,v);
   c.onpointermove=e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height,m=parseFloat(getComputedStyle(c).getPropertyValue('--kx-tilt'))||14;
    c.classList.add('kx-on');s('--ry',(x-.5)*2*m+'deg');s('--rx',(.5-y)*2*m+'deg');s('--gx',x*100+'%');s('--gy',y*100+'%');s('--s',1.04)};
   c.onpointerleave=()=>{c.classList.remove('kx-on');['--rx','--ry','--s'].forEach(p=>c.style.removeProperty(p))}},
  groups:[
   {g:'Card',f:[{l:'Background',v:'--kx-bg',t:'color',d:'#1b1b24'},{l:'Text',v:'--kx-fg',t:'color',d:'#ffffff'}]},
   {g:'Motion',f:[{l:'Tilt angle',v:'--kx-tilt',t:'range',min:2,max:30,d:14,u:''}]},
   {g:'Size',f:[{l:'Width',v:'--kx-w',t:'range',min:200,max:400,d:300,u:'px'},{l:'Corners',v:'--kx-radius',t:'range',min:0,max:40,d:20,u:'px'}]}]}}