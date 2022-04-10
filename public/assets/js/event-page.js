async function joinEvent(event) {
    event.preventDefault();
    const idString = window.location.toString()
    const event_id_string = idString.split('/event/')[1];
    const event_id = parseInt(event_id_string);

    console.log(event_id)
    
    const response = await fetch(`/join-event`, {
        method: 'POST',
        body: JSON.stringify({
            event_id
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

document.querySelector('#join_button').addEventListener('click', joinEvent);