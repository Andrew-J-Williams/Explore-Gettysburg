    function fetchEvent(markerUrl, eventValue){
        fetch(markerUrl)
        .then(response => response.json())
        .then(data => {
            const infoContainer = document.querySelector("#info-container")
            const picture = data.url
            console.log(picture)

            infoContainer.innerHTML = `
            <br>
            <br>
            <div class="total">
            <div class="event-title">
                <h2>${data.name}</h2>
            </div>
            <br>
            <div class="date-box">
                <h3>Date: </h3>
                <p><i>${data.date}</i></p>
            </div>
            <div class="box">
                <div class="left-side">
                    <h4>Union General: </h4>
                    <p><i>${data.union_leader}</i></p>
                </div>
                <br><br>
                <div class="right-side">
                    <h4>Confederate General: </h4>
                    <p><i>${data.confederate_leader}</i></p>
                </div>
            </div>
            <div class="box">
                <div class="left-side">
                    <h4>Union Army: </h4>
                    <p><i>${data.union_army}</i></p>
                </div>
                <div class="right-side">
                    <h4>Confederate Army: </h4>
                    <p><i>${data.confederate_army}</i></p>
                </div>
            </div>
            <br>
            <img src=${data.url} class="event-image">
            </div>
            <div class="description-section">
            <p class="info-text">${data.description}</p>
            </div>
            <p id="hidden-event-id" class="hidden-event-id">${data.id}</p>
            `
            let myTest = document.getElementById('hidden-event-id').innerText
            console.log(myTest)
            console.log(eventValue)
            console.log(data.id)
            console.log(data.name)
            });
    }
