// API calls

const usersAPI = "./api/users";
const eventsAPI = "./api/events";
const locationsAPI = "./api/locations";

var userData;
var eventData;
var locationData;

const getUsers = async () => {

    await fetch(usersAPI)
    .then(res => res.json())

    .then(function(data){

        userData = data;
        
        for (let i = 0; i < userData.length; i++) {
            
            // console.log(userData[i]);

            $('#location').append(`${userData[i].user_name}`);
            
        }

    });

}

const getEvents = async () => {

    await fetch(eventsAPI)
    .then(res => res.json())

    .then(function(data){

        eventData = data;

        for (let i = 0; i < eventData.length; i++) {
            
            // console.log(eventData[i]);

            $('#location').append(`\n${eventData[i].event_name}`);
            
        }

    });

}

const getLocations = async () => {

    await fetch(locationsAPI)
    .then(res => res.json())

    .then(function(data){

        locationData = data;

        for (let i = 0; i < eventData.length; i++) {
            
            // console.log(eventData[i]);

            $('#location').append(`\n${locationData[i].location_name}`);
            
        }

    });

}