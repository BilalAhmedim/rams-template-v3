const
  toggle_button = document.querySelector('.toggle'),
  toggle_top = toggle_button.querySelector('.toggle__bar--top'),
  toggle_middle = toggle_button.querySelector('.toggle__bar--middle'),
  toggle_bottom = toggle_button.querySelector('.toggle__bar--bottom'),
  reverse = 'toggle__bar__animate--reverse',
  animate = 'toggle__bar__animate',
  elementUl = document.querySelector('nav'),
  header = document.querySelector('header')
  ;

  const toggle__open = e =>{
    toggle_button.classList.add('toggle__bar__animate');
    toggle_top.classList.add(animate+'-top');
    toggle_middle.classList.add(animate+'-middle');
    toggle_bottom.classList.add(animate+'-bottom');
    // add class for reverse animation
    toggle_top.classList.remove(reverse+'-top');
    toggle_middle.classList.remove(reverse+'-middle');
    toggle_bottom.classList.remove(reverse+'-bottom');
    // add class for expand navigation
    elementUl.classList.add('show');
  }
  const toggle__close = e=>{
    toggle_button.classList.remove('toggle__bar__animate');
    toggle_top.classList.remove(animate+'-top');
    toggle_middle.classList.remove(animate+'-middle');
    toggle_bottom.classList.remove(animate+'-bottom');
    // remove class for reverse animation
    toggle_top.classList.add(reverse+'-top');
    toggle_middle.classList.add(reverse+'-middle');
    toggle_bottom.classList.add(reverse+'-bottom');
    // remove class for collapse navigation
    elementUl.classList.remove('show');
  }

const toggle__Nav = e => {
  if (toggle_button.classList[1] == undefined ) {
    toggle__open();
  }else{
    toggle__close();
  }
}
toggle_button.addEventListener('click', toggle__Nav);

var stickyNav = e =>{
  header.classList.toggle('sticky', window.scrollY > 50);
}

window.addEventListener('scroll', stickyNav);


const track = document.querySelector('.carousel__track'),
      slides = Array.from(track.children),
      nextButton = document.querySelector('.carousel__button--right'),
      prevButton = document.querySelector('.carousel__button--left'),
      dotNav = document.querySelector('.carousel__nav'),
      dots = Array.from(dotNav.children),
      slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targerSlide) =>{
  track.style.transform = 'translateX(-'+targerSlide.style.left+')';
  currentSlide.classList.remove('current-slide');
  targerSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targerDot) =>{
  currentDot.classList.remove('current-slide');
  targerDot.classList.add('current-slide');
}

const right = e =>{
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;
  const firstDot = dotNav.firstElementChild;
  if(nextSlide === null){
    moveToSlide(track, currentSlide, slides[0]);
    updateDots(currentDot, firstDot);
  }else{
    moveToSlide(track,currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
  }
}


const left = e =>{
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotNav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;
  const lastDot = dotNav.lastElementChild;
  if(prevSlide === null){
    moveToSlide(track, currentSlide, slides[slides.length-1]);
    updateDots(currentDot, lastDot);
  }else{
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
  }
}

const dotSlide = e =>{
  const targetDot = e.target.closest('img');
  if(!targetDot) return
  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetslide = slides[targetIndex];
  moveToSlide(track, currentSlide, targetslide);
  updateDots(currentDot, targetDot);
}

prevButton.addEventListener('click', left);

nextButton.addEventListener('click', right);

dotNav.addEventListener('click', dotSlide);


// Products Slider Zoomer

const image = document.querySelector('.carousel__images'),
      imageContainer = document.querySelectorAll('.carousel__images');

const srcSet = e=>{
  const src = e.getAttribute("data-image-src");
  e.style.backgroundImage = `url(${src})`;
  console.log(src);
}
imageContainer.forEach(srcSet);

const productZoomer = e =>{
  let width = image.offsetWidth;
  let height = image.offsetHeight;
  let mousex = e.offsetX;
  let mousey = e.offsetY;
  
  let bgPosX = (mousex / width * 100);
  let bgPosY = (mousey / height * 100);
  image.style.backgroundPosition = `${bgPosX}%  ${bgPosY}%`;
}

image.addEventListener('mousemove', productZoomer);

image.addEventListener('mouseleave', e =>{
  image.style.backgroundPosition = 'center';
})
