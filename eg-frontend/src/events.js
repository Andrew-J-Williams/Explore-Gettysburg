    function fetchEvent(markerUrl, eventValue){
        fetch(markerUrl)
        .then(response => response.json())
        .then(data => {
            const infoContainer = document.querySelector("#info-container")

            infoContainer.innerHTML = `
            <h2>${data.name}</h2>
            <div class="total">
            <div class="date-box">
                <h3>Date: </h3>
                <h3><i>${data.date}</i></h3>
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
            </div>
            <img src="https://padresteve.files.wordpress.com/2014/05/z_maritato_ironbrigadeforward1.jpg?w=584" class="event-image">
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
