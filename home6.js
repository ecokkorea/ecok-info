(function(){
// 첫 화면 단추가 보이는 동안은 메뉴 단추·폰 아래 띠를 숨김 → 첫 화면에 단추는 하나
var go=document.getElementById('go6');
if(go&&'IntersectionObserver' in window)new IntersectionObserver(function(a){document.body.classList.toggle('past',!a[0].isIntersecting&&a[0].boundingClientRect.top<0)}).observe(go);
else document.body.classList.add('past');
// 폰 메뉴: 단추로 열고, 메뉴 글을 누르면 닫힘 (안쪽 쪽 build.page 의 메뉴 스크립트와 같은 짜임)
var b=document.querySelector('.burger'),m=document.getElementById('menu');
if(b&&m){b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
 m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded',false)}})}
})();
