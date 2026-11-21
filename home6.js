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
;(function(){if((document.documentElement.lang||"").indexOf("ko")!==0||document.getElementById("ek-kakao"))return;var s=document.createElement("style");s.textContent="#ek-kakao{position:fixed;left:22px;bottom:110px;z-index:9998;display:flex;align-items:center;gap:8px;background:#FEE500;color:#191919!important;font:800 17px/1 Pretendard,\"Noto Sans KR\",sans-serif;padding:14px 18px 14px 14px;border-radius:30px;box-shadow:0 6px 18px rgba(0,0,0,.18);text-decoration:none}#ek-kakao svg{width:26px;height:26px;flex:0 0 26px}#ek-kakao:hover{filter:brightness(.96)}@media(max-width:767px){#ek-kakao{left:auto;right:10px;bottom:78px;font-size:15px;padding:12px 15px 12px 12px}}";document.head.appendChild(s);var a=document.createElement("a");a.id="ek-kakao";a.href="https://pf.kakao.com/_xdCxjvX/chat";a.target="_blank";a.rel="noopener";a.setAttribute("aria-label","카카오톡으로 상담하기");a.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#191919" d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.84 5.31 4.62 6.73l-.98 3.6c-.09.33.28.6.57.41l4.3-2.85c.49.05.98.08 1.49.08 5.52 0 10-3.58 10-8S17.52 3 12 3z"/></svg>카톡 상담';document.body.appendChild(a)})();