function validarEmail() {
  let emailInput = document.getElementById('email');
  var errorIcon = document.querySelector('.icon-error');
  var errorMessage = document.querySelector('.error-text');

  // Expresión regular para validar un formato de correo electrónico simple
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailInput.value === '' || !emailRegex.test(emailInput.value)) {
    // Muestra el icono de error y el mensaje de error
    errorIcon.style.display = 'inline';
    errorMessage.style.display = 'inline';
    errorMessage.textContent = "Please provide a valid email";
  } else {
    // Oculta el icono de error y el mensaje de error si el correo es válido
    errorIcon.style.display = 'none';
    errorMessage.style.display = "inline";
    // Aquí puedes enviar el formulario o realizar otras acciones
    errorMessage.textContent = "Thanks for subscribe to our newsletter "
  }
}
