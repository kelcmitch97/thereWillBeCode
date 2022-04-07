async function joinEvent(event) {
    event.preventDefault();
    const idString = window.location.toString()
    const event_id = idString.split('/event/')[1];

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
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
  };

document.querySelector('#join_button').addEventListener('click', joinEvent);