async function loginForm(event) {
    event.preventDefault();
  
    const username = document.querySelector('#main_user').value.trim();
    const password = document.querySelector('#main_password').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }

  }

  document.querySelector('#hero_login_form').addEventListener('submit', loginForm);