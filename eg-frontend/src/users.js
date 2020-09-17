/* class User{
    constructor(data){
        this.username = data.username
        this.password = data.password
    }
} */

function createUser(userId){
    const user = {
        username: document.getElementById('user-name-spot').value,
        password: document.getElementById('password-spot').value
    }

    validateUser(user, user.username, user.password, userId)

}


function validateUser(userObject, userName, userPassword, userId){
    const allUsers = `http://localhost:3000/api/v1/users/`

    fetch(allUsers)
    .then(response => response.json())
    .then(data => {
        const findUser = data.find(user => user.username === userName)

        if (findUser){
            if(findUser.password === userPassword){
                fetch(allUsers, {
                    method: "POST",
                    body: JSON.stringify(userObject),
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
            
                })
            } else {
                alert(`Password for ${userName} is Incorrect!`)
            }
        } else {
            if (userName !== " " && userPassword !== " "){
                fetch(allUsers, {
                    method: "POST",
                    body: JSON.stringify(userObject),
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
            
                })
            } else {
                alert(`Username and/or Password Cannot be Left Blank.`)
            }

        }
        
    })

}