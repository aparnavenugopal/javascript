const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

const isValidEmail = (input) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(re.test(input.value.trim())){
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

const getFieldName = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//check passwords match
const checkPasswordsMatch = (input1, input2) => {
  if(input1.value !== input2.value){
    showError(input2, 'passwords do not match')
  }
}

//check required fields
const checkRequired = (inputArr) =>{
  inputArr.forEach((input) => {
     if(input.value.trim() === ''){
        showError(input, `${getFieldName(input)} is required`);
     }else{
        showSuccess(input);
     }
  })
}

const checkLength = (input, min, max) => {
   if(input.value.length < min){
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
   }else if (input.value.length > max){
     showError(input, `${getFieldName(input)} must be lss than ${max} characters`);
   }else{
    showSuccess(input);
   }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 20);
  checkLength(password, 3, 24);
  isValidEmail(email);
  checkPasswordsMatch(password, password2);
});

// Add input events to clear error when typing
[username, email, password, password2].forEach(input => {
  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
      showSuccess(input);
    }
  });
});