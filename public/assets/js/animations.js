// Animations go here

var observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){

        // Checking observer call below if it's visible

		console.log('Animations can be added here')

        // Checking within entries to find the ID

        console.log(entries[0].target.id)

        // can add animation by ID name visible on screen (other targets available IE className)

        console.log(entries[0].target.className)

        if (entries[0].target.id === "location"){

            console.log('should work?')

            // call       //target     //duration      //animations to take place over duration         //power

            TweenMax.to($('#location'), 0.7, { backgroundColor: 'red', x: 100, transformOrigin:"50% 50%", ease:Power1.easeInOut });

        }

    }

}, { threshold: [1] });

observer.observe(document.getElementById("location"));