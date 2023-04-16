const BtnSignUp = document.querySelector("#signup");
const Btnuser = document.querySelector("#user");


fetch('/check')
    .then((data) => data.json())
    .then((data) => {
        // console.log(data);
        if (data.message === 'go home page') {
            window.location.href = 'home';
        }
    })

BtnSignUp.addEventListener('click', () => {
    window.location.href = 'login';
});

Btnuser.addEventListener('click', () => {
    window.location.href = 'profile';
});


