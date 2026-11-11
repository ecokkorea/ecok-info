
(function(){
var menu=document.getElementById('menu'),burger=document.querySelector('.burger');
if(menu)menu.addEventListener('click',function(e){if(e.target.tagName==='A'){menu.classList.remove('open');if(burger)burger.setAttribute('aria-expanded',false)}});
var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches,IO='IntersectionObserver' in window;
// 영상: 화면에 보일 때만 받아서 재생, 벗어나면 멈춤. 줄인 움직임·데이터 절약·폰(860px 이하)이면 정지 그림만
// (11-11 측정: 느린 폰 조건에서 영상 해독이 끊긴 프레임 4→21개로 늘림. 스크롤이 먼저)
var nc=navigator.connection,save=nc&&(nc.saveData||/2g/.test(nc.effectiveType||'')),small=innerWidth<=860;
if(!reduce&&!save&&!small&&IO)[].forEach.call(document.querySelectorAll('video.pv'),function(v){
 new IntersectionObserver(function(a){a.forEach(function(x){if(x.isIntersecting){if(!v.getAttribute('src')){v.src=v.dataset.src;v.preload='auto'}var p=v.play();if(p&&p.catch)p.catch(function(){})}else v.pause()})},{threshold:.25}).observe(v)});
// 나타남(11-11 T1111-AG): 그림·카드에는 쓰지 않고 표에만. 화면에 들어오기 200px 전부터 0.25초
var rv=document.querySelectorAll('.rv');
if(reduce||!IO)[].forEach.call(rv,function(e){e.classList.add('in')});
else{var ro=new IntersectionObserver(function(a){a.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');ro.unobserve(x.target)}})},{rootMargin:'0px 0px 200px 0px'});[].forEach.call(rv,function(e){ro.observe(e)})}
// 메뉴 현재 위치 (스크롤 이벤트 없이)
var ids=['site','design','super','bill','works','call'];
if(menu&&IO){var links={};ids.forEach(function(i){links[i]=menu.querySelector('a[href="#'+i+'"]')});
 var io=new IntersectionObserver(function(a){a.forEach(function(x){var l=links[x.target.id];if(!l||!x.isIntersecting)return;for(var k in links)if(links[k])links[k].removeAttribute('aria-current');l.setAttribute('aria-current','true')})},{rootMargin:'-45% 0px -50% 0px'});
 ids.forEach(function(i){var e=document.getElementById(i);if(e)io.observe(e)})}
})();
