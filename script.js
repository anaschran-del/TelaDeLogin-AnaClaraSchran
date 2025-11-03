document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  // Validação do formulário
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Validação básica
    if (validateForm()) {
        // Simulação de login bem-sucedido
      alert('Login realizado com sucesso!');
      // Aqui você normalmente faria uma requisição para o servidor
      // loginForm.submit();
    }
  });

    // Validação em tempo real
    emailInput.addEventListener('blur', validateEmail);
       passwordInput.addEventListener('blur, validatePassword');

       function validadeForm() {
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        return is
       }    }

    // Validação de senha
    const passwordValid = validatePassword(passwordInput.value);
    if (!passwordValid) {
      alert('Senha inválida');
      return;
    }

    // Enviar formulário
    loginForm.submit();
  });

  // Validação do tempo real
  emailInput.addEventListener('blur', validateEmail);
  passwordInput.addEventListener('blur', validatePassword);

  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  function validatePassword(password) {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordPattern.test(password);
  }
});
function validatePassword() {
  const password = passwordInput.value.trim();

  if (password === '') {
    showError(passwordInput, 'Senha é obrigatória');
    return false;
  } else if (password.length < 6) {
    showError(passwordInput, 'Senha deve ter pelo menos 6 caracteres');
    return false;
  } else {
    showSuccess(passwordInput);
    return true;
  }
}

function showError(input, message) {
  const inputGroup = input.parentElement;
  const errorElement = inputGroup.querySelector('.error-message');

  // Remove classes de sucesso e exibe erro
  inputGroup.classList.remove('success');
  inputGroup.classList.add('error');

  if (existingError) {
    existingError.remove();
  }

  const errorMessage = document.createElement('span');
  errorMessage.classList.add('error-message');
  errorMessage.innerText = message;
  inputGroup.appendChild(errorMessage);
}

function showSuccess(input) {
  const inputGroup = input.parentElement;

  // Remove classes de erro e exibe sucesso
  inputGroup.classList.remove('error');
  inputGroup.classList.add('success');

  const existingError = inputGroup.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }
}