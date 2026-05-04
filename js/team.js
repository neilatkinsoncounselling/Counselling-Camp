const TEAM=[
{
 name:'Stacey Wright',
 slug:'stacey-wright',
 role:'Integrative Counsellor · NCPS Member',
 bio:'Specialising in trauma and abuse,Stacey creates a warm,non-judgemental space where clients feel safe to explore their experiences.',
 bioFull:'Stacey is an integrative counsellor and NCPS accredited member with a particular focus on trauma and abuse. She draws on a range of therapeutic approaches — including person-centred,CBT,and trauma-informed practice — to tailor each session to the individual. Stacey believes that healing begins when a person feels truly heard and understood,and she is committed to creating that space for every client she works with. She works with adults of all backgrounds and welcomes referrals from other professionals.',
 emoji:'🌿',
 photo:'img/team/Stacey-Wright.webp',
 photoPosition:'center 20%',
 specialisms:['Trauma','Abuse'],
 website:'https://redwoodembers.co.uk/',
 booking:'https://redwoodembers.co.uk/#contact',
 email:'stacey@redwoodembers.co.uk',
},
{
 name:'Neil Atkinson',
 slug:'neil-atkinson',
 role:'Integrative Counsellor · NCPS Member',
 bio:"Working with trauma,relationships,and men's mental health,Neil takes an integrative approach tailored to each individual.",
 bioFull:"Neil is an integrative counsellor and NCPS accredited member with a particular interest in trauma,relationship difficulties,and men's mental health. He works collaboratively with clients to understand the patterns and experiences that have shaped them,using an approach that draws on person-centred therapy,CBT,and attachment theory. Neil is especially passionate about making counselling accessible to men who may find it difficult to seek help,offering a down-to-earth,non-judgemental space. He offers both in-person sessions in Northeast England and online sessions across the UK.",
 emoji:'☀️',
 photo:'img/team/Neil-Atkinson.webp',
 photoPosition:'center 20%',
 specialisms:['Trauma','Relationships',"Men's mental health"],
 website:'https://neilatkinsoncounselling.co.uk',
 booking:'https://neilatkinsoncounselling.co.uk/contact',
 email:'neil@neilatkinsoncounselling.co.uk',
},
{
 name:'Katie Elcoate',
 slug:'katie-elcoate',
 role:'Integrative Counsellor · NCPS Member',
 bio:'Specialising in depression,grief,and family dynamics,Katie brings a gentle but purposeful approach to help clients move forward.',
 bioFull:'Katie is an integrative counsellor and NCPS accredited member who works with clients experiencing depression,grief,and complex family dynamics. She takes a compassionate,client-led approach,helping people to make sense of their experiences and find a path forward at their own pace. Katie draws on person-centred and psychodynamic principles,always adapting her approach to what works best for the individual. She offers a warm,non-judgemental space for adults at any stage of life.',
 emoji:'🌸',
 photo:'img/team/Katie-Elcoate.webp',
 photoPosition:'center 20%',
 specialisms:['Depression','Grief','Family dynamics'],
 website:null,
 booking:null,
 email:null,
},
{
 name:'Claire Jefferson',
 slug:'claire-jefferson',
 role:'Integrative Counsellor · NCPS Member',
 bio:'Specialising in depression,grief,and family dynamics,Claire offers a safe and supportive space for adults navigating difficult times.',
 bioFull:"Claire is an integrative counsellor and NCPS accredited member. She works with clients experiencing depression,grief,and family difficulties,offering a safe,confidential space to explore what's bringing them to counselling. Claire draws on a range of therapeutic approaches,always working collaboratively with clients to find what suits them best. She is warm,empathetic,and committed to supporting her clients through whatever challenges they face.",
 emoji:'🌸',
 photo:'img/team/Claire.webp',
 photoPosition:'center 20%',
 specialisms:['Depression','Grief','Family dynamics'],
 website:null,
 booking:null,
 email:null,
},
{
 name:'Jill Peacock',
 slug:'jill-peacock',
 role:'Integrative Counsellor · NCPS Member',
 bio:'Specialising in depression,grief,and family dynamics,Jill provides thoughtful,person-centred support for adults seeking change.',
 bioFull:"Jill is an integrative counsellor and NCPS accredited member with experience supporting adults through depression,grief,and family-related difficulties. She works in a person-centred way,placing the client's own experience and wisdom at the heart of the therapeutic process. Jill believes in the importance of a strong therapeutic relationship and works hard to establish trust and safety from the very first session. She offers both in-person and online sessions.",
 emoji:'🌸',
 photo:'img/team/Jill.webp',
 photoPosition:'center 20%',
 specialisms:['Depression','Grief','Family dynamics'],
 website:null,
 booking:null,
 email:null,
},
{
 name:'Phil Bancroft',
 slug:'phil-bancroft',
 role:'Integrative Counsellor · NCPS Member',
 bio:'Specialising in depression,grief,and family dynamics,Phil offers a grounded and empathetic approach to counselling.',
 bioFull:'Phil is an integrative counsellor and NCPS accredited member. He works with clients facing depression,grief,and family challenges,offering a grounded,empathetic space for reflection and growth. Phil draws on person-centred and CBT approaches,tailoring his practice to suit each individual. He is committed to making counselling feel approachable and accessible,and welcomes clients who may be coming to therapy for the first time.',
 emoji:'🌸',
 photo:'img/team/Phil.webp',
 photoPosition:'center 20%',
 specialisms:['Depression','Grief','Family dynamics'],
 website:null,
 booking:null,
 email:null,
},
];
function buildTeamCards(){
 const grid=document.querySelector('.team-grid');
 if(!grid)return;
 grid.innerHTML=TEAM.map((person)=>{
 const avatar=person.photo
 ? `<div class="team-card__photo-wrap"><a href="team/${person.slug}.html" tabindex="-1" aria-hidden="true"><img class="team-card__photo" src="${person.photo}" alt="Photo of ${person.name}" width="340" height="200" loading="lazy" style="object-position:${person.photoPosition||'center 20%'}"></a></div>`
 :`<div class="team-card__avatar" aria-hidden="true">${person.emoji}</div>`;
 return `
<li class="team-card reveal">
 ${avatar}
<div class="team-card__body">
<h3 class="team-card__name"><a href="team/${person.slug}.html" class="team-card__name-link">${person.name}</a></h3>
<a href="team/${person.slug}.html" class="team-card__profile-link">
 View full profile
<svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" focusable="false"><path d="M2 7h10M8 4l4 3-4 3"/></svg>
</a>
</div>
</li>
 `;
}).join('');
}
function updateCounsellorCount(){
 const el=document.getElementById('counsellor-count');
 if(el)el.textContent=TEAM.length;
}
if(document.readyState==='loading'){
 document.addEventListener('DOMContentLoaded',()=>{
 buildTeamCards();
 updateCounsellorCount();
});
}else{
 buildTeamCards();
 updateCounsellorCount();
}
