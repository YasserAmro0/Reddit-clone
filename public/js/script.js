const BtnSignUp = document.querySelector("#signup");
const Btnuser = document.querySelector("#user");

BtnSignUp.addEventListener('click', () => {
    window.location.href = 'login';
});

Btnuser.addEventListener('click', () => {
    window.location.href = 'profile';
});

