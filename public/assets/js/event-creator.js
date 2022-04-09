$('#applicants_tab').on('click', function(){

    $('.right_content_spacer').css('display', 'none')

    $('.creator_content_spacer').css('display', 'flex')

})

// Colors for distinguishing what the current status of the user is... Don't as about .attributes.value.vlue IDK what's going on as to why I have to target so hard

const applicantContainer = $('.creator_applicant');

for (let i = 0; i < applicantContainer.length; i++) {

    const applicant = applicantContainer[i];
    const valueString = applicant.attributes.value.value
    const valueInteger = parseInt(valueString);

    if (valueInteger === 0){

        $('.undecided_applicant').css('color', 'blue')

    }

    if (valueInteger === 2){

        $('.deny_applicant').css('color', 'red')

    }

    if (valueInteger === 1){

        $('.accept_applicant').css('color', 'green')

    }
    
}

$('.accept_applicant').on('click', function(){

    const infoContainer = $(this).parent().parent();

    const infoUserID = infoContainer.attr('id');
    const stringUserID = infoUserID.replace('user-', '');
    const user_id = parseInt(stringUserID);

    const stringStatus = $(this).attr('value');
    const status = parseInt(stringStatus);

    const eventString = window.location.toString()
    const event_id = eventString.split('/event/')[1];

    acceptFetch();

    async function acceptFetch(){

        const response = await fetch(`/event/update`, {
            method: 'PUT',
            body: JSON.stringify({
            event_id,
            user_id,
            status
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {

        } else {
            alert(response.statusText);
        }

    }

    setTimeout(() => {

        document.location.replace(`/event/${event_id}`);

    }, 500);

});

$('.deny_applicant').on('click', function(){

    const infoContainer = $(this).parent().parent();

    const infoUserID = infoContainer.attr('id');
    const stringUserID = infoUserID.replace('user-', '');
    const user_id = parseInt(stringUserID);

    const stringStatus = $(this).attr('value');
    const status = parseInt(stringStatus);

    const eventString = window.location.toString()
    const event_id = eventString.split('/event/')[1];

    acceptFetch();

    async function acceptFetch(){

        const response = await fetch(`/event/update`, {
            method: 'PUT',
            body: JSON.stringify({
            event_id,
            user_id,
            status
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            
        } else {
            alert(response.statusText);
        }

    }

    setTimeout(() => {

        document.location.replace(`/event/${event_id}`);

    }, 500);

});

$('.undecided_applicant').on('click', function(){

    const infoContainer = $(this).parent().parent();

    const infoUserID = infoContainer.attr('id');
    const stringUserID = infoUserID.replace('user-', '');
    const user_id = parseInt(stringUserID);

    const stringStatus = $(this).attr('value');
    const status = parseInt(stringStatus);

    const eventString = window.location.toString()
    const event_id = eventString.split('/event/')[1];

    acceptFetch();

    async function acceptFetch(){

        const response = await fetch(`/event/update`, {
            method: 'PUT',
            body: JSON.stringify({
            event_id,
            user_id,
            status
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            
        } else {
            alert(response.statusText);
        }

    }

    setTimeout(() => {

        document.location.replace(`/event/${event_id}`);

    }, 500);

});