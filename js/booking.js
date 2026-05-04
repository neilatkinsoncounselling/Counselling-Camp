function buildCounsellorPicker(){
  var grid = document.getElementById('counsellor-picker-grid');
  if(!grid) return;

  // Render tiles — duplicate team before and after for infinite loop feel
  function makeTile(person, index, isFirst, isClone){
    var pos = person.photoPosition || 'center 20%';
    var avatar = person.photo
      ? '<img class="picker-card__photo" src="' + person.photo + '" alt="' + person.name + '" width="96" height="96" loading="lazy" style="object-position:' + pos + '">'
      : '<div class="picker-card__avatar" aria-hidden="true">' + person.emoji + '</div>';
    var firstName = person.name.split(' ')[0];
    return '<li' + (isClone ? ' class="picker-clone" aria-hidden="true"' : '') + '>'
      + '<button type="button"'
      + ' class="picker-card' + (isFirst ? ' picker-card--selected' : '') + '"'
      + ' data-name="' + person.name + '"'
      + ' data-slug="' + person.slug + '"'
      + ' data-email="' + (person.email || '') + '"'
      + ' aria-pressed="' + (isFirst ? 'true' : 'false') + '"'
      + (isClone ? ' tabindex="-1"' : '') + '>'
      + avatar
      + '<span class="picker-card__name">' + firstName + '</span>'
      + '</button></li>';
  }

  var realTiles   = TEAM.map(function(person, i){ return makeTile(person, i, i === 0, false); }).join('');
  var cloneStart  = TEAM.map(function(person){ return makeTile(person, -1, false, true); }).join('');
  var cloneEnd    = TEAM.map(function(person){ return makeTile(person, -1, false, true); }).join('');
  grid.innerHTML = cloneStart + realTiles + cloneEnd;

  // Set default form values
  var first = TEAM[0];
  if(first){
    document.getElementById('booking-form-to').value = first.email || '';
    document.getElementById('booking-form-counsellor').value = first.name;
    updateSubmitButton(first.name.split(' ')[0]);
    updateFormAction(first.slug);
  }

  // Jump to real start and set up infinite loop — mobile only
  var isMobile = window.innerWidth <= 860;
  var cardWidth = grid.querySelector('li') ? grid.querySelector('li').offsetWidth + 16 : 146;
  var cloneCount = TEAM.length;

  if(isMobile){
    grid.scrollLeft = cardWidth * cloneCount;

    var jumping = false;
    grid.addEventListener('scroll', function(){
      if(jumping) return;
      if(grid.scrollLeft <= cardWidth * (cloneCount - 1)){
        jumping = true;
        grid.scrollLeft += cardWidth * cloneCount;
        setTimeout(function(){ jumping = false; }, 50);
      } else if(grid.scrollLeft >= cardWidth * (cloneCount + cloneCount)){
        jumping = true;
        grid.scrollLeft -= cardWidth * cloneCount;
        setTimeout(function(){ jumping = false; }, 50);
      }
    });
  }

  // Arrow buttons — mobile only (hidden on desktop via CSS)
  var prevBtn = document.getElementById('picker-prev');
  var nextBtn = document.getElementById('picker-next');
  if(prevBtn){
    prevBtn.addEventListener('click', function(){
      grid.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
  }
  if(nextBtn){
    nextBtn.addEventListener('click', function(){
      grid.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });
  }

  // Click handler — only on real tiles
  grid.addEventListener('click', function(e){
    var btn = e.target.closest('.picker-card');
    if(!btn) return;
    // Update all real selected states
    grid.querySelectorAll('.picker-card').forEach(function(b){
      b.classList.remove('picker-card--selected');
      b.setAttribute('aria-pressed', 'false');
    });
    // Select all tiles matching this person (real + clones)
    var name = btn.dataset.name;
    grid.querySelectorAll('.picker-card').forEach(function(b){
      if(b.dataset.name === name){
        b.classList.add('picker-card--selected');
        b.setAttribute('aria-pressed', 'true');
      }
    });
    document.getElementById('booking-form-to').value = btn.dataset.email || '';
    document.getElementById('booking-form-counsellor').value = btn.dataset.name;
    updateSubmitButton(btn.dataset.name.split(' ')[0]);
    updateFormAction(btn.dataset.slug);
  });
}

function updateFormAction(slug){
  var form = document.querySelector('.booking-form');
  if(form && slug){
    form.setAttribute('action', 'thankyou.html?counsellor=' + slug);
  }
}

function updateSubmitButton(firstName){
  var submit = document.getElementById('booking-submit');
  if(submit){
    submit.textContent = 'Send message to ' + firstName;
  }
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', buildCounsellorPicker);
} else {
  buildCounsellorPicker();
}
