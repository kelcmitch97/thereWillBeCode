// Events Created vs Events Participating

let eventsCreatedBtn = document.querySelector(".events-created-btn");
let eventsParticipatingBtn = document.querySelector(".events-participating-btn");

let eventCreated = document.querySelector(".events-created-container");
let eventParticipating = document.querySelector(".events-participating-container");

eventsCreatedBtn.forEach((eventsCreated,index) => {
    eventsCreated.addEventListener("click", () => {
        eventCreated.forEach(event1 => {
            event1.classList.remove("active");
        });
        eventCreated[index].classList.add("active");
    });
});

eventsParticipatingBtn.forEach((eventsParticipating,index) => {
    eventsParticipating.addEventListener("click", () => {
        eventsParticipating.forEach(event2 => {
            event2.classList.remove("active");
        });
        eventParticipating[index].classList.add("active");
    });
});



// eventsCreatedBtn.addEventListener("click", eventCreated());
// eventsParticipatingBtn.addEventListener("click", eventParticipating());
