const daanSalita = document.querySelector('#inputPassword')
const eyeIcon = document.querySelector('#showHide')

eyeIcon.addEventListener('click', () => {
    if (eyeIcon.classList.contains('fa-eye')) {
        daanSalita.setAttribute('type', 'text');
        eyeIcon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        daanSalita.setAttribute('type', 'password');
        eyeIcon.classList.replace('fa-eye-slash', 'fa-eye');
    }
});