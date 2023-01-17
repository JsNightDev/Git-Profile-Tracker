let userId;
let img_profile = document.getElementById('profilePic')
let repoDiv = document.getElementById('repo_parent')
let div = document.getElementById('profile')
let input = document.getElementById("input")
let search_bar_parent = document.getElementsByClassName("searchBarParent")
let h6_warning = document.getElementById("warning")

// document.getElementsByClassName("example");

input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        let repo = document.querySelector("#repo_parent")
        if (repo.children) {
            repo.innerHTML = " "
        }
        userId = document.getElementById('input').value
        fetch(`https://api.github.com/users/${userId}`)

            .then(response => {
                if (response.ok) {
                    console.log(response.json()
                        .then((res) => {
                            changeDom(res)
                        }))
                    let searchBar = document.getElementById("input")
                    searchBar.classList.remove("alert")
                    h6_warning.classList.remove("show_warning_use")
                    div.classList.remove("profile_card_none")
                    div.classList.add("profile_card")
                }
                else {
                    let searchBar = document.getElementById("input")
                    div.classList.add("profile_card_none")
                    searchBar.classList.add("alert")
                    searchBar.setAttribute('placeholder', 'Enter a valid UserId');
                    h6_warning.classList.add("show_warning_use")
                }
            })

    }

})

let changeDom = (data) => {
    img_profile.setAttribute('src', data.avatar_url);
    document.getElementById('name').innerHTML = data.name
    document.getElementById('userName').innerHTML = "@" + data.login
    document.getElementById('location').innerHTML = data.location
    document.getElementById('followers').innerHTML = "Followers" + " " + ":" + "  " + data.followers
    document.getElementById('following').innerHTML = "Following" + " " + ":" + "  " + data.following
    document.getElementById('repoCount').innerHTML = "Repositories" + " " + ":" + "  " + data.public_repos
    document.getElementById('jobRole').innerHTML = data.bio
}

function createRepoCrad(repoObj) {

    let card_parent = document.createElement('div')
    card_parent.classList.add("child")

    let name_tag = document.createElement('h3')
    name_tag.classList.add("name")
    name_tag.innerHTML = repoObj.name
    card_parent.appendChild(name_tag)

    let desc_tag = document.createElement('h4')
    desc_tag.classList.add("desc")
    if (repoObj.description) {
        if (repoObj.description.length > 50) {
            desc_tag.innerHTML = repoObj.description.slice(0, 50) + "...";

        }
    }
    else {
        desc_tag.innerHTML = repoObj.description
    }
    card_parent.appendChild(desc_tag)

    if (repoObj.language) {
        let lang_tag = document.createElement('h4')
        lang_tag.classList.add("lang")
        lang_tag.innerHTML = repoObj.language
        card_parent.appendChild(lang_tag)
    }
    repoDiv.append(card_parent)
}




function showrepo() {
    let repo = document.querySelector("#repo_parent")
    if (repo.children) repo.innerHTML = " "

    fetch(`https://api.github.com/users/${userId}/repos`)
        .then(repoData => repoData.json())
        .then(result => {
            for (let i = 0; i < result.length; i++) {
                // console.log(result[i]);
                createRepoCrad(result[i])
                repoDiv.classList.toggle("repo_card")
            }
        });

}























































// let userId;
// // let obj = {}
// let div = document.getElementById('profile')
// function getdata() {
//     userId = document.getElementById('input').value
//     fetch(`https://api.github.com/users/${userId}`)
//         .then(response => {
//             console.log(response.json().then((res) => {
//                 changeDom(res)
//                 div.classList.add("profile_card")
//             }))
//         })
//     // .then(response => response.json())
//     // .then(data => console.log(data), )
// }

// const changeDom = (data) => {
//     document.getElementById('name').innerHTML = data.name
// }



// let userId;
// // let obj = {}
// let div = document.getElementById('profile')
// function getdata() {
//     userId = document.getElementById('input').value
//     fetch(`https://api.github.com/users/${userId}`)
//         .then(response => response.json())
//         .then(data => console.log(data), div.classList.add("profile_card"))
// }

// console.log(obj);






// let userId;

// async function getdata() {
//     userId = document.getElementById('input').value
//     let val = await fetch(`https://api.github.com/users/${userId}`).then((response) => {
//         let div = document.getElementById('profile')
//         div.classList.add("profile_card")
//         changeDom(response)
//         return response.json()
//     }, (err) => {
//         console.log(err);
//     })
//     console.log(val);
// }

// const changeDom = (data) => {
//     document.getElementById('name').innerHTML = data.login;
// }




// let userId;
// async function getdata() {
//     userId = document.getElementById('input').value
//     let val = await fetch(`https://api.github.com/users/${userId}`).then((response) => {
//         let div = document.getElementById('profile')
//         div.classList.add("profile_card")
//         return response.json()
//     }, (err) => {
//         console.log(err);
//     })
//     console.log(val);
// }



// let userId;

// function getdata() {
//     userId = document.getElementById('input').value
//     fetch(`https://api.github.com/users/${userId}`)
//         .then(response => response.json())
//         .then(json => console.log(json))


//     let div = document.getElementById('profile')
//     div.classList.add("profile_card")
// }

/*let userId;


function getdata() {
    userId = document.getElementById('input').value
    fetch(`https://api.github.com/users/${userId}`)
        .then(response => response)
        .then(json => console.log(json))

}*/