const loginForm = document.querySelector(".login-form");

loginForm.addEventListener  ("submit", e => {

    e.preventDefault();
  

    const emailInput = loginForm.elements['email'];
    const passwordInput = loginForm.elements['password'];

    if (emailInput.value === '' || passwordInput.value === '') {
        alert('Te rugam sa introduci o valoare in ambele campuri!');
        return;
    
};

const formData = {
    email: emailInput.value,
    password: passwordInput.value
  };

  console.log(formData);

  loginForm.reset();
});
