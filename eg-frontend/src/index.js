window.addEventListener('DOMContentLoaded', e => {

    const firstContainer = document.querySelector("#first-container")
    const blueMarker1 = document.querySelector("#blue-marker1")

    displayWelcome();
    blueMarker1.addEventListener('click', testMarker)
    
    
    function displayWelcome(){
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
        firstContainer.innerHTML =`
            <p>THIS IS A TEST</p>
        `
    }

});