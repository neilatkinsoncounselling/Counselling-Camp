function buildCounsellorPicker(){
 const grid=document.getElementById('counsellor-picker-grid');
 if(!grid)return;
 
 grid.innerHTML=TEAM.map((person,index)=>{
 const pos=person.photoPosition||'center 20%';
 const avatar=person.photo
 ? `<img class="picker-card__photo" src="${person.photo}" alt="${person.name}" width="80" height="80" loading="lazy" style="object-position:${pos}">`
:`<div class="picker-card__avatar" aria-hidden="true">${person.emoji}</div>`;
 const firstName=person.name.split(' ')[0];
 const isFirst=index===0;
 return `
<li>
<button type="button"
 class="picker-card${isFirst ? ' picker-card--selected':''}"
 data-name="${person.name}"
 data-slug="${person.slug}"
 data-email="${person.email||'hello@counsellingcamp.co.uk'}"
 aria-pressed="${isFirst ? 'true':'false'}">
 ${avatar}
<span class="picker-card__name">${firstName}</span>
</button>
</li>
 `;
}).join('');
 
 const first=TEAM[0];
 if(first){
 document.getElementById('booking-form-to').value=first.email||'hello@counsellingcamp.co.uk';
 document.getElementById('booking-form-counsellor').value=first.name;
 updateSubmitButton(first.name.split(' ')[0]);
 updateFormAction(first.slug);
}
 
 grid.addEventListener('click',(e)=>{
 const btn=e.target.closest('.picker-card');
 if(!btn)return;
 
 grid.querySelectorAll('.picker-card').forEach(b=>{
 b.classList.remove('picker-card--selected');
 b.setAttribute('aria-pressed','false');
});
 
 btn.classList.add('picker-card--selected');
 btn.setAttribute('aria-pressed','true');
 
 document.getElementById('booking-form-to').value=btn.dataset.email||'hello@counsellingcamp.co.uk';
 document.getElementById('booking-form-counsellor').value=btn.dataset.name;
 updateSubmitButton(btn.dataset.name.split(' ')[0]);
 updateFormAction(btn.dataset.slug);
});
}
function updateFormAction(slug){
 const form=document.querySelector('.booking-form');
 if(form&&slug){
 form.setAttribute('action','thankyou.html?counsellor='+slug);
}
}
function updateSubmitButton(firstName){
 const submit=document.getElementById('booking-submit');
 if(submit){
 submit.textContent='Request consultation with '+firstName;
}
}
if(document.readyState==='loading'){
 document.addEventListener('DOMContentLoaded',buildCounsellorPicker);
}else{
 buildCounsellorPicker();
}