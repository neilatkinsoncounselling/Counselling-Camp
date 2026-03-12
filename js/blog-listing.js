function buildBlogListing(){
 const grid=document.getElementById('blog-grid');
 if(!grid)return;
 if(!POSTS||!POSTS.length){
 grid.innerHTML='<li class="blog-empty">No posts yet — check back soon.</li>';
 return;
}
 grid.innerHTML=POSTS.map(post=>{
 const author=getAuthor(post.author);
 const authorPos=(author&&author.photoPosition)||'center 20%';
 const authorAvatar=author&&author.photo
 ? `<img class="blog-card__author-photo" src="../${author.photo}" alt="${author.name}" width="36" height="36" loading="lazy" style="object-position:${authorPos}">`
:`<div class="blog-card__author-emoji" aria-hidden="true">${author ? author.emoji:'✍️'}</div>`;
 const tags=post.tags&&post.tags.length
 ? `<ul class="blog-card__tags" role="list">${post.tags.map(t=>`<li class="blog-card__tag">${t}</li>`).join('')}</ul>`
:'';
 const image=post.image
 ? `<div class="blog-card__image-wrap">
<img class="blog-card__image" src="../${post.image}" alt="" loading="lazy">
</div>`
:`<div class="blog-card__image-wrap blog-card__image-wrap--placeholder" aria-hidden="true"></div>`;
 return `
<li class="blog-card reveal">
<a href="${post.slug}.html" class="blog-card__link" aria-label="Read:${post.title}">
 ${image}
<div class="blog-card__body">
 ${tags}
<h2 class="blog-card__title">${post.title}</h2>
<p class="blog-card__excerpt">${post.excerpt}</p>
<div class="blog-card__footer">
<div class="blog-card__author">
 ${authorAvatar}
<div>
<span class="blog-card__author-name">${post.author}</span>
<time class="blog-card__date" datetime="${post.date}">${formatDate(post.date)}</time>
</div>
</div>
<span class="blog-card__read-more" aria-hidden="true">
 Read
<svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 7h10M8 4l4 3-4 3"/></svg>
</span>
</div>
</div>
</a>
</li>
 `;
}).join('');
}
if(document.readyState==='loading'){
 document.addEventListener('DOMContentLoaded',buildBlogListing);
}else{
 buildBlogListing();
}