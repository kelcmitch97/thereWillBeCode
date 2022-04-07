let tab = document.querySelectorAll(".tab h3");
let tabContent = document.querySelectorAll(".tab_content div");

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


