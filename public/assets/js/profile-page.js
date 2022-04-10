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

    var profileNameInput = $('#profile_edit_username');
    var profileDescInput = $('#profile_edit_description');

    // TweenMax.to(profileName, 0, { display: 'none' });
    TweenMax.to(profileDescription, 0, { display: 'none' });
    TweenMax.to(profileSports, 0, { display: 'none' });

    TweenMax.to(profileSportsInputs, 0, { display: 'flex' });
    TweenMax.to(profileDescInput, 0, { display: 'flex' });
    // TweenMax.to(profileNameInput, 0, { display: 'flex' });

    var sportArray = [];

    $('label').on('click', function(){

        labelID = $(this).attr('id');
        
        if (labelID === 'input-sport-1'){

            if ($('#sport-1').attr('checked')) {

                $('#sport-1').removeAttr('checked');
                TweenMax.to($(this), 0, { backgroundColor: '#39a6b2' });
                sportArray = sportArray.filter(filterThis => filterThis !== $('#sport-1').val());
                

            } else {

            $('#sport-1').attr('checked', 'true');
            TweenMax.to($(this), 0, { backgroundColor: '#024e76' });
            sportArray.push($('#sport-1').val());
            

            }

        }

        if (labelID === 'input-sport-2'){

            if ($('#sport-2').attr('checked')) {

                $('#sport-2').removeAttr('checked');
                TweenMax.to($(this), 0, { backgroundColor: '#39a6b2' });
                sportArray = sportArray.filter(filterThis => filterThis !== $('#sport-2').val());
                

                return sportArray;

            } else {

            $('#sport-2').attr('checked', 'true');
            TweenMax.to($(this), 0, { backgroundColor: '#024e76' });
            sportArray.push($('#sport-2').val());
            

            return sportArray;

            }

        }

        if (labelID === 'input-sport-3'){

            if ($('#sport-3').attr('checked')) {

                $('#sport-3').removeAttr('checked');
                TweenMax.to($(this), 0, { backgroundColor: '#39a6b2' });
                sportArray = sportArray.filter(filterThis => filterThis !== $('#sport-3').val());
                

                return sportArray;

            } else {

            $('#sport-3').attr('checked', 'true');
            TweenMax.to($(this), 0, { backgroundColor: '#024e76' });
            sportArray.push($('#sport-3').val());
            

            return sportArray;

            }

        }

        if (labelID === 'input-sport-4'){

            if ($('#sport-4').attr('checked')) {

                $('#sport-4').removeAttr('checked');
                TweenMax.to($(this), 0, { backgroundColor: '#39a6b2' });
                sportArray = sportArray.filter(filterThis => filterThis !== $('#sport-4').val());
                

                return sportArray;

            } else {

            $('#sport-4').attr('checked', 'true');
            TweenMax.to($(this), 0, { backgroundColor: '#024e76' });
            sportArray.push($('#sport-4').val());
            

            return sportArray;

            }

        }

        if (labelID === 'input-sport-5'){

            if ($('#sport-5').attr('checked')) {

                $('#sport-5').removeAttr('checked');
                TweenMax.to($(this), 0, { backgroundColor: '#39a6b2' });
                sportArray = sportArray.filter(filterThis => filterThis !== $('#sport-5').val());
                

                return sportArray;

            } else {

            $('#sport-5').attr('checked', 'true');
            TweenMax.to($(this), 0, { backgroundColor: '#024e76' });
            sportArray.push($('#sport-5').val());
            

            return sportArray;

            }

        }

    })

    $('#profile_save_link').on('click', function(){

        async function saveProfile() {

            if (sportArray.length === 0){
                sports = '';
            } else {
                const sportsToString = sportArray.toString();
                sports = sportsToString.replace(',', ', ');
            }

            const user_id = $('#profile_info_id').attr('value');
            // const username = $('#profile_edit_username').val();
            const descriptionValue = $('#profile_edit_description').val();

            if (descriptionValue.length === 0){

                description = $('#profile_edit_description').attr('placeholder');

            } else {

                description = descriptionValue;

            }
            
            const response = await fetch(`/api/users/${user_id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    sports,
                    // username,
                    description
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                document.location.replace('/profile');
            } else {
                alert(response.statusText);
            }
        
        };

        saveProfile();

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