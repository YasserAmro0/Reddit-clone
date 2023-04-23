const signUpbtn = document.querySelector(".sign-up-btn");
const usernameSignUp = document.querySelector(".usernameSignUp");
const passwordsignUp = document.querySelector(".passwordsignUp");
const emailSignUp = document.querySelector(".emailSignUp");
const birthday = document.querySelector(".birthday");
const gender = document.getElementById("gender");
const error = document.querySelector(".error");
const success = document.querySelector(".success");

// error.style.display = 'block';
signUpbtn.addEventListener('click', () => {

    if (usernameSignUp.value.length < 3 || usernameSignUp.value.length > 20) {
        error.style.display = 'block';
        error.textContent = "username must be at least 3 characters and less than 20 characters long ";
    }

    if (passwordsignUp.value.length < 5 || passwordsignUp.value.length > 30) {
        error.style.display = 'block';

        error.textContent = "password must be at least 5 characters and less than 30 characters long ";
    }

    const body = {
        username: usernameSignUp.value,
        password: passwordsignUp.value,
        email: emailSignUp.value,
        birthday: birthday.value,
        gender: gender.value,
    };
    fetch("/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    })
        .then((data) => data.json())
        .then((result) => {
            console.log(result);
            if (result.status === 400) {
                error.style.display = 'block';
                error.textContent = `${result.message}`;
            } else {
                success.style.display = "block";
                success.textContent = 'create account successfully, login to your account';
            }
            usernameSignUp.value = ''
            passwordsignUp.value = ''
            emailSignUp.value = ''
            birthday.value = ''
            gender.value = ''
        })
        .catch(() => {
            error.style.display = 'block';
            error.textContent = "you have already account userName or Email is token";
        })
})
