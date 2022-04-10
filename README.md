# thereWillBeCode

# PickUpSports

 ## Team Members & Roles
 `thereWillBeCode`:
 - Kelcie: wireframe, HTML front-end
 - Kiran: front-end design
 - Don: db sources & seeding, documentation, UX
 - Evan: Javascript and MySQL, CSS animations
 - Luca: Javascript models and routes
 
 ## Description
 At thereWillBeCode our mission for PickUpSports is to help people unlock their creativity and to improve their physical, mental, and social health and well-being by participating in group sports and recreational activities at the community level.

 The application helps individuals and groups Create Events and Participate in sports and recreational activities in their Local areas using our uniquely powerful design platform and tireless support network. Current sports offerings include: hockey, baseball, basketball, soccer, and tennis. Current locations are in the Greater Toronto Area (GTA), Toronto, Canada and are linked to Toronto Parks & Rec locations and facilities.

 ## Table-of-Contents 
* [Description](#description) 
* [User Story and How it works](#user-story-and-how-it-works) 
* [How It Works](#how-it-works) 
* [Installation Guide](#installation-guide) 
* [Screenshots](#screenshots) 
* [Technologies Used](#technologies-used) 
* [Link for Toronto Parks & Rec facilities](#link-for-toronto-parks-and-rec-facilities) 
* [GitHub repo:](#github-repo) 
* [Trello board](#trello-board)
* [License](#license)

 ## User Story and How It Works
 - AS A PERSON who enjoys playing community-based team sports
 - I AM INTERESTED in an application that provides me with information and 
    allows me to participate in specific events in my local area on a pick-up basis
 - AND TO CREATE EVENTS myself that could attract like-minded players

## How It Works
- The PickUpSports site presents the user with a homepage and invites them to login or register
- The nav bar provides anchors for Home, About, Events, Profile, and ContactUs.
- The About anchor provides information about the thereWillBeCode team and the PickUpSports application
- The ContactUs anchor provides information on how to contact the developers for feedback and support
- Users are invited to register/sign-up and to create a Profile page
- The Events page allows users to find Events in which they might wish to participate
- The Events page also allows users to Create Events, including information on
- the sport, date & time, location & venue, number of players sought, and other descriptive details

## Installation Guide

In terminal and the targeted directory run the following code to install the module dependencies:
```shell
npm i
```

Rename the .env.EXAMPLE file to .env

After installing the dependencies change the username/password/hostname/database located in the .env file to your mysql specifications. Run the following in powershell:
```shell
mysql -u root -p (login example leading to password for root)
mysql > source db/schema.sql
```

After adding information to our database run the following in the terminal to activate the server:

```shell
npm start
```

 ## Screenshots

### Homepage

![Homepage of PickUpSports](/public/assets/images/homepage.png)

### Profile

![Profile page of PickUpSports](/public/assets/images/profile.png)

### Events

![Events page of PickUpSports](/public/assets/images/events.png)

### Event Details

![Event Details page of PickUpSports](/public/assets/images/eventdetails.png)

### Event Details (Mobile View)

![Event Details (mobile view) of PickUpSports](/public/assets/images/mobileevents.png)



 ## Technologies Used
 - HTML
 - CSS including Bootstrap
 - Greensock animations
 - Javascript
 - Node.js
 - Express.js
 - Handlebars.js
 - GoogleMaps
 - EmailJS
 - MySQL
 - Sequelize
 - bcrypt
 - Express-session
 - Heroku for deployment
 - Toronto Parks & Rec website and (incomplete) API database

### Link for Toronto Parks and Rec facilities
https://www.toronto.ca/services-payments/venues-facilities-bookings/booking-park-recreation-facilities/parks-and-recreation-facilities/


## GitHub repo:
https://github.com/kelcmitch97/thereWillBeCode

## Deployment link:

https://therewillbecode.herokuapp.com/

## Trello board
https://trello.com/b/AiQ3DUUe/project-2
The team used GitHub branches and a Trello Board to help distribute work and monitor progress

## License

All photos and videos contained within this application is property of Envato Elements with a license certificate registered to Kelcie Mitchelmore.