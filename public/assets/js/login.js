// placeholder for public/js/login.js
// to develop on branch develop feature/login 

// Login/Signup modal

jQuery(document).ready(function($){
    var $form_modal = $('.cd_user_modal'),
    $form_signin = $form_modal.find('#cd_signin'),
    $form_signup = $form_modal.find('#cd_signup'),
    $form_modal_tab = $('#.cd_switcher')
    $tab_signin = $form_modal_tab.children('li').eq(0).children('a'),
    $tab_signup = $form_modal_tab.children('li').eq(1).children('a')
});


const button = document.querySelector("#login_button");

// Open Modal
button.on('click', function(event){

    if( $(event.target).is($hero_section) ) {
        $(this).children('ul').toggleClass('is-visible');
    } else {
        $hero_section.children('ul').removeClass('is-visible');
        $form_modal.addClass('is-visible');
        ( $(event.target).is('.cd_signup')) ? signup_selected() : signin_selected();
    }
});

  //close modal
$(document).keyup(function(event) {
    if (event.which='27') {
        $form_modal.removeClass('is-visible');
    }
});

$form_modal_tab.on('click', function(event) {
    event.preventDefault();
    ( $(event.target).is($tab_signin)) ? signin_selected() : signup_selected();
});

  //hide or show password
  $('.hide_password').on('click', function(){
    var $this= $(this),
      $password_field = $this.prev('input');
    
    ( 'password' == $password_field.attr('type') ) ? $password_field.attr('type', 'text') : $password_field.attr('type', 'password');
    ( 'Hide' == $this.text() ) ? $this.text('Show') : $this.text('Hide');
    //focus and move cursor to the end of input field
    $password_field.putCursorAtEnd();
  });


  function signin_selected(){
    $form_signin.addClass('is-selected');
    $form_signup.removeClass('is-selected');
    $tab_signin.addClass('selected');
    $tab_signup.removeClass('selected');
  };

  function signup_selected(){
    $form_signin.removeClass('is-selected');
    $form_signup.addClass('is-selected');
    $tab_signin.removeClass('selected');
    $tab_signup.addClass('selected');
  };


