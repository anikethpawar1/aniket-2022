const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error-msg')
const nameError = document.getElementById('name-error')
const pswdError = document.getElementById('pswd-error')

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!name.value) {
    nameError.innerHTML = 'Name is required';
  } else {
    nameError.innerHTML = '';
  }
  if (!password.value) {
    pswdError.innerHTML = 'Password is required';
  } else if (password.value.length <= 6) {
    pswdError.innerHTML = 'Password must be longer than 6 characters';
  } else if (password.value.length >= 20) {
    pswdError.innerHTML = 'Password must be less than 20 characters';
  } else {
    pswdError.innerHTML = '';
  }

  if (name.value && password.value) {
    console.log()
    if (name.value === 'Abhijeet') {
      errorElement.innerHTML = '';
    } else {
      errorElement.innerHTML = 'No user found of this name.';
    }
  }
})