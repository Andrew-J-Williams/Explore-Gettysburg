window.addEventListener('DOMContentLoaded', e => {

    const redMarker1 = document.querySelector("#red-marker1")
    const redMarker2 = document.querySelector("#red-marker2")
    const redMarker3 = document.querySelector("#red-marker3")
    const greenMarker1 = document.querySelector("#green-marker1")
    const greenMarker2 = document.querySelector("#green-marker2")
    const greenMarker3 = document.querySelector("#green-marker3")
    const blueMarker1 = document.querySelector("#blue-marker1")
    const blueMarker2 = document.querySelector("#blue-marker2")
    const blueMarker3 = document.querySelector("#blue-marker3")
    const markersArray = [redMarker1, redMarker2, redMarker3, greenMarker1, greenMarker2, greenMarker3, blueMarker1, blueMarker2, blueMarker3]
    
    let userStatus = false;
    let userId;

    displayWelcome();

    
    function displayWelcome(){
        clearContainers();
        const infoContainer = document.querySelector("#info-container");
        const h2 = document.createElement('h2')
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')
        const p4 = document.createElement('p')
        const red = document.createElement('p')
        const green = document.createElement('p')
        const blue = document.createElement('p')

        h2.classList.add('welcome-header')
        p1.classList.add('info-text')
        p2.classList.add('info-text')
        p3.classList.add('info-text')
        p4.classList.add('info-text')
        red.classList.add('marker-text')
        green.classList.add('marker-text')
        blue.classList.add('marker-text')

        red.style = "color:#cc0202;"
        green.style = "color:#336733;"
        blue.style = "color:#0a2e52;"

        h2.innerText = `Welcome to Explore Gettysburg!`

        p1.innerText = `The Battle of Gettysburg was a significant Union victory considered by many historians to be the turning point of the Civil War. It was also the bloodiest battle fought on American soil with almost 51,000 casualties. Understanding the many events that led to these outcomes paints a greater picture of how extensive this engagement really was.`

        p2.innerText = `To set the stage, it is the Summer of 1863 and General Robert E. Lee, commander of the Confederate army, has invaded Northern soil in an attempt to force the Union to negotiate peace. On the other side, the recently promoted Union commander General George G. Meade is in hot pursuit of Lee's 70,000 man army with his own 100,000 men. These two armies will track each other until coming head-to-head at the literal crossroads of a small, Pennsylvanian town known as Gettysburg.`

        p3.innerText = `On the map, you will find numerous colored markers that represent significant moments in the battle. Since the battle took place over 3 days, the markers are colored as follows:`

        p4.innerText = `Once you click on a marker, you can learn about the event, explore an alternative history to the event, or leave a comment for further discussion. Have fun learning!`

        red.innerText = `First Day (July 1st, 1863)`
        green.innerText = `Second Day (July 2nd, 1863)`
        blue.innerText = `Third Day (July 3rd, 1863)`

        infoContainer.append(h2)
        infoContainer.append(p1)
        infoContainer.append(p2)
        infoContainer.append(p3)
        infoContainer.append(red)
        infoContainer.append(green)
        infoContainer.append(blue)
        infoContainer.append(p4)

        if (userStatus == true) {
            assignMarkers(markersArray);
        } else {
            assignMarkers(markersArray);
            logInArea();
        }
    
    }

    function assignMarkers(array){
        array.forEach(marker => {
            markerSelect(marker);
        })
    }

    function fetchInformation(marker){
        const numValue = markersArray.indexOf(marker)+1
        const eventUrl = `http://localhost:3000/api/v1/events/${numValue}`
        const scenarioUrl = `http://localhost:3000/api/v1/scenarios/${numValue}`
        const commentUrl = `http://localhost:3000/api/v1/comments/`

        clearContainers();
        fetchEvent(eventUrl);

        if (userStatus == true){
            fetchUserChoices(scenarioUrl,numValue);
            fetchComments(commentUrl, numValue);
        } else {
            fetchLoginReminder()
        }
    }

    function markerSelect(marker){ 
       marker.addEventListener('click', e => {
            e.preventDefault()
            fetchInformation(marker)
        })
    }

    function clearContainers(){
        const infoContainer = document.querySelector("#info-container")
        const scenarioContainer = document.querySelector("#scenario-container")
        const commentContainer = document.querySelector("#comment-container")
        infoContainer.innerHTML = ``
        scenarioContainer.innerHTML =  ``
        commentContainer.innerHTML = ``
    }

    function fetchLoginReminder(){
        const alertContainer = document.querySelector("#scenario-container")
        const h2 = document.createElement('h2')

        h2.innerText = `Please Sign In to Access More Information!`
        
        alertContainer.append(h2)
    }

    function logInArea(){
        const div = document.createElement('div')
        div.classList.add('login')
        div.id = 'login'
        const header = document.querySelector('#header')
        header.append(div)


        const logInContainer = document.querySelector("#login")
        const innerDiv = document.createElement('div')
        innerDiv.classList.add("inner-box")

        logInContainer.append(innerDiv)

        const labelName = document.createElement('label')
        const labelPassword = document.createElement('label')
        const inputName = document.createElement('input')
        const inputPassword = document.createElement('input')
        const h3 = document.createElement('h3')
        const br = document.createElement('br')
        const button = document.createElement('button')

        labelName.classList.add('login-label')
        labelPassword.classList.add('login-label')
        inputName.classList.add("user-name-spot")
        inputName.id = "user-name-spot"
        inputName.type = "text"
        inputPassword.classList.add("password-spot")
        inputPassword.id = "password-spot"
        inputPassword.type = "password"
        h3.classList.add("create-or-enter")
        button.classList.add("log-in-button")
        button.id = "log-in-button"

        h3.innerText = "Create or Enter an Existing Account"
        labelName.innerText = "Username: "
        labelPassword.innerText = "Password: "
        button.innerText = "Log In"

        innerDiv.append(h3)
        innerDiv.append(labelName)
        innerDiv.append(inputName)
        innerDiv.append(br)
        innerDiv.append(br.cloneNode())
        innerDiv.append(labelPassword)
        innerDiv.append(inputPassword)
        innerDiv.append(br.cloneNode())
        innerDiv.append(br.cloneNode())
        innerDiv.append(button)

        button.addEventListener('click', e => {
            e.preventDefault()
            createUser(userId)
            userStatus = true;
        })
    }


});