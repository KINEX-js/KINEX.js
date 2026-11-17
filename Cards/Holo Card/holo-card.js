const COMPONENT={
 'holo-card':{name:'Holo Card',hint:'Hover to see the foil follow you',desc:'A rainbow foil shimmer that drifts and follows the pointer.',cat:'Cards',featured:true,
  inner:'<!-- your content -->',
  css:`.kx-holo{--kx-w:300px;--kx-radius:20px;--kx-bg:#12121a;--kx-fg:#fff;position:relative;display:inline-block;vertical-align:top;box-sizing:border-box;width:var(--kx-w);aspect-ratio:5/7;padding:1.6rem;border-radius:var(--kx-radius);background:var(--kx-bg);color:var(--kx-fg);font-family:inherit;overflow:hidden;isolation:isolate;box-shadow:0 14px 34px rgba(0,0,0,.3);transition:transform .4s cubic-bezier(.2,.9,.3,1),box-shadow .4s}
.kx-holo:hover{transform:translateY(-8px);box-shadow:0 28px 50px rgba(0,0,0,.45)}
.kx-holo::before,.kx-holo::after{content:'';position:absolute;inset:0;z-index:-1;pointer-events:none;mix-blend-mode:screen}
.kx-holo::before{background:linear-gradient(115deg,transparent 25%,#ff00aa77 38%,#00e5ff77 50%,#ffe60077 62%,transparent 75%) var(--hx,0%) 0/260% 100% no-repeat;animation:kx-shine 3.5s ease-in-out infinite alternate}
.kx-holo.kx-on::before{animation:none}
.kx-holo::after{opacity:0;transition:opacity .4s;background:radial-gradient(circle at var(--gx,50%) var(--gy,50%),rgba(255,255,255,.25),transparent 50%)}
.kx-holo.kx-on::after{opacity:1}
@keyframes kx-shine{from{background-position:0 0}to{background-position:100% 0}}
@media(prefers-reduced-motion:reduce){.kx-holo::before{animation:none}}`,
  html:'<div class="kx-holo"></div>',
  on:c=>{c.onpointermove=e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
    c.classList.add('kx-on');c.style.setProperty('--hx',(1-x)*60+20+'%');c.style.setProperty('--gx',x*100+'%');c.style.setProperty('--gy',y*100+'%')};
   c.onpointerleave=()=>c.classList.remove('kx-on')},
  groups:[
   {g:'Card',f:[{l:'Background',v:'--kx-bg',t:'color',d:'#12121a'},{l:'Text',v:'--kx-fg',t:'color',d:'#ffffff'}]},
   {g:'Size',f:[{l:'Width',v:'--kx-w',t:'range',min:200,max:400,d:300,u:'px'},{l:'Corners',v:'--kx-radius',t:'range',min:0,max:40,d:20,u:'px'}]}]}}