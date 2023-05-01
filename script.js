const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Por favor complete todos los campos.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
    return;
  }

  alert('Mensaje enviado correctamente.');
  form.reset();
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
