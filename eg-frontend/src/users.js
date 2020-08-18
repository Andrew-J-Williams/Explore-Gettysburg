class User{
    constructor(data){
        this.username = data.username
        this.password = data.password
    }
}

function createUser(userId){
    const userUrl = `http://localhost:3000/api/v1/users/`
    const user = {
        username: document.getElementById('user-name-spot').value,
        password: document.getElementById('password-spot').value
    }

    fetch(userUrl, {
        method: "POST",
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    })
    .then(resp => resp.json())
    .then(newUser => {
        console.log(newUser)

        const selectLogIn = document.querySelector("#login")

        selectLogIn.classList.toggle("shrink")

        selectLogIn.innerHTML = `
            <h3 id="welcome-user" class="welcome-user"><b><i>Welcome, ${newUser.username}</i></b></h3>
            <p id="hidden-user-id" class="hidden-user-id">${newUser.id}</p>
        `
        userId = newUser.id
        console.log(userId)
        console.log(document.getElementById("hidden-user-id").innerText)
        console.log(newUser.password)
    })

}

function validateUser(){

    
}