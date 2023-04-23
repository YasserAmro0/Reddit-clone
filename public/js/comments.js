const comment_submit = document.querySelector(".comment-submit");
const content = document.getElementById("textarea");
const post_comment = document.querySelector(".post-comment");
const namePost = document.querySelector(".name");
const postId = window.location.href.split("comments/")[1];
const comment_update = document.querySelector(".comment-update");

comment_submit.addEventListener('click', () => {
    const body = {
        content: content.value
    }
    fetch(`/comment/${postId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    })
    location.reload();
})

fetch(`/getcomment/${postId}`)
    .then((data) => data.json())
    .then((data) => showComments(data));

const showComments = (data) => {
    namePost.textContent = `${data.username}`
    data.data.forEach((item) => {
        const list = document.createElement("div");
        list.className = "list";
        const user = document.createElement("div");
        user.className = "user";

        const userImage = document.createElement("div");
        userImage.className = "user-image";

        const image = document.createElement("img");
        image.src = "../images/user.png";

        const user_meta = document.createElement("div");
        user_meta.className = "user_meta";

        const name = document.createElement("div");
        name.className = "name";
        name.textContent = `${item.username}`;

        if (namePost.textContent === name.textContent) {
            const iconDelete = document.createElement('i');
            iconDelete.className = "fas fa-trash-alt";
            iconDelete.style.fontSize = "16px"

            const iconUpdate = document.createElement('i');
            iconUpdate.className = "fa fa-pencil-square-o";
            iconUpdate.style.fontSize = "16px"
            user_meta.appendChild(iconUpdate);
            user_meta.appendChild(iconDelete);


            iconUpdate.addEventListener('click', () => {
                content.value = comment_post.textContent;
                comment_update.style.display = 'block';
                comment_submit.style.display = 'none';

                comment_update.addEventListener('click', () => {

                    fetch(`/comment/update/${item.id}`, {
                        method: "put",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            content: content.value,
                        }),
                    })
                    location.reload();
                })

            })

            iconDelete.addEventListener('click', () => {
                fetch(`/comment/${item.id}`, {
                    method: 'DELETE',
                })
                location.reload();
            })
        }

        const day = document.createElement("div");
        day.className = "day";
        day.textContent = `${item.created_at}`;

        const comment_post = document.createElement("div");
        comment_post.className = "comment-post";
        comment_post.textContent = `${item.content}`;

        userImage.appendChild(image);
        user_meta.appendChild(name);

        user_meta.appendChild(day);
        user.appendChild(userImage);
        user.appendChild(user_meta);
        list.appendChild(user);
        list.appendChild(comment_post);
        post_comment.appendChild(list)

    });

}