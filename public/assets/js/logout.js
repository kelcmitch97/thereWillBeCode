// placeholder for public/js/logout.js
// to develop on branch develop feature/logout
// provides boilerplate for logout form handling
const logout = async () => {
 const response = await fetch('/api/users/logout', {
   method: 'POST',
   headers: { 'Content-Type': 'application/json' },
 });

 if (response.ok) {
   document.location.replace('/');
 } else {
   alert('Failed to log out.');
 }
};

document.querySelector('#logout').addEventListener('click', logout);