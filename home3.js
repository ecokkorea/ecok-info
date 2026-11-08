
(function(){
var top=document.querySelector('.top'),menu=document.getElementById('menu'),burger=document.querySelector('.burger');
function hh(){if(top)document.documentElement.style.setProperty('--h',top.offsetHeight+'px')}
hh();addEventListener('resize',hh);
if(menu)menu.addEventListener('click',function(e){if(e.target.tagName==='A'){menu.classList.remove('open');if(burger)burger.setAttribute('aria-expanded',false)}});
var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
var s=document.getElementById('site'),sv=document.getElementById('sitesvg'),ly=[].slice.call(sv.querySelectorAll('.ly')),rd=document.getElementById('srender'),st=s.querySelector('.s-stage'),cur=-1;
function show(n){var m=Math.min(n,4);sv.setAttribute('class','st'+m);ly.forEach(function(l,j){l.classList.toggle('on',j<=m)});rd.classList.toggle('on',n>=5)}
if(reduce){show(4);rd.classList.add('on')}else{
 function u(){var r=s.getBoundingClientRect(),k=Math.max(0,Math.min(.999,-r.top/(r.height-st.offsetHeight))),n=Math.floor(k*6);if(n!==cur){cur=n;show(n)}}
 addEventListener('scroll',u,{passive:true});u()}
var bill=document.querySelector('.s-bill');
if(bill&&!reduce){var cs=[].slice.call(bill.querySelectorAll('[data-n]'));new IntersectionObserver(function(a,o){if(!a[0].isIntersecting)return;o.disconnect();var t0=performance.now();(function f(t){var k=Math.min(1,(t-t0)/1100),e=1-Math.pow(1-k,3);cs.forEach(function(c){c.textContent=Math.round(+c.dataset.n*e).toLocaleString('ko-KR')});if(k<1)requestAnimationFrame(f)})(t0)},{threshold:.4}).observe(bill)}
})();
