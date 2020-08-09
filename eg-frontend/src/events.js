    function fetchEvent(markerUrl, eventValue){
        fetch(markerUrl)
        .then(response => response.json())
        .then(data => {
            const infoContainer = document.querySelector("#info-container")
            eventValue = data.id

            infoContainer.innerHTML = `
            <h2>${data.name}</h2>
            <h3>${data.date}</h3>
            <p class="info-text">${data.description}</p>
            <p id="hidden-event-id" class="hidden-event-id">${data.id}</p>

            `
            let myTest = document.getElementById('hidden-event-id').innerText
            console.log(myTest)
            console.log(eventValue)
            console.log(data.id)
            console.log(data.name)
            });
    }
