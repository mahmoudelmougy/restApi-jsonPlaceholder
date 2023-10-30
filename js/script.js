
let usersRequest = new XMLHttpRequest()
usersRequest.open("GET","https://jsonplaceholder.typicode.com/users/")
usersRequest.responseType ="json"
usersRequest.send()

usersRequest.onload = function(){
    let users = usersRequest.response
    // let id = 1
    for(let user of users){
        document.getElementById("users").innerHTML +=`
            <div class="user" onclick="showPosts(${user.id})" id=${user.id}>
                <h2>${user.name}</h2>
                <h4>${user.email}</h4>
            </div>
        `
        // id++
    }
}


let postsRequest = new XMLHttpRequest()
postsRequest.open("GET","https://jsonplaceholder.typicode.com/posts/")
postsRequest.responseType ="json"
postsRequest.send()

function showPosts(userId){
    let usersArr = document.getElementsByClassName("user")

    for(let user of usersArr){
        user.classList.remove("selected")
    }

    document.getElementById(userId).classList.add("selected")

    document.getElementById("posts").innerHTML = ""
    let posts = postsRequest.response    
    
    for(let post of posts){
        if(post.userId === userId){
            document.getElementById("posts").innerHTML +=`
            <div class="post">
                <h3>${post.title}</h3>
                <hr>
                <p>
                    ${post.body}
                </p>
            </div>
    
            `
        }
    }
}











