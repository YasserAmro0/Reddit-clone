const signup = document.querySelector("#signup");
const mainposwrapperlight = document.querySelector(".main-post-wrapper-light");

fetch('/check')
    .then((data) => data.json())
    .then((data) => {
        if (data.message === 'go home page') {
            window.location.href = 'home';
        }
    })

fetch('/allposts')
    .then((data) => data.json())
    .then((data) => showPost(data))


const showPost = (data) => {
    data.forEach((item) => {
        console.log(item)
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

        const containerLight = document.createElement("div");
        containerLight.className = "fdnSHg-light";

        mainpostlight.appendChild(containerLight);

        const contentLight = document.createElement("div");
        contentLight.className = "Xdpjn-light";

        const spanContent = document.createElement("span");
        spanContent.className = "contentText";
        spanContent.textContent = `${item.content}`;

        contentLight.appendChild(spanContent);

        const aboutLight = document.createElement("div");
        aboutLight.className = "iyZCUv-light"
        const divImage = document.createElement("div");
        divImage.className = "kOWlQl-light"
        const image = document.createElement("img");
        image.style.maxWidth = "400px";
        image.src = `${item.image_url}`;
        const footerPost = document.createElement("div");
        footerPost.className = "gBkGwr-light";


        const spanByname = document.createElement("span");
        spanByname.textContent = `${item.username}`
        const iconUser = document.createElement("i");
        iconUser.className = "fa fa-user-circle-o";
        iconUser.style.fontSize = "20px"

        footerPost.appendChild(iconUser);
        footerPost.appendChild(spanByname);
        divImage.appendChild(image);

        aboutLight.appendChild(divImage);

        containerLight.appendChild(contentLight);
        containerLight.appendChild(aboutLight);
        containerLight.appendChild(footerPost);
        mainpostlight.appendChild(containerLight);

        mainposwrapperlight.appendChild(mainpostlight);
    });
}
signup.addEventListener('click', () => {
    window.location.href = 'login';
})
