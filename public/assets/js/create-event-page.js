async function newEvent(event) {
    event.preventDefault();

    const event_name = document.querySelector('#title').value;
    const location_id = document.querySelector('.form-venue select').value;
    const sport_id = document.querySelector('.form-sport select').value;
    const members_needed = document.querySelector('#players').value;
    const description = document.querySelector('#info').value;
    const date = document.querySelector('#date').value;
    const time = document.querySelector('#time').value;

    const date_time = date + ' ' + time + ':00';

    const response = await fetch(`/api/events/`, {
        method: 'POST',
        body: JSON.stringify({
        event_name,
        sport_id,
        members_needed,
        location_id,
        description,
        date_time,
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