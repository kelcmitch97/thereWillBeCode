$('#participating_tab').on('click', function(){

    TweenMax.to($('#events_created'), 0, { display: 'none' });
    TweenMax.to($('#events_participating'), 0, { display: 'flex' });

});

$('#mobile_participating').on('click', function(){

    TweenMax.to($('#events_created'), 0, { display: 'none' });
    TweenMax.to($('#events_participating'), 0, { display: 'flex' });

});

$('#created_tab').on('click', function(){

    TweenMax.to($('#events_created'), 0, { display: 'flex' });
    TweenMax.to($('#events_participating'), 0, { display: 'none' });

});

$('#mobile_created').on('click', function(){

    TweenMax.to($('#events_created'), 0, { display: 'flex' });
    TweenMax.to($('#events_participating'), 0, { display: 'none' });

});



// USERS FETCH

const usersAPI = "/api/users";
const userText = $('.profile_info h3').text();

var userData;

const getUsers = async () => {

    await fetch(usersAPI)
    .then(res => res.json())

    .then(function(data){

        userData = data;

        // Check for user
        
            for (let i = 0; i < userData.length; i++) {
                
                if (userText === userData[i].username){

                    var sportArray = userData[i].sports.split(',');

                    for (let i = 0; i < sportArray.length; i++) {
                        
                        $('.profile_sports').append(`
                            <p>${sportArray[i]}</p>
                        `)
                        
                    }

                }
                
            }

    });

}

getUsers();