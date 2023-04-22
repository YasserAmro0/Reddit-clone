
const userName_user = document.querySelector(".userName_user");
const sub = document.querySelector(".sub");
const content = document.querySelector(".contentV");
const image_url = document.querySelector(".image_url");
const mainposwrapperlight = document.querySelector(".main-post-wrapper-light");


fetch('/check')
    .then((data) => data.json())
    .then((data) => {
        if (data.message === "go home page") {
            userName_user.textContent = `${data.dataNow.username}`;
            getprofile(data)
        }

    });
const getprofile = (data) => {
    userName_user.addEventListener('click', () => {
        window.location.href = `/profile/${data.dataNow.username}`;
    })
}



fetch('/allposts')
    .then((data) => data.json())
    .then((data) => showPost(data))



const showPost = (data) => {
    let num;
    data.forEach((item) => {
        const mainpostlight = document.createElement("div");
        mainpostlight.className = "main-post-light";

        const divComponent = document.createElement("div");
        divComponent.className = "component-wrapper-light";

        const idown = document.createElement("i");
        idown.className = "fas fa-chevron-down";

        idown.addEventListener('click', () => {
            fetch(`/votes/down/${item.id}`)
                .then((data) => data.json())
                .then((data) => {
                    if (data.msg === "done") {
                        fetch(`/count/${item.id}`)
                            .then((data) => data.json())
                            .then((data) => {
                                num = JSON.parse(data[0].count);
                                spanNumber.innerHTML = `${num}`;
                            });
                    }

                }).catch((err) => console.log(err));

        });


        const iUp = document.createElement("i");
        iUp.className = "fas fa-chevron-up";

        iUp.addEventListener('click', () => {
            fetch(`/votes/up/${item.id}`)
                .then((data) => data.json())
                .then((data) => {
                    if (data.message === "You voted before") {
                        return;
                    } else if (data.message === "done") {
                        fetch(`/count/${item.id}`)
                            .then((data) => data.json())
                            .then((data) => {
                                num = JSON.parse(data[0].count)
                                spanNumber.innerHTML = `${num}`;
                            });
                    }
                }).catch((err) => console.log(err));

        });


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


        const spanByname = document.createElement("span");
        spanByname.className = "userName";
        spanByname.textContent = `${item.username}`;

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
            window.location.href = `comments/${item.id}`;
        })


        spanByname.addEventListener('click', () => {
            window.location.href = `/profile/${item.username}`;

        })


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



sub.addEventListener('click', () => {
    const body = {
        content: content.value,
        image_url: image_url.value
    };
    fetch("/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    })
    content.value = "";
    image_url.value = "";
    location.reload();
})


