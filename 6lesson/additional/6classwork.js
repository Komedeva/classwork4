// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
//
//
//                 з users вивела пости
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(users => {
        console.log(users);
        let userWrap = document.getElementsByClassName('user-wrap') [0];
        for (const user of users) {
            let div67 = document.createElement('div');
            div67.innerText = user.email;
            let title = document.createElement('h2');
            title.innerText = user.id + ' , ' + user.username + ' , ' + user.name;
            let block2 = document.createElement('div')
            div67.append(title, block2);

            let btn2 = document.createElement('button');
            btn2.innerText = 'posts';
            btn2.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(value => value.json())
                    .then(posts => {
                        for (const post of posts) {
                            let namePosts = document.createElement("h3")
                            namePosts.innerText = post.userId + ' ' + post.id + ' , ' + post.title + ''+ post.body;
                            block2.append(namePosts);
                        }

                    });
            };
            div67.appendChild(btn2);
            userWrap.append(div67);
        }
    });

//              з постів вивела коменти
fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(value => value.json())
    .then(value => {
        console.log(value);
        let postWrap = document.getElementsByClassName('post-wrap') [0];
        for (const post of value) {
            let div = document.createElement('div');
            div.innerText = post.title + ' , ' + post.body;
            let title = document.createElement('h2');
            title.innerText = post.id + ' , ' + post.userId;
            let block = document.createElement('div')
            div.append(title, block);

            let btn = document.createElement('button');
            btn.innerText = 'details';
            btn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(value => value.json()).then(comments => {
                    for (const comment of comments) {
                        let nameComments = document.createElement("h3")
                        nameComments.innerText = comment.name + ' ' + comment.email + ' , ' + comment.body;
                        block.append(nameComments);
                    }
                });
            };
            div.appendChild(btn);
            postWrap.append(div);
        }
    });
