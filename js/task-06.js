const validationInput = document.getElementById('validation-input');
const expectedLength = parseInt(validationInput.getAttribute('data-length'));

validationInput.addEventListener('blur', function() {
    const inputLength = validationInput.value.length;

    if (inputLength === expectedLength) {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
      } else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
      }
    });