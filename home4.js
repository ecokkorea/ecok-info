
(function(){
var menu=document.getElementById('menu'),burger=document.querySelector('.burger');
if(menu)menu.addEventListener('click',function(e){if(e.target.tagName==='A'){menu.classList.remove('open');if(burger)burger.setAttribute('aria-expanded',false)}});
var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches,IO='IntersectionObserver' in window;
// 영상: 화면에 보일 때만 받아서 재생, 벗어나면 멈춤. 줄인 움직임이면 정지 그림만
if(!reduce&&IO)[].forEach.call(document.querySelectorAll('video.pv'),function(v){
 new IntersectionObserver(function(a){a.forEach(function(x){if(x.isIntersecting){v.preload='auto';var p=v.play();if(p&&p.catch)p.catch(function(){})}else v.pause()})},{threshold:.25}).observe(v)});
// 메뉴 현재 위치 (스크롤 이벤트 없이)
var ids=['site','design','super','bill','works','call'];
if(menu&&IO){var links={};ids.forEach(function(i){links[i]=menu.querySelector('a[href="#'+i+'"]')});
 var io=new IntersectionObserver(function(a){a.forEach(function(x){var l=links[x.target.id];if(!l||!x.isIntersecting)return;for(var k in links)if(links[k])links[k].removeAttribute('aria-current');l.setAttribute('aria-current','true')})},{rootMargin:'-45% 0px -50% 0px'});
 ids.forEach(function(i){var e=document.getElementById(i);if(e)io.observe(e)})}
})();
