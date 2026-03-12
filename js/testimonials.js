const TESTIMONIALS=[
{
 quote:"Coming to Counselling Camp was one of the best decisions I've made. I finally feel like I have the tools to manage my anxiety rather than letting it control me.",
 initial:'A',
 name:'Anonymous',
 detail:'Individual Therapy Client',
 stars:5,
},
{
 quote:"My counsellor listened without judgement and helped me understand things about myself I had buried for years. I feel lighter and more hopeful than I have in a long time.",
 initial:'M',
 name:'Anonymous',
 detail:'Grief Counselling Client',
 stars:5,
},
{
 quote:"The online sessions fit perfectly into my schedule and were every bit as effective as I hoped. Warm,professional,and genuinely life-changing.",
 initial:'R',
 name:'Anonymous',
 detail:'Online Session Client',
 stars:5,
},
];
function buildStars(count){
 const n=Math.min(5,Math.max(1,count ?? 5));
 return '★'.repeat(n)+'☆'.repeat(5-n);
}
function buildTestimonialCards(){
 const grid=document.querySelector('.testimonials-grid');
 if(!grid)return;
 grid.innerHTML=TESTIMONIALS.map((t)=>`
<li class="testimonial-card reveal">
<div class="testimonial-card__stars" aria-label="${t.stars ?? 5} out of 5 stars">
 ${buildStars(t.stars)}
</div>
<blockquote class="testimonial-card__quote">
 "${t.quote}"
</blockquote>
<footer class="testimonial-card__author">
<div class="testimonial-card__avatar" aria-hidden="true">${t.initial}</div>
<div>
<p class="testimonial-card__name">${t.name}</p>
<p class="testimonial-card__detail">${t.detail}</p>
</div>
</footer>
</li>
 `).join('');
}
if(document.readyState==='loading'){
 document.addEventListener('DOMContentLoaded',buildTestimonialCards);
}else{
 buildTestimonialCards();
}