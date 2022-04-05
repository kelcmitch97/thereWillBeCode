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

            video.removeEventListener('timeupdate');
    
        }

    });

});