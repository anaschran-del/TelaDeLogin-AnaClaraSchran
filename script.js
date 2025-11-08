document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const resetPasswordForm = document.getElementById('resetPasswordForm');
    const loginCard = document.getElementById('loginCard');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    const backToLogin = document.getElementById('backToLogin');
    const backToLoginLink = document.getElementById('backToLoginLink');
    const loginMessage = document.getElementById('loginMessage');
    const resetMessage = document.getElementById('resetMessage');

    forgotPasswordLink.addEventListener('click', e => {
        e.preventDefault();
        loginCard.classList.add('flipped');
    });

    [backToLogin, backToLoginLink].forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            loginCard.classList.remove('flipped');
        });
    });

    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        showMessage(loginMessage, 'Login realizado com sucesso!', 'success');
    });

    resetPasswordForm.addEventListener('submit', e => {
        e.preventDefault();
        showMessage(resetMessage, 'E-mail de redefinição enviado!', 'success');
        setTimeout(() => loginCard.classList.remove('flipped'), 2000);
    });

    function showMessage(el, msg, type) {
        el.textContent = msg;
        el.className = `message ${type === 'success' ? 'success-message' : 'error-message-global'}`;
        el.style.display = 'block';
    }
});