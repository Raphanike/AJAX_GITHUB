document.addEventListener('DOMContentLoaded', function(){
    const nameE = document.querySelector('#name');
    const userE = document.querySelector('#username');
    const avatarE = document.querySelector('#avatar');
    const reposE = document.querySelector('#repos');
    const follwersE = document.querySelector('#followers');
    const followingE = document.querySelector('#following');
    const linkE = document.querySelector('#link');

    fetch('https://api.github.com/users/Raphanike')
        .then(function(res){
            return res.json();
        })
        .then(function(json){
            nameE.innerText = json.name;
            userE.innerText = json.login;
            avatarE.src = json.avatar_url;
            followingE.innerText = json.following;
            follwersE.innerText = json.followers;
            reposE.innerText = json.public_repos;
            linkE.href = json.html_url;
        })
})