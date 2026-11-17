const COMPONENT={
 'flip-card':{name:'Flip Card',hint:'Hover to zoom, click to flip',desc:'Zooms on hover, flips on click to reveal a second side.',cat:'Cards',featured:true,
  inner:'<div data-front><!-- your front content --></div>\n  <div data-back><!-- your back content --></div>',
  css:`.kx-card{--kx-w:200px;--kx-radius:20px;--kx-front-bg:linear-gradient(160deg,#ff8a5b,#e83e8c);--kx-front-fg:#fff;--kx-back-bg:#fffaf5;--kx-back-fg:#1c1c24;display:inline-block;width:var(--kx-w);aspect-ratio:5/7;perspective:1200px;cursor:pointer;outline:none;transition:transform .35s cubic-bezier(.2,.9,.3,1)}
.kx-card:hover{transform:scale(1.06)}
.kx-card:focus-visible{outline:3px solid #fff8;outline-offset:6px;border-radius:var(--kx-radius)}
.kx-inner{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform .8s cubic-bezier(.4,.2,.2,1)}
.kx-flipped .kx-inner{transform:rotateY(180deg)}
.kx-face{position:absolute;inset:0;border-radius:var(--kx-radius);overflow:hidden;backface-visibility:hidden;-webkit-backface-visibility:hidden;box-shadow:0 14px 34px rgba(0,0,0,.18);transition:box-shadow .35s}
.kx-card:hover .kx-face{box-shadow:0 26px 54px rgba(0,0,0,.28)}
.kx-front{background:var(--kx-front-bg);color:var(--kx-front-fg)}
.kx-front::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 85% 12%,rgba(255,255,255,.28),transparent 45%)}
.kx-back{background:var(--kx-back-bg);color:var(--kx-back-fg);transform:rotateY(180deg)}`,
  html:'<div class="kx-card" tabindex="0"><div class="kx-inner"><div class="kx-face kx-front"></div><div class="kx-face kx-back"></div></div></div>',
  on:c=>{c.onclick=()=>c.classList.toggle('kx-flipped');c.onkeydown=e=>e.key==='Enter'&&c.click()},
  groups:[
   {g:'Front',side:0,f:[{l:'Background',v:'--kx-front-bg',t:'color',d:'#e83e8c'},{l:'Text',v:'--kx-front-fg',t:'color',d:'#ffffff'}]},
   {g:'Back',side:1,f:[{l:'Background',v:'--kx-back-bg',t:'color',d:'#fffaf5'},{l:'Text',v:'--kx-back-fg',t:'color',d:'#1c1c24'}]},
   {g:'Size',f:[{l:'Width',v:'--kx-w',t:'range',min:160,max:400,d:200,u:'px'},{l:'Corners',v:'--kx-radius',t:'range',min:0,max:40,d:20,u:'px'}]}]}}