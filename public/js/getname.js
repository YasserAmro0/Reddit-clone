const userName_user = document.querySelector(".userName_user");

fetch('/check')
    .then((data) => data.json())
    .then((data) => {
        console.log(data.dataNow.username);
        userName_user.textContent = `${data.dataNow.username}`;
    })