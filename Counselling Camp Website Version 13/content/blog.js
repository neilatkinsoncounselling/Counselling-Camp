const POSTS=[
{
  slug:   'what-is-eft',
  title:  'What is EFT & Why Should I Give it a Go?',
  excerpt:'Emotional Freedom Technique, more commonly known as tapping, was introduced by Gary Craig in 1995. Jill Peacock explains what it is and why you should try it.',
  author: 'Jill Peacock',
  date:   '2026-03-07',
  image:  'img/blog/EFT.webp',
  tags:   ['EFT', 'Tapping', 'Mind-body', 'Therapy'],
},
{
  slug:   'self-injury-awareness-day',
  title:  'Understanding Self-Injury: Breaking the Silence on Self-Injury Awareness Day',
  excerpt:'Every year on 1st March, Self-Injury Awareness Day encourages us to have open, honest conversations about self-harm — a subject still surrounded by stigma and misunderstanding. Neil Atkinson reflects on what self-injury really is, why people self-harm, and how we can respond with compassion.',
  author: 'Neil Atkinson',
  date:   '2026-03-01',
  image:  'img/blog/self-injury.webp',
  tags:   ['Self-harm', 'Self-injury', 'Awareness', 'Mental health', 'Support'],
},
];
function formatDate(isoDate){
 const d=new Date(isoDate);
 return d.toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});
}
function getAuthor(authorName){
 if(typeof TEAM!=='undefined'){
 return TEAM.find(p=>p.name===authorName)||null;
}
 return null;
}