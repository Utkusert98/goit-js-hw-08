const form = document.querySelector('.login-form');

const validateForm = () => {
  const name = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (name === '' || password === '') {
    alert('All form fields must be filled in');
    return false;
  }
  return true;
};
form.addEventListener('submit', event => {
  event.preventDefault();
  if (validateForm()) {
    console.log({
      email: form.elements.email.value.trim(),
      password: form.elements.password.value.trim(),
    });
  }
  form.reset();
});
