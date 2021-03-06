// Nav bar

const navbarMenu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");

navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.toggle('is-active');
  menuLinks.classList.toggle("active");
})

if (window.location.pathname === '/') {


$('#hero_main_login').on('click', function(){

    TweenMax.to($('#hero_main_spacer'), 0.5, { opacity: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut });
    TweenMax.to($('#hero_main_spacer'), 0, { delay: 0.5, display: 'none' });
    TweenMax.to($('#hero_login_spacer'), 0, { delay: 0.5, display: 'flex' });
    TweenMax.to($('#hero_login_spacer'), 0.5, { delay: 0.5, opacity: 1, transformOrigin:"50% 50%", ease:Power1.easeInOut });

});

$('#hero_main_register').on('click', function(){

    TweenMax.to($('#hero_main_spacer'), 0.5, { opacity: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut });
    TweenMax.to($('#hero_main_spacer'), 0, { delay: 0.5, display: 'none' });
    TweenMax.to($('#hero_signup_spacer'), 0, { delay: 0.5, display: 'flex' });
    TweenMax.to($('#hero_signup_spacer'), 0.5, { delay: 0.5, opacity: 1, transformOrigin:"50% 50%", ease:Power1.easeInOut });

});

$(document).ready(function(){

    TweenMax.to($('#hero_main_spacer'), 0, { opacity: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut });

    const video = document.getElementById('hero_video');

    video.addEventListener("ended", function(){

        video.currentTime = 0;
        video.play();

    });

    video.addEventListener("play", function(){

        TweenMax.to($('#hero_main_spacer'), 1, { opacity: 1, transformOrigin:"50% 50%", ease:Power1.easeInOut });

    });

    video.addEventListener("timeupdate", function(){

        if (video.currentTime >= 23){

            TweenMax.to($('#hero_main_spacer'), 0.5, { opacity: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut });
    
        }

    });

});

async function loginForm(event) {
    event.preventDefault();
  
    const username = document.querySelector('#main_user').value.trim();
    const password = document.querySelector('#main_password').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }

  }

  document.querySelector('#hero_login_form').addEventListener('submit', loginForm);

  async function registerForm(event) {
    event.preventDefault();
  
    const username = document.querySelector('#register_user').value.trim();
    const password = document.querySelector('#register_password').value.trim();
    const email = document.querySelector('#register_email').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          password,
          email
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {

        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }

  }

  document.querySelector('#hero_register_form').addEventListener('submit', registerForm);

}