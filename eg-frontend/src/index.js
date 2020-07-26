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

    displayWelcome();
    blueMarker1.addEventListener('click', testMarker)
    
    
    function displayWelcome(){
        const containerDiv = document.createElement('div')
        mainContainer.append(containerDiv)
        containerDiv.classList.add("info-container")
        containerDiv.id = "info-container"
        const firstContainer = document.querySelector("#info-container")

        firstContainer.innerHTML = `
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
    }

    function testMarker(){
        fetchTest();
    }

    function fetchTest(){
        fetch('http://localhost:3000/api/v1/events/1')
        .then(response => response.json())
        .then(data => firstContainer.innerHTML = `
            <h2>${data.name}</h2>
            <h3>${data.date}</h3>
            <p>${data.description}</p>
            
        `);
    }

    function markerSelect(){

    }

});