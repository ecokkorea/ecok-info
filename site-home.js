
(function(){
var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
document.querySelectorAll('.rv').forEach(function(e){if(reduce){e.classList.add('in');return}new IntersectionObserver(function(a,o){a.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');o.disconnect()}})},{threshold:.12}).observe(e)});
document.querySelectorAll('[data-count]').forEach(function(e){if(reduce)return;var n=+e.dataset.count,p=e.dataset.pre||'';new IntersectionObserver(function(a,o){if(!a[0].isIntersecting)return;o.disconnect();var t0=performance.now();(function f(t){var k=Math.min(1,(t-t0)/1400);e.textContent=p+Math.round(n*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)})(t0)}).observe(e)});
var svg=document.getElementById('cadsvg');
if(svg){
 var ents=[].slice.call(svg.querySelectorAll('.ent')),xh=document.getElementById('xh'),cmd=document.getElementById('cmdline'),coord=document.getElementById('coord'),pn=document.getElementById('pname'),pr=document.getElementById('prole'),i=0;
 function at(x,y){xh.setAttribute('transform','translate('+x+' '+y+')');coord.textContent=(x*25).toFixed(2)+', '+((560-y)*25).toFixed(2)}
 function finish(){xh.style.opacity=.0;cmd.innerHTML='명령: <a href="tel:15552859">1555-2859 전화하기</a>'}
 function all(){ents.forEach(function(e){e.querySelector('.w').style.strokeDashoffset=0;e.classList.add('done')});finish()}
 function step(){if(i>=ents.length){finish();return}var e=ents[i++],p=e.querySelector('.w'),L=p.getTotalLength(),t0=null,dur=Math.max(380,Math.min(760,L*5));cmd.textContent='명령: '+e.dataset.cmd+'  '+e.dataset.name;
  function f(t){if(t0===null)t0=t;var k=Math.min(1,(t-t0)/dur);p.style.strokeDashoffset=1-k;var q=p.getPointAtLength(L*k);at(q.x,q.y);if(k<1)requestAnimationFrame(f);else{e.classList.add('done');setTimeout(step,70)}}
  requestAnimationFrame(f)}
 if(reduce)all();else setTimeout(step,450);
 function pick(e){ents.forEach(function(x){x.classList.remove('sel')});e.classList.add('sel');pn.textContent=e.dataset.name;pr.textContent=e.dataset.role}
 ents.forEach(function(e){e.addEventListener('click',function(){pick(e)});e.addEventListener('mouseenter',function(){if(e.classList.contains('done'))pick(e)});e.addEventListener('keydown',function(k){if(k.key==='Enter'||k.key===' '){k.preventDefault();pick(e)}})});
}

var sv=document.getElementById('sitesvg');
if(sv){var ly=[].slice.call(sv.querySelectorAll('.ly')),bs=[].slice.call(document.querySelectorAll('.site-steps button')),cu=0,tm=null;
 function show(n){cu=n;sv.setAttribute('class','st'+n);ly.forEach(function(l,j){l.classList.toggle('on',j<=n)});bs.forEach(function(b,j){b.classList.toggle('on',j===n)})}
 function run(){return;tm=setInterval(function(){show((cu+1)%5)},3400)}
 function stop(){clearInterval(tm);tm=null}
 bs.forEach(function(b,j){b.addEventListener('click',function(){stop();show(j)})});
 new IntersectionObserver(function(a){a[0].isIntersecting?run():stop()},{threshold:.3}).observe(sv);
 if(reduce)show(4)}
var s=document.getElementById('scrub');
if(s&&!reduce){var img=document.getElementById('scrubimg'),ps=s.querySelectorAll('.scrub-text p'),V=[[1.02,0,0],[1.75,-12,5],[1.02,0,0]],cur=-1,pre=new Image();pre.src='img/cad_sched.jpg';
 function u(){if(innerWidth<=860)return;var r=s.getBoundingClientRect(),k=Math.max(0,Math.min(.999,-r.top/(r.height-innerHeight))),n=Math.floor(k*3);if(n===cur)return;cur=n;var v=V[n],src=n===2?'img/cad_sched.jpg':'img/cad_mcc.jpg';if(img.getAttribute('src')!==src)img.setAttribute('src',src);img.style.transform='scale('+v[0]+') translate('+v[1]+'%,'+v[2]+'%)';ps.forEach(function(p,j){p.classList.toggle('on',j===n)})}
 addEventListener('scroll',u,{passive:true});u()}
})();
