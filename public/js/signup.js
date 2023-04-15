const signUpbtn = document.querySelector(".sign-up-btn");
const usernameSignUp = document.querySelector(".usernameSignUp");
const passwordsignUp = document.querySelector(".passwordsignUp");
const emailSignUp = document.querySelector(".emailSignUp");
const birthday = document.querySelector(".birthday");
const gender = document.getElementById("gender");



signUpbtn.addEventListener('click', () => {
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
