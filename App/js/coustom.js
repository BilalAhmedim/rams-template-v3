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