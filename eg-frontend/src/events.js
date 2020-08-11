    function fetchEvent(markerUrl, eventValue){
        fetch(markerUrl)
        .then(response => response.json())
        .then(data => {
            const infoContainer = document.querySelector("#info-container")

            infoContainer.innerHTML = `
            <h2>${data.name}</h2>
            <h3>${data.date}</h3>
            <h5>Union General: ${data.union_leader} (${data.union_army} men)</h5>
            <h5>Confederate General: ${data.confederate_leader} (${data.confederate_army} men)</h5>
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
