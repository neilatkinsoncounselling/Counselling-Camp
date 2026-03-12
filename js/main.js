(function(){
 
 function initScrollReveal(){
 const revealEls=document.querySelectorAll('.reveal');
 if(!revealEls.length)return;
 const observer=new IntersectionObserver((entries)=>{
 entries.forEach((entry)=>{
 if(!entry.isIntersecting)return;
 const siblings=[...entry.target.parentElement.querySelectorAll('.reveal')];
 const idx=siblings.indexOf(entry.target);
 entry.target.style.transitionDelay=idx*0.1+'s';
 entry.target.classList.add('is-visible');
 observer.unobserve(entry.target);
});
},{threshold:0.12});
 revealEls.forEach((el)=>observer.observe(el));
}
 
 function initMobileNav(){
 const toggle=document.querySelector('.nav__toggle');
 const links=document.querySelector('.nav__links');
 if(!toggle||!links)return;
 links.id='nav-links';
 toggle.setAttribute('aria-expanded','false');
 toggle.setAttribute('aria-controls','nav-links');
 toggle.addEventListener('click',function(){
 const isOpen=links.classList.toggle('nav__links--open');
 toggle.setAttribute('aria-expanded',isOpen ? 'true':'false');
});
 links.querySelectorAll('a').forEach(function(link){
 link.addEventListener('click',function(){
 links.classList.remove('nav__links--open');
 toggle.setAttribute('aria-expanded','false');
});
});
 document.addEventListener('click',function(e){
 if(!toggle.contains(e.target)&&!links.contains(e.target)){
 links.classList.remove('nav__links--open');
 toggle.setAttribute('aria-expanded','false');
}
});
}
 
 function getNavHeight(){
 const nav=document.querySelector('.nav');
 return nav ? nav.offsetHeight : 100;
}

 function scrollToTarget(target){
 window.scrollTo({
 top:target.getBoundingClientRect().top+window.scrollY-getNavHeight(),
 behavior:'smooth'
});
}

 function initSmoothScroll(){
 document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
 anchor.addEventListener('click',function(e){
 const target=document.querySelector(anchor.getAttribute('href'));
 if(!target)return;
 e.preventDefault();
 scrollToTarget(target);
});
});
 /* Cross-page anchor: e.g. about.html → index.html#booking */
 if(window.location.hash){
 const target=document.querySelector(window.location.hash);
 if(target){
 /* Wait for page to fully render and any native scroll to settle */
 setTimeout(function(){
 const navH=getNavHeight();
 let top=0;
 let el=target;
 while(el){top+=el.offsetTop;el=el.offsetParent;}
 window.scrollTo({top:Math.max(0,top-navH),behavior:'instant'});
 },300);
}
}
}
 
 function init(){
 initScrollReveal();
 initMobileNav();
 initSmoothScroll();
}
 if(document.readyState==='loading'){
 document.addEventListener('DOMContentLoaded',init);
}else{
 init();
}
})();