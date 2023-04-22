const loginBtn = document.querySelector(".login-btn");
const email = document.querySelector("#loginUserName");
const password = document.querySelector("#loginPassowrd");
const error = document.querySelector(".error");
const success = document.querySelector(".success");

loginBtn.addEventListener('click', () => {

    if (email.value.length < 8 || email.value.length > 80) {
        error.style.display = 'block';
        error.textContent = "email must be at least 8 characters and less than 40 characters long ";
        return;
    } else if (
        password.value.length < 5 ||
        password.value.length > 30
    ) {
        error.style.display = 'block';
        error.textContent = "password must be at least 5 characters and less than 30 characters long "

        return;
    }
    else if (
        !password.value.match(/^[a-zA-Z0-9]{5,30}$/)) {
        error.style.display = 'block';
        error.textContent = "Must at least contain one number,lowercase letter, uppercase letter ";
        return;
    }
    const body = {
        email: email.value,
        password: password.value
    }

    fetch('/signin', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    })
        .then((data) => data.json())
        .then((data) => {
            if (data.message === 'this email is not exists') {
                error.style.display = 'block';
                error.textContent = `${data.message}`
            } else if (data.message === 'Invalid password') {
                error.style.display = 'block';
                error.textContent = `${data.message}`
            } else if (data.message === '"email" must be a valid email') {
                error.style.display = 'block';
                error.textContent = `${data.message}`
            }
            else {
                success.style.display = "block";
                success.textContent = "success login"
                window.location.href = 'home';
            }
        })
        .catch((err) => console.log(err));
})