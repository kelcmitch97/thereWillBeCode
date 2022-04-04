// NavBar

function openNav() {
    document.getElementById("sideNavBar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  };
  
  function closeNav() {
    document.getElementById("sideNavBar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  };

// API calls

const usersAPI = "./api/users";
const eventsAPI = "./api/events";
const locationsAPI = "./api/locations";
const venuesAPI = "./api/venues";
const sportsAPI = "./api/sports";

var userData;
var eventData;
var locationData;
var venueData;
var sportData;

const getUsers = async () => {

    await fetch(usersAPI)
    .then(res => res.json())

    .then(function(data){

        userData = data;
        
        for (let i = 0; i < userData.length; i++) {
            
            // console.log(userData[i]);
            
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
            
        }

    });

}

const getLocations = async () => {

    await fetch(locationsAPI)
    .then(res => res.json())

    .then(function(data){

        locationData = data;

        for (let i = 0; i < locationData.length; i++) {
            
            // console.log(locationData[i]);
            
        }

    });

}

const getVenues = async () => {

    await fetch(venuesAPI)
    .then(res => res.json())

    .then(function(data){

        venueData = data;

        for (let i = 0; i < venueData.length; i++) {
            
            // console.log(venueData[i]);
            
        }

    });

}

const getSports = async () => {

    await fetch(sportsAPI)
    .then(res => res.json())

    .then(function(data){

        sportData = data;

        for (let i = 0; i < sportData.length; i++) {
            
            // console.log(sportData[i]);
            
        }

    });

}