async function newEvent(event) {
    event.preventDefault();

    const location_id = document.querySelector('.form-venue select').value;
    const sport_id = document.querySelector('.form-sport select').value;
    const members_needed = document.querySelector('#players').value;
    const description = document.querySelector('#info').value;

    const response = await fetch(`/api/events/`, {
        method: 'POST',
        body: JSON.stringify({
        sport_id,
        members_needed,
        location_id,
        description,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/events');
    } else {
        alert(response.statusText);
    }
  };

  document.querySelector('#submit').addEventListener('click', newEvent);