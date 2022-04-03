let tab = document.querySelectorAll(".left_tab");
let tabContent = document.querySelectorAll(".event_content_spacer");

tab.forEach((tab,index) => {
    tab.addEventListener("click", () => {
        tabContent.forEach(content => {
            content.classList.remove("active");
        });
        tabContent[index].classList.add("active");
    });
});

// // Not working? 
// tab.forEach((tab,index) => {
//     tab.addEventListener("click", () => {
//         tab.forEach(tab => {
//             tab.classList.remove("active");
//         });
//         tab[index].classList.add("active");
//     });
// });


