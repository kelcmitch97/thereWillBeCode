let tab = document.querySelectorAll(".left_tab");
let tabContent = document.querySelectorAll(".sport_tab");

tab.forEach((tab,index) => {
    tab.addEventListener("click", () => {
        tabContent.forEach(content => {
            content.classList.remove("active");
        });
        tabContent[index].classList.add("active");
    });
});

$(document).ready(function() {

    $('.event_content_spacer').hover(over, out);

        function over(){

            TweenMax.to($(this), 0.5, { backgroundColor: '#eee', cursor: 'pointer', transformOrigin:"50% 50%", ease:Power1.easeInOut });

        }

        function out(){

            TweenMax.to($(this), 0.5, { backgroundColor: '#fff', transformOrigin:"50% 50%", ease:Power1.easeInOut });

        }

});