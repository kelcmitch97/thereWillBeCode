// --- FUNCTIONS USED FROM functions.js ---

// GET API CALLS: getUsers();, getEvents();, getLocations();

// Animations go here

var observer = new IntersectionObserver(function(entries) {
    
	if(entries[0].isIntersecting === true){

        // Checking observer call below if it's visible

		// console.log('Animations can be added here')

        // All DOM information

        console.log(entries[0])

        // can add animation by ID name visible on screen (other targets available IE className)

        // console.log(entries[0].target.className)

        if (entries[0].target.className === "circle  opendot"){

            // getUsers();
            // getEvents();
            // getLocations();

            // call       //target    //duration(seconds)      //animations to take place over duration //power //repeat

            // setting initial placement once viewable (x: -100 = 100 pixels to the left)
            TweenMax.to($('.opendot'), 0, { x: -100, opacity: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut, repeat: 0 });
            // returning to origin location set in CSS (x: 0 = original location)
            TweenMax.to($('.opendot'), 0.7, { x: 0, opacity: 1, transformOrigin:"50% 50%", ease:Power1.easeInOut, repeat: 0 });

            TweenMax.to($('.closedot'), 0, { x: 100, opacity: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut, repeat: 0 });
            TweenMax.to($('.closedot'), 0.7, { x: 0, opacity: 1, transformOrigin:"50% 50%", ease:Power1.easeInOut, repeat: 0 });

        }

        if (entries[0].target.className === "hero"){
            // console.log('hero visible')

            // Repeating animation on page load

            TweenMax.to($('.hero h2'), 0, { opacity: 0, x: -30, y: -30, transformOrigin:"50% 50%", ease:Power1.easeInOut, repeat: 0 });
            TweenMax.to($('.hero h2'), 1.0, { opacity: 1, x: 0, y: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut, repeat: 0 });

            TweenMax.to($('.hero p'), 0, { opacity: 0, y: 20, x: 20, transformOrigin:"50% 50%", ease:Power1.easeInOut, repeat: 0 });
            TweenMax.to($('.hero p'), 0.5, { delay: 0.5, opacity: 1, y: 0, x: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut, repeat: 0 });

            TweenMax.to($('.hero button'), 0, { opacity: 0, y: 50, transformOrigin:"50% 50%", ease:Power1.easeInOut, repeat: 0 });
            TweenMax.to($('.hero button'), 1.0, { delay: 0.5, opacity: 1, y: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut, repeat: 0 });
        }


    }

}, { threshold: [0] });

observer.observe(document.querySelector(".circle"));
observer.observe(document.querySelector(".hero"));

// Swiper

let swiper = new Swiper(".event_container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
  });

  // On load animations

TweenMax.to($('.hero h2'), 0, { opacity: 0, x: -30, y: -30, transformOrigin:"50% 50%", ease:Power1.easeInOut, repeat: 0 });
TweenMax.to($('.hero h2'), 1.0, { opacity: 1, x: 0, y: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut, repeat: 0 });

TweenMax.to($('.hero p'), 0, { opacity: 0, y: 20, x: 20, transformOrigin:"50% 50%", ease:Power1.easeInOut, repeat: 0 });
TweenMax.to($('.hero p'), 0.5, { delay: 0.5, opacity: 1, y: 0, x: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut, repeat: 0 });

TweenMax.to($('.hero button'), 0, { opacity: 0, y: 50, transformOrigin:"50% 50%", ease:Power1.easeInOut, repeat: 0 });
TweenMax.to($('.hero button'), 1.0, { delay: 0.5, opacity: 1, y: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut, repeat: 0 });

// jQuery Constants

const eventCard = $('.event')
const swiperNext = $('.swiper-button-next');
const swiperPrev = $('.swiper-button-prev');

// For loop displaying event cards

for (let i = 0; i < eventCard.length; i++) {

        TweenMax.to(eventCard[i], 0, { opacity: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut, repeat: 0 });
        TweenMax.to(eventCard[i], 1.0, { delay: i/3, opacity: 1, y: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut, repeat: 0 });
    
}

// Hover Functions

// Swiper Right

$(document).ready(function() {

    swiperNext.hover(over, out);

        var icon = swiperNext.find('i');

        function over(){

            TweenMax.to(icon, 0.5, { x: 30, transformOrigin:"50% 0%", ease:Power1.easeInOut, yoyo: true, repeat: -1 });

        }

        function out(){

            TweenMax.to(icon, 0.5, { x: 0, transformOrigin:"50% 0%", ease:Power1.easeInOut });

        }

});

// Swiper Left

$(document).ready(function() {

    swiperPrev.hover(over, out);

        var icon = swiperPrev.find('i');

        function over(){

            TweenMax.to(icon, 0.5, { x: -30, transformOrigin:"50% 0%", ease:Power1.easeInOut, yoyo: true, repeat: -1 });

        }

        function out(){

            TweenMax.to(icon, 0.5, { x: 0, transformOrigin:"50% 0%", ease:Power1.easeInOut });

        }

});