const POSTS=[
{
  slug:   'what-happens-in-a-first-counselling-session',
  title:  'What happens in a first counselling session?',
  excerpt:'Most people who book a first counselling session have spent longer than they would like to admit thinking about it. Here is what actually happens, and why it is not what most people expect.',
  author: 'Neil Atkinson',
  date:   '2026-03-28',
  image:  'img/blog/what-happens-first-session.webp',
  category: 'blog',
  tags:   ['counselling', 'first-session', 'what-to-expect', 'anxiety', 'getting-started'],
  relatedServices: ['anxiety-stress','depression','grief-loss','trauma','mens-mental-health','neurodivergent-support'],
  primaryService: 'anxiety-stress',
},
{
  slug:   'what-is-depression',
  title:  'What is depression?',
  excerpt:'A plain English guide to what depression is, how it differs from ordinary sadness and what it can look like.',
  author: 'Neil Atkinson',
  date:   '2026-03-23',
  image:  'img/blog/what-is-depression.jpg',
  category: 'guide',
  tags:   ['depression', 'mental-health', 'low-mood'],
  relatedServices: ['depression'],
  primaryService: 'depression',
  guideType: 'definition',
  relatedPosts: ['why-depression-makes-everything-feel-pointless', 'small-steps-out-of-depression', 'how-counselling-helps-with-depression']
},
{
  slug:   'what-is-anxiety',
  title:  'What is anxiety?',
  excerpt:'A plain English guide to what anxiety is, how it feels in the mind and body, and what helps.',
  author: 'Neil Atkinson',
  date:   '2026-03-17',
  image:  'img/blog/what-is-anxiety.jpg',
  category: 'guide',
  tags:   ['anxiety','stress','mental-health'],
  relatedServices: ['anxiety-stress'],
  primaryService: 'anxiety-stress',
  guideType: 'definition',
  relatedPosts: ['why-anxiety-does-not-switch-off', 'how-to-stop-overthinking-practical-steps', 'how-counselling-helps-with-anxiety']
},
{
  slug:   'three-years-training-as-a-counsellor',
  title:  "Three years training as a counsellor: what I didn't expect",
  excerpt:"I started training to help others. I didn't expect how much it would teach me about myself. Three years on, here's what the journey has been like.",
  author: 'Neil Atkinson',
  date:   '2026-02-23',
  image:  'img/blog/Training-3.webp',
  category: 'blog',
  tags:   ['training','personal-growth','face-to-face'],
  relatedServices: ['face-to-face','online-counselling','telephone','walk-and-talk'],
  primaryService: 'face-to-face',
},
{
  slug:   'what-is-eft',
  title:  'What is EFT and why should I give it a go?',
  excerpt:'Emotional Freedom Technique, more commonly known as tapping, was introduced by Gary Craig in 1995. Jill Peacock explains what it is and why you should try it.',
  author: 'Jill Peacock',
  date:   '2026-03-07',
  image:  'img/blog/EFT.webp',
  category: 'blog',
  tags:   ['eft','tapping','mind-body','anxiety-stress'],
  relatedServices: ['anxiety-stress'],
  primaryService: 'anxiety-stress',
},
{
  slug:   'self-injury-awareness-day',
  title:  'Understanding self-injury: breaking the silence',
  excerpt:'Every year on 1st March, Self-Injury Awareness Day encourages us to have open, honest conversations about self-harm. Neil Atkinson reflects on what self-injury really is, why people self-harm, and how we can respond with compassion.',
  author: 'Neil Atkinson',
  date:   '2026-03-01',
  image:  'img/blog/self-injury.webp',
  category: 'blog',
  archived: true,
  tags:   ['self-harm','awareness','mental-health'],
  relatedServices: [],
},
{
  slug: 'why-anxiety-does-not-switch-off',
  title: 'Why anxiety does not switch off',
  excerpt: 'Anxiety can feel constant and exhausting. This guide explains why it keeps going and what sits underneath it.',
  author: 'Neil Atkinson',
  date: '2026-04-02',
  image: 'img/blog/anxiety-mechanism.webp',
  category: 'guide',
  tags: ['anxiety', 'stress', 'overthinking'],
  relatedServices: ['anxiety-stress'],
  primaryService: 'anxiety-stress',
  guideType: 'mechanism',
  relatedPosts: ['what-is-anxiety', 'how-to-stop-overthinking-practical-steps', 'how-counselling-helps-with-anxiety']
},
{
  slug: 'how-to-stop-overthinking-practical-steps',
  title: 'How to stop overthinking: practical steps',
  excerpt: 'Overthinking can feel endless. These practical steps can help you step out of the loop and feel more grounded.',
  author: 'Neil Atkinson',
  date: '2026-04-02',
  image: 'img/blog/anxiety-practical.webp',
  category: 'guide',
  tags: ['anxiety', 'stress', 'overthinking', 'practical'],
  relatedServices: ['anxiety-stress'],
  primaryService: 'anxiety-stress',
  guideType: 'practical',
  relatedPosts: ['what-is-anxiety', 'why-anxiety-does-not-switch-off', 'how-counselling-helps-with-anxiety']
},
{
  slug: 'how-counselling-helps-with-anxiety',
  title: 'How counselling helps with anxiety',
  excerpt: 'Counselling offers a calm space to understand anxiety and learn new ways to respond to it.',
  author: 'Neil Atkinson',
  date: '2026-04-02',
  image: 'img/blog/anxiety-conversion.webp',
  category: 'guide',
  tags: ['anxiety', 'stress', 'overthinking', 'counselling'],
  relatedServices: ['anxiety-stress'],
  primaryService: 'anxiety-stress',
  guideType: 'conversion',
  relatedPosts: ['what-is-anxiety', 'why-anxiety-does-not-switch-off', 'how-to-stop-overthinking-practical-steps']
},
{
  slug: 'why-depression-makes-everything-feel-pointless',
  title: 'Why depression makes everything feel pointless',
  excerpt: 'Depression can drain meaning and motivation. This guide explains why everything can start to feel flat or pointless.',
  author: 'Neil Atkinson',
  date: '2026-04-02',
  image: 'img/blog/depression-mechanism.webp',
  category: 'guide',
  tags: ['depression', 'low-mood', 'mental-health'],
  relatedServices: ['depression'],
  primaryService: 'depression',
  guideType: 'mechanism',
  relatedPosts: ['what-is-depression', 'small-steps-out-of-depression', 'how-counselling-helps-with-depression']
},
{
  slug: 'small-steps-out-of-depression',
  title: 'Small steps out of depression',
  excerpt: 'When everything feels heavy, small steps matter. This guide focuses on realistic ways to begin moving forward.',
  author: 'Neil Atkinson',
  date: '2026-04-02',
  image: 'img/blog/depression-practical.webp',
  category: 'guide',
  tags: ['depression', 'low-mood', 'mental-health', 'practical'],
  relatedServices: ['depression'],
  primaryService: 'depression',
  guideType: 'practical',
  relatedPosts: ['what-is-depression', 'why-depression-makes-everything-feel-pointless', 'how-counselling-helps-with-depression']
},
{
  slug: 'how-counselling-helps-with-depression',
  title: 'How counselling helps with depression',
  excerpt: 'Counselling can support you through depression by offering space, understanding, and steady progress at your pace.',
  author: 'Neil Atkinson',
  date: '2026-04-02',
  image: 'img/blog/depression-conversion.webp',
  category: 'guide',
  tags: ['depression', 'low-mood', 'mental-health', 'counselling'],
  relatedServices: ['depression'],
  primaryService: 'depression',
  guideType: 'conversion',
  relatedPosts: ['what-is-depression', 'why-depression-makes-everything-feel-pointless', 'small-steps-out-of-depression']
},
{
  slug: 'what-is-grief',
  title: 'What is grief?',
  excerpt: 'A plain English guide to what grief is, how it can feel, and why it does not look the same for everyone.',
  author: 'Neil Atkinson',
  date: '2026-04-02',
  image: 'img/blog/what-is-grief.jpg',
  category: 'guide',
  tags: ['grief', 'loss', 'bereavement'],
  relatedServices: ['grief-loss'],
  primaryService: 'grief-loss',
  guideType: 'definition',
  relatedPosts: ['why-grief-does-not-follow-a-straight-line', 'how-to-cope-with-bereavement', 'how-counselling-helps-with-grief-and-loss']
},
{
  slug: 'why-grief-does-not-follow-a-straight-line',
  title: 'Why grief does not follow a straight line',
  excerpt: 'Grief rarely moves neatly. This guide explains why it comes in waves and why that is normal.',
  author: 'Neil Atkinson',
  date: '2026-04-02',
  image: 'img/blog/grief-mechanism.webp',
  category: 'guide',
  tags: ['grief', 'loss', 'bereavement'],
  relatedServices: ['grief-loss'],
  primaryService: 'grief-loss',
  guideType: 'mechanism',
  relatedPosts: ['what-is-grief', 'how-to-cope-with-bereavement', 'how-counselling-helps-with-grief-and-loss']
},
{
  slug: 'how-to-cope-with-bereavement',
  title: 'How to cope with bereavement',
  excerpt: 'Simple, realistic ways to cope with bereavement and be gentler with yourself while you grieve.',
  author: 'Neil Atkinson',
  date: '2026-04-02',
  image: 'img/blog/grief-practical.webp',
  category: 'guide',
  tags: ['grief', 'loss', 'bereavement', 'practical'],
  relatedServices: ['grief-loss'],
  primaryService: 'grief-loss',
  guideType: 'practical',
  relatedPosts: ['what-is-grief', 'why-grief-does-not-follow-a-straight-line', 'how-counselling-helps-with-grief-and-loss']
},
{
  slug: 'how-counselling-helps-with-grief-and-loss',
  title: 'How counselling helps with grief and loss',
  excerpt: 'Counselling can offer space, support, and understanding when grief feels too much to carry on your own.',
  author: 'Neil Atkinson',
  date: '2026-04-02',
  image: 'img/blog/grief-conversion.webp',
  category: 'guide',
  tags: ['grief', 'loss', 'bereavement', 'counselling'],
  relatedServices: ['grief-loss'],
  primaryService: 'grief-loss',
  guideType: 'conversion',
  relatedPosts: ['what-is-grief', 'why-grief-does-not-follow-a-straight-line', 'how-to-cope-with-bereavement']
},
{
  slug: 'what-is-trauma',
  title: 'What is trauma?',
  excerpt: 'A plain English guide to what trauma is, how it affects the mind and body, and why the impact can last long after the event.',
  author: 'Neil Atkinson',
  date: '2026-04-02',
  image: 'img/blog/what-is-trauma.jpg',
  category: 'guide',
  tags: ['trauma', 'stress', 'mental-health'],
  relatedServices: ['trauma'],
  primaryService: 'trauma',
  guideType: 'definition',
  relatedPosts: ['why-trauma-stays-in-the-body', 'how-to-begin-healing-from-trauma', 'how-counselling-helps-with-trauma']
},
{
  slug: 'why-trauma-stays-in-the-body',
  title: 'Why trauma stays in the body',
  excerpt: 'Trauma is not just a memory. This guide explains why it is often felt physically as well as emotionally.',
  author: 'Neil Atkinson',
  date: '2026-04-02',
  image: 'img/blog/trauma-mechanism.webp',
  category: 'guide',
  tags: ['trauma', 'stress', 'mental-health'],
  relatedServices: ['trauma'],
  primaryService: 'trauma',
  guideType: 'mechanism',
  relatedPosts: ['what-is-trauma', 'how-to-begin-healing-from-trauma', 'how-counselling-helps-with-trauma']
},
{
  slug: 'how-to-begin-healing-from-trauma',
  title: 'How to begin healing from trauma',
  excerpt: 'Healing from trauma takes time. This guide offers gentle starting points to help you feel safer and more grounded.',
  author: 'Neil Atkinson',
  date: '2026-04-02',
  image: 'img/blog/trauma-practical.webp',
  category: 'guide',
  tags: ['trauma', 'stress', 'mental-health', 'practical'],
  relatedServices: ['trauma'],
  primaryService: 'trauma',
  guideType: 'practical',
  relatedPosts: ['what-is-trauma', 'why-trauma-stays-in-the-body', 'how-counselling-helps-with-trauma']
},
{
  slug: 'how-counselling-helps-with-trauma',
  title: 'How counselling helps with trauma',
  excerpt: 'Counselling can support trauma recovery by providing a safe space and helping you process experiences at your own pace.',
  author: 'Neil Atkinson',
  date: '2026-04-02',
  image: 'img/blog/trauma-conversion.webp',
  category: 'guide',
  tags: ['trauma', 'stress', 'mental-health', 'counselling'],
  relatedServices: ['trauma'],
  primaryService: 'trauma',
  guideType: 'conversion',
  relatedPosts: ['what-is-trauma', 'why-trauma-stays-in-the-body', 'how-to-begin-healing-from-trauma']
},
{
  slug: 'what-is-mens-mental-health',
  title: "What is men's mental health?",
  excerpt: "A plain English guide to men's mental health, why distress can look different in men, and why that matters.",
  author: 'Neil Atkinson',
  date: '2026-04-02',
  image: 'img/blog/what-is-mens-mental-health.jpg',
  category: 'guide',
  tags: ['mens-mental-health', 'mental-health', 'emotions'],
  relatedServices: ['mens-mental-health'],
  primaryService: 'mens-mental-health',
  guideType: 'definition',
  relatedPosts: ['why-men-find-it-hard-to-ask-for-help', 'how-to-start-talking-about-how-you-feel', 'how-counselling-helps-mens-mental-health']
},
{
  slug: 'why-men-find-it-hard-to-ask-for-help',
  title: 'Why men find it hard to ask for help',
  excerpt: 'Many men struggle to ask for support. This guide explores what sits underneath that difficulty.',
  author: 'Neil Atkinson',
  date: '2026-04-02',
  image: 'img/blog/mens-mechanism.webp',
  category: 'guide',
  tags: ['mens-mental-health', 'mental-health', 'emotions'],
  relatedServices: ['mens-mental-health'],
  primaryService: 'mens-mental-health',
  guideType: 'mechanism',
  relatedPosts: ['what-is-mens-mental-health', 'how-to-start-talking-about-how-you-feel', 'how-counselling-helps-mens-mental-health']
},
{
  slug: 'how-to-start-talking-about-how-you-feel',
  title: 'How to start talking about how you feel',
  excerpt: 'Talking about feelings does not have to start with a big speech. This guide offers realistic first steps.',
  author: 'Neil Atkinson',
  date: '2026-04-02',
  image: 'img/blog/mens-practical.webp',
  category: 'guide',
  tags: ['mens-mental-health', 'mental-health', 'emotions', 'practical'],
  relatedServices: ['mens-mental-health'],
  primaryService: 'mens-mental-health',
  guideType: 'practical',
  relatedPosts: ['what-is-mens-mental-health', 'why-men-find-it-hard-to-ask-for-help', 'how-counselling-helps-mens-mental-health']
},
{
  slug: 'how-counselling-helps-mens-mental-health',
  title: "How counselling helps men's mental health",
  excerpt: 'Counselling can give men a practical, respectful space to talk, think, and feel more understood.',
  author: 'Neil Atkinson',
  date: '2026-04-02',
  image: 'img/blog/mens-conversion.webp',
  category: 'guide',
  tags: ['mens-mental-health', 'mental-health', 'emotions', 'counselling'],
  relatedServices: ['mens-mental-health'],
  primaryService: 'mens-mental-health',
  guideType: 'conversion',
  relatedPosts: ['what-is-mens-mental-health', 'why-men-find-it-hard-to-ask-for-help', 'how-to-start-talking-about-how-you-feel']
},
{
  slug: 'what-is-neurodivergent-support-in-counselling',
  title: 'What is neurodivergent support in counselling?',
  excerpt: '',
  author: 'Neil Atkinson',
  date: '2026-04-02',
  image: 'img/blog/neuro-definition.webp',
  category: 'guide',
  tags: ['neurodivergent', 'autism', 'adhd'],
  relatedServices: ['neurodivergent-support'],
  primaryService: 'neurodivergent-support',
  guideType: 'definition',
  relatedPosts: ['why-neurodivergent-people-often-struggle-with-traditional-therapy', 'how-to-find-the-right-support-if-you-are-neurodivergent', 'how-counselling-helps-neurodivergent-people']
},
{
  slug: 'why-neurodivergent-people-can-struggle-with-traditional-therapy',
  title: 'Why neurodivergent people can struggle with traditional therapy',
  excerpt: '',
  author: 'Neil Atkinson',
  date: '2026-04-02',
  image: 'img/blog/neuro-mechanism.webp',
  category: 'guide',
  tags: ['neurodivergent', 'autism', 'adhd'],
  relatedServices: ['neurodivergent-support'],
  primaryService: 'neurodivergent-support',
  guideType: 'mechanism',
  relatedPosts: ['what-is-neurodivergent-support-in-counselling', 'how-to-find-the-right-support-if-you-are-neurodivergent', 'how-counselling-helps-neurodivergent-people']
},
{
  slug: 'how-to-find-the-right-support-if-you-are-neurodivergent',
  title: 'How to find the right support if you are neurodivergent',
  excerpt: '',
  author: 'Neil Atkinson',
  date: '2026-04-02',
  image: 'img/blog/neuro-practical.webp',
  category: 'guide',
  tags: ['neurodivergent', 'autism', 'adhd', 'practical'],
  relatedServices: ['neurodivergent-support'],
  primaryService: 'neurodivergent-support',
  guideType: 'practical',
  relatedPosts: ['what-is-neurodivergent-support-in-counselling', 'why-neurodivergent-people-often-struggle-with-traditional-therapy', 'how-counselling-helps-neurodivergent-people']
},
{
  slug: 'how-counselling-helps-neurodivergent-people',
  title: 'How counselling helps neurodivergent people',
  excerpt: '',
  author: 'Neil Atkinson',
  date: '2026-04-02',
  image: 'img/blog/neuro-conversion.webp',
  category: 'guide',
  tags: ['neurodivergent', 'autism', 'adhd', 'counselling'],
  relatedServices: ['neurodivergent-support'],
  primaryService: 'neurodivergent-support',
  guideType: 'conversion',
  relatedPosts: ['what-is-neurodivergent-support-in-counselling', 'why-neurodivergent-people-often-struggle-with-traditional-therapy', 'how-to-find-the-right-support-if-you-are-neurodivergent']
}
];

const SERVICES_META = {
  'face-to-face':           { title: 'Face-to-Face Counselling', url: 'how-we-work/face-to-face.html' },
  'online-counselling':     { title: 'Online Counselling',       url: 'how-we-work/online-counselling.html' },
  'telephone':              { title: 'Telephone Counselling',    url: 'how-we-work/telephone.html' },
  'walk-and-talk':          { title: 'Walk and Talk Therapy',    url: 'how-we-work/walk-and-talk.html' },
  'anxiety-stress':         { title: 'Anxiety and Stress',       url: 'what-we-work-with/anxiety-stress.html' },
  'depression':             { title: 'Depression',               url: 'what-we-work-with/depression.html' },
  'grief-loss':             { title: 'Grief and Loss',           url: 'what-we-work-with/grief-loss.html' },
  'trauma':                 { title: 'Trauma',                   url: 'what-we-work-with/trauma.html' },
  'mens-mental-health':     { title: "Men's Mental Health",      url: 'what-we-work-with/mens-mental-health.html' },
  'neurodivergent-support': { title: 'Neurodivergent Support',   url: 'what-we-work-with/neurodivergent-support.html' },
};

function formatDate(isoDate){
  var d = new Date(isoDate);
  return d.toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});
}
function getAuthor(authorName){
  if(typeof TEAM !== 'undefined'){
    return TEAM.find(function(p){ return p.name === authorName; }) || null;
  }
  return null;
}

// ── CONTENT CLUSTERS ─────────────────────────────────────────────────────────
// Add suggested guide and blog titles here as you think of them.
// guideType options: definition | mechanism | practical | conversion
// The Generator SEO Dashboard reads this to show what to write next.

const CLUSTERS = {
  'anxiety-stress': {
    label: 'Anxiety and Stress',
    suggestedGuides: {
      definition:  'What is anxiety?',
      mechanism:   'Why anxiety does not switch off',
      practical:   'How to stop overthinking: practical steps',
      conversion:  'How counselling helps with anxiety'
    },
    suggestedBlogs: [
      'My anxiety story: what helped me finally talk about it',
      'The difference between worry and anxiety',
      'When anxiety follows you to work',
      'Why anxiety can feel worse at night',
      'What a panic attack actually feels like'
    ]
  },
  'depression': {
    label: 'Depression',
    suggestedGuides: {
      definition:  'What is depression?',
      mechanism:   'Why depression makes everything feel pointless',
      practical:   'Small steps out of depression',
      conversion:  'How counselling helps with depression'
    },
    suggestedBlogs: [
      'What I wish people understood about depression',
      'Depression is not just feeling sad',
      'How to support someone with depression',
      'Why getting out of bed feels impossible with depression',
      'When low mood becomes something more serious'
    ]
  },
  'grief-loss': {
    label: 'Grief and Loss',
    suggestedGuides: {
      definition:  'What is grief?',
      mechanism:   'Why grief does not follow a straight line',
      practical:   'How to cope with bereavement',
      conversion:  'How counselling helps with grief and loss'
    },
    suggestedBlogs: [
      'Grief that does not look like grief',
      'When others expect you to be over it',
      'The grief nobody talks about: losing a relationship',
      'How to support a grieving friend',
      'Finding meaning after loss'
    ]
  },
  'trauma': {
    label: 'Trauma',
    suggestedGuides: {
      definition:  'What is trauma?',
      mechanism:   'Why trauma stays in the body',
      practical:   'How to begin healing from trauma',
      conversion:  'How counselling helps with trauma'
    },
    suggestedBlogs: [
      'What is the difference between trauma and PTSD?',
      'Why trauma responses are not weakness',
      'Small t trauma: the experiences we dismiss',
      'How trauma affects relationships',
      'When you cannot remember but your body does'
    ]
  },
  'mens-mental-health': {
    label: "Men's Mental Health",
    suggestedGuides: {
      definition:  "What is men's mental health?",
      mechanism:   'Why men find it hard to ask for help',
      practical:   'How to start talking about how you feel',
      conversion:  "How counselling helps men's mental health"
    },
    suggestedBlogs: [
      'What counselling is actually like as a man',
      'Why I waited ten years before asking for help',
      'The cost of keeping it together',
      'Strength is not silence',
      'What happens when men do not talk about it'
    ]
  },
  'neurodivergent-support': {
    label: 'Neurodivergent Support',
    suggestedGuides: {
      definition:  'What is neurodivergent support in counselling?',
      mechanism:   'Why neurodivergent people often struggle with traditional therapy',
      practical:   'How to find the right support if you are neurodivergent',
      conversion:  'How counselling helps neurodivergent people'
    },
    suggestedBlogs: [
      'Getting a late diagnosis: what it means and what comes next',
      'Why I masked for so long I forgot who I was',
      'Counselling as a neurodivergent person: what to look for',
      'ADHD and anxiety: when everything feels urgent',
      'The exhaustion of being different in a world built for others'
    ]
  }
};

function getPostsByService(serviceSlug){
  return POSTS.filter(function(p){ return p.relatedServices && p.relatedServices.indexOf(serviceSlug) !== -1; });
}
function getPostsByTag(tag){
  return POSTS.filter(function(p){ return p.tags && p.tags.indexOf(tag) !== -1; });
}
