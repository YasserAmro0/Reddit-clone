
const mainposwrapperlight = document.querySelector(".main-post-wrapper-light");
const profileinfo = document.querySelector("#profile-info");

const user = window.location.href.split("profile/")[1];

fetch(`/myprofile/${user}`)
    .then((data) => data.json())
    .then((data) => showPost(data));



const showPost = (data) => {
    const image = document.createElement("img");
    image.src = "../images/user.png";
    image.style.width = "50px";
    image.style.height = "50px";
    const userName = document.createElement("h1");
    userName.textContent = `${data.data[0].username}`;

    const birthday = document.createElement("p");
    birthday.textContent = `birthday : ${data.data[0].birthday}`;

    const email = document.createElement("h3");
    email.textContent = `${data.data[0].email}`;
    profileinfo.appendChild(image);
    profileinfo.appendChild(userName);
    profileinfo.appendChild(birthday);
    profileinfo.appendChild(email);


    data.data.forEach((item) => {
        const mainpostlight = document.createElement("div");
        mainpostlight.className = "main-post-light";

        const divComponent = document.createElement("div");
        divComponent.className = "component-wrapper-light";

        const idown = document.createElement("i");
        idown.className = "fas fa-chevron-down";



        const iUp = document.createElement("i");
        iUp.className = "fas fa-chevron-up";


        let num;
        const spanNumber = document.createElement("span");
        spanNumber.className = "spanNumber";
        fetch(`/count/${item.id}`)
            .then((data) => data.json())
            .then((data) => {
                num = data[0].count
                spanNumber.innerHTML = `${num}`;
            });

        divComponent.appendChild(idown);
        divComponent.appendChild(spanNumber)
        divComponent.appendChild(iUp);

        mainpostlight.appendChild(divComponent);

        const fdnSHglight = document.createElement("div");
        fdnSHglight.className = "fdnSHg-light";

        mainpostlight.appendChild(fdnSHglight);

        const Xdpjnlight = document.createElement("div");
        Xdpjnlight.className = "Xdpjn-light";

        const spanContent = document.createElement("span");
        spanContent.className = "contentText";
        spanContent.textContent = `${item.content}`;

        Xdpjnlight.appendChild(spanContent);

        const iyZCUvlight = document.createElement("div");
        iyZCUvlight.className = "iyZCUv-light"
        const kOWlQllight = document.createElement("div");
        kOWlQllight.className = "kOWlQl-light"
        const image = document.createElement("img");
        image.style.maxWidth = "700px";
        image.src = `${item.image_url}`;
        const gBkGwrlight = document.createElement("div");
        gBkGwrlight.className = "gBkGwr-light";

        const btn = document.createElement("button");
        btn.className = "btnComment";

        fetch(`/countcomment/${item.id}`)
            .then((data) => data.json())
            .then((data) => countComments(data));

        const countComments = (data) => {
            data.forEach((item) => {
                btn.textContent = `comments (${item.count})`

            })
        }
        btn.addEventListener('click', () => {
            window.location.href = `/comments/${item.id}`;
        })


        const spanByname = document.createElement("span");
        spanByname.className = "userName";
        spanByname.textContent = `${item.username}`;


        const iconUser = document.createElement("i");
        iconUser.className = "fa fa-user-circle-o";
        iconUser.style.fontSize = "20px"

        gBkGwrlight.appendChild(iconUser);
        gBkGwrlight.appendChild(spanByname);
        gBkGwrlight.appendChild(btn);

        kOWlQllight.appendChild(image);

        iyZCUvlight.appendChild(kOWlQllight);

        fdnSHglight.appendChild(Xdpjnlight);
        fdnSHglight.appendChild(iyZCUvlight);
        fdnSHglight.appendChild(gBkGwrlight);
        mainpostlight.appendChild(fdnSHglight);

        mainposwrapperlight.appendChild(mainpostlight);
    });
}


