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
    
// On clicks

$('#profile_edit_link').on('click', function(){

    var profileName = $('.profile_info').find('h3');
    var profileDescription = $('.profile_info').find('p');
    var profileSports = $('.profile_sports');
    var profileSportsInputs = $('.profile_sports_inputs');

    TweenMax.to(profileName, 0, { display: 'none' });
    TweenMax.to(profileDescription, 0, { display: 'none' });
    TweenMax.to(profileSports, 0, { display: 'none' });

    TweenMax.to(profileSportsInputs, 0, { display: 'flex' });

    $('label').on('click', function(){

        labelID = $(this).attr('id');
        
        if (labelID === 'input-sport-1'){

            if ($('#sport-1').attr('checked')) {

                $('#sport-1').removeAttr('checked');
                TweenMax.to($(this), 0, { backgroundColor: '#39a6b2' });

            } else {

            $('#sport-1').attr('checked', 'true');
            TweenMax.to($(this), 0, { backgroundColor: '#024e76' });

            }

        }

        if (labelID === 'input-sport-2'){

            if ($('#sport-2').attr('checked')) {

                $('#sport-2').removeAttr('checked');
                TweenMax.to($(this), 0, { backgroundColor: '#39a6b2' });

            } else {

            $('#sport-2').attr('checked', 'true');
            TweenMax.to($(this), 0, { backgroundColor: '#024e76' });

            }
            
        }


        if (labelID === 'input-sport-3'){

            if ($('#sport-3').attr('checked')) {

                $('#sport-3').removeAttr('checked');
                TweenMax.to($(this), 0, { backgroundColor: '#39a6b2' });

            } else {

            $('#sport-3').attr('checked', 'true');
            TweenMax.to($(this), 0, { backgroundColor: '#024e76' });

            }
            
        }


        if (labelID === 'input-sport-4'){

            if ($('#sport-4').attr('checked')) {

                $('#sport-4').removeAttr('checked');
                TweenMax.to($(this), 0, { backgroundColor: '#39a6b2' });

            } else {

            $('#sport-4').attr('checked', 'true');
            TweenMax.to($(this), 0, { backgroundColor: '#024e76' });

            }
            
        }


        if (labelID === 'input-sport-5'){

            if ($('#sport-5').attr('checked')) {

                $('#sport-5').removeAttr('checked');
                TweenMax.to($(this), 0, { backgroundColor: '#39a6b2' });

            } else {

            $('#sport-5').attr('checked', 'true');
            TweenMax.to($(this), 0, { backgroundColor: '#024e76' });

            }
            
        }

    })

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