let userId;
let img_profile = document.getElementById('profilePic')
let repoDiv = document.getElementById('repo_parent')
// let obj = {}
let div = document.getElementById('profile')


function get_profile_data() {
    // userId = document.getElementById('input').value
    userId = "lijoneoito"
    fetch(`https://api.github.com/users/${userId}`)
        .then(response => {
            console.log(response.json()
                .then((res) => {
                    changeDom(res)
                }))
            div.classList.add("profile_card")
        })
}

let changeDom = (data) => {
    img_profile.setAttribute('src', data.avatar_url);
    document.getElementById('name').innerHTML = data.name
    document.getElementById('userName').innerHTML = data.login
    document.getElementById('location').innerHTML = data.location
    document.getElementById('followers').innerHTML = data.followers
    document.getElementById('following').innerHTML = data.following
    document.getElementById('repoCount').innerHTML = data.public_repos
    document.getElementById('jobRole').innerHTML = data.bio
}

function createRepoCrad(repoObj) {

    // console.log(repoObj.name);
    let card_parent = document.createElement('div')
    card_parent.classList.add("child")

    let name_tag = document.createElement('h3')
    name_tag.classList.add("name")
    name_tag.innerHTML = repoObj.name
    card_parent.appendChild(name_tag)

    let desc_tag = document.createElement('h4')
    desc_tag.classList.add("desc")
    desc_tag.innerHTML = repoObj.description
    card_parent.appendChild(desc_tag)

    let lang_tag = document.createElement('h4')
    lang_tag.classList.add("lang")
    lang_tag.innerHTML = repoObj.language
    card_parent.appendChild(lang_tag)

    repoDiv.append(card_parent)

}

function showrepo() {
    // userId = document.getElementById('input').value
    let repo = document.querySelector("#repo_parent")
    if (repo.children) repo.innerHTML = " "
    userId = "lijoneoito"

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
get_profile_data()
showrepo()
