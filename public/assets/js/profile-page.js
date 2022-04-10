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

const eventsPart = $('#events_participating');
const partContainer = eventsPart.find('.profile_event_container');

const partIcon = partContainer.find('.profile_event_icon');
const acceptIcon = partIcon.find('.profile_accept');
const denyIcon = partIcon.find('.profile_deny');
const undecidedIcon = partIcon.find('.profile_undecided');

for (let i = 0; i < partContainer.length; i++) {

    partValueString = partContainer[i].attributes.value.value;
    partValue = parseInt(partValueString);
    
    container = $(`.profile_event_container:nth-child(${i + 1})`)

    accept = container.find('.profile_accept');
    deny = container.find('.profile_deny');
    undecided = container.find('.profile_undecided');

    if (partValue === 0){
        
        undecided.css('display', 'flex')

    }
    
    if (partValue === 1){
        
        accept.css('display', 'flex')

    }

    if (partValue === 2){
        
        deny.css('display', 'flex')

    }
    
}
    


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