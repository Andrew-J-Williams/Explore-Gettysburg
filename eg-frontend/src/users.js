class User{
    constructor(data){
    this.username = data.username
    this.password = data.password
    }
}

function createUser(){
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
        const removeInner = document.getElementsByClassName("inner-box")
        selectLogIn.prepend(removeInner)


        selectLogIn.innerHTML = `
            <h3><b><i>Welcome, ${newUser.username}!</i></b></h3>
        `
    })

}