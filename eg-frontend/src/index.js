window.addEventListener('DOMContentLoaded', e => {

    const mainContainer = document.querySelector("#main")
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
    let eventValue;



    displayWelcome();
    
    function displayWelcome(){
        clearContainers();
        const infoContainer = document.querySelector("#info-container");

        infoContainer.innerHTML = `
        <h2><b><i>Welcome to Explore Gettysburg!</i></b></h2>
        <p class="info-text">
            The Battle of Gettysburg was a significant Union victory considered by many historians to be the turning point of the Civil War.
            It was also the bloodiest battle fought on American soil with almost 51,000 casualties.
            Understanding the many events that led to these outcomes paints a greater picture of how extensive this engagement really was.
        </p>

        <p class="info-text">
            To set the stage, it is the Summer of 1863 and General Robert E. Lee, commander of the Confederate army, has invaded Northern soil in an attempt to force the Union to negotiate peace.
            On the other side, the recently promoted Union commander General George G. Meade is in hot pursuit of Lee's 70,000 man army with his own 100,000 men.
            These two armies will track each other until coming head-to-head at the literal crossroads of a small, Pennsylvanian town known as Gettysburg.
        </p>

        <p class="info-text">
            On the map, you will find numerous colored markers that represent significant moments in the battle.
            Since the battle took place over 3 days, the markers are colored as follows:
        </p>

        <p class="marker-text" style="color:#cc0202;"><b>Red = First Day (July 1st, 1863)</b></p>
        <p class="marker-text" style="color:#336733;"><b>Green = Second Day (July 2nd, 1863)</b></p>
        <p class="marker-text" style="color:#0a2e52;"><b>Blue = Third Day (July 3rd, 1863)</b></p>

        <p class="info-text">
            Once you click on a marker, you can learn about the event, explore an alternative history to the event, or leave a comment for further discussion.
            Have fun learning!
        </p>

    `

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
        eventValue = numValue

        clearContainers();
        fetchEvent(eventUrl, eventValue);
        if (userStatus == true){
            fetchScenario(scenarioUrl);
            fetchComments(commentUrl, numValue, userId);
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
        innerDiv.innerHTML = `
        <br>
        <h3><i>Create or Enter and Existing Account</i></h3>
        <label><b>Username: </b></label>
        <input type="text" id="user-name-spot" class="user-name-spot"/>
        <br><br>
        <label><b>Password: </b></label>
        <input type="text" id="password-spot" class="password-spot"/>
        <br><br>
        <button id="log-in-button" class="log-in-button">Log In</button>
        <br><br>
        `
        const logInButton = document.querySelector('#log-in-button')

        logInButton.addEventListener('click', e => {
            e.preventDefault()
            createUser(userId)
            userStatus = true;
        })
    }


});