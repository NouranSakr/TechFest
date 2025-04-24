
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});


const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


const form = document.getElementById('registrationForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  if (name && email && phone) {
    formMessage.textContent = `Thanks for registering, ${name}!`;
    formMessage.style.color = 'green';
    form.reset();
  } else {
    formMessage.textContent = 'Please fill all the fields.';
    formMessage.style.color = 'red';
  }
});
