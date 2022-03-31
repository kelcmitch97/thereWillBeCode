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

            getUsers();
            getEvents();
            getLocations();

            // call       //target    //duration(seconds)      //animations to take place over duration //power //repeat

            // setting initial placement once viewable (x: -100 = 100 pixels to the left)
            TweenMax.to($('.opendot'), 0, { x: -100, opacity: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut, repeat: 0 });
            // returning to origin location set in CSS (x: 0 = original location)
            TweenMax.to($('.opendot'), 0.7, { x: 0, opacity: 1, transformOrigin:"50% 50%", ease:Power1.easeInOut, repeat: 0 });

            TweenMax.to($('.closedot'), 0, { x: 100, opacity: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut, repeat: 0 });
            TweenMax.to($('.closedot'), 0.7, { x: 0, opacity: 1, transformOrigin:"50% 50%", ease:Power1.easeInOut, repeat: 0 });

        }

    }

}, { threshold: [0] });

observer.observe(document.querySelector(".circle"));

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