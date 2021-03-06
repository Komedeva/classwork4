
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value=> value.json())
    .then(value=> {
        console.log(value);
        let postWrap= document.getElementsByClassName('post-wrap') [0];
        for (const post of value) {
            let div = document.createElement('div');
            div.innerText = post.title + ' , ' + post.body;
            let title = document.createElement('h2');
            title.innerText = post.id + ' , ' + post.userId;
            div.append(title);

            let btn = document.createElement('button');
            btn.innerText = 'details';
            btn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/users/${post.id}/posts`)
                    .then(value => value.json())
                    .then(value => {
                        console.log(value);
                    });
                // .then(postOfUsers => {
                //    let postBox = document.getElementsByClassName('posts')[0];
                //    postBox.innerText= '';
                //    for (const post of postOfUsers){
                //        let postDiv= document.createElement('div');
                //        postDiv.innerText= post.title;
                //        postBox.append(postDiv);
                // }
                // });
            };
            div.appendChild(btn);
            postWrap.append(div);
        }
    });

fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(value=> value.json())
    .then(value=> {
        console.log(value);
        let commentWrap= document.getElementsByClassName('comments-wrap') [0];
        for (const comment of value){
            let div3 = document.createElement('div');
            div3.innerText= comment.name + ' '+ comment.email + ' , '+ comment.body;
            commentWrap.append(div3);
            let title = document.createElement('h2');
            title.innerText=  comment.id
            div3.append(title);

            let btn = document.createElement('button');
            btn.innerText = 'details';
            btn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/${comment.postId}comments`)
                    .then(value => value.json())
                    .then(value => {
                        console.log(value);
                    });
                // .then(postOfUsers => {
                //    let postBox = document.getElementsByClassName('posts')[0];
                //    postBox.innerText= '';
                //    for (const post of postOfUsers){
                //        let postDiv= document.createElement('div');
                //        postDiv.innerText= post.title;
                //        postBox.append(postDiv);
                // }
                // });
            };
            div3.appendChild(btn);
            commentWrap.append(div3);
        }
    });