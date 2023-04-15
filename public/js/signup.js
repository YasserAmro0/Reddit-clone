const signUpbtn = document.querySelector(".sign-up-btn");
const usernameSignUp = document.querySelector(".usernameSignUp");
const passwordsignUp = document.querySelector(".passwordsignUp");
const emailSignUp = document.querySelector(".emailSignUp");
const birthday = document.querySelector(".birthday");
const gender = document.getElementById("gender");



signUpbtn.addEventListener('click', () => {

    if (usernameSignUp.value.length < 3 || usernameSignUp.value.length > 20) {
        window.alert("username must be at least 3 characters and less than 20 characters long ");
    }

    if (passwordsignUp.value.length < 5 || passwordsignUp.value.length > 30) {
        window.alert("password must be at least 5 characters and less than 30 characters long ");
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
            if (result.error == true) {
                window.alert(result.massage);
            } else {
                window.alert('create account successfully, login to your account')
            }
            usernameSignUp.value = ''
            passwordsignUp.value = ''
            emailSignUp.value = ''
            birthday.value = ''
            gender.value = ''
        })
        .catch(err => {
            window.alert(err)
        })
})
