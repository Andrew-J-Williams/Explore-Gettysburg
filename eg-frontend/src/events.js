    function fetchEvent(markerUrl, eventValue){
        fetch(markerUrl)
        .then(response => response.json())
        .then(data => {
            const infoContainer = document.querySelector("#info-container")
            const br = document.createElement('br')
            const name = document.createElement('h2')
            const date = document.createElement('h3')
            const total = document.createElement('div')
            const eventTitle = document.createElement('div')
            const dateBox = document.createElement('div')
            const dateP = document.createElement('p')
            const boxOne = document.createElement('div')
            const boxTwo = document.createElement('div')
            const leftSideOne = document.createElement('div')
            const leftSideTwo = document.createElement('div')
            const rightSideOne = document.createElement('div')
            const rightSideTwo = document.createElement('div')
            const unionGeneral = document.createElement('h4')
            const confedGeneral = document.createElement('h4')
            const unionGenP = document.createElement('p')
            const confedGenP = document.createElement('p')
            const unionArmy = document.createElement('h4')
            const confedArmy = document.createElement('h4')
            const unionArmyP = document.createElement('p')
            const confedArmyP = document.createElement('p')
            const img = document.createElement('img')
            const descriptSection = document.createElement('div')
            const descriptP = document.createElement('p')
            const hidden = document.createElement('p')

            //infoContainer.innerHTML = `
            //<br>
            //<br>
            //<div class="total">
            //<div class="event-title"> 
            //    <h2>${data.name}</h2>
            //</div>
            //<br>
            //<div class="date-box">
            //    <h3>Date: </h3>
            //    <p><i>${data.date}</i></p>
            //</div>
           //<div class="box">
           //     <div class="left-side">
           //         <h4>Union General: </h4>
           //         <p><i>${data.union_leader}</i></p>
           //     </div>
           //     <br><br>
           //     <div class="right-side">
           //         <h4>Confederate General: </h4>
           //         <p><i>${data.confederate_leader}</i></p>
           //     </div>
           // </div>
           // <div class="box">
           //     <div class="left-side">
           //         <h4>Union Army: </h4>
           //         <p><i>${data.union_army}</i></p>
           //     </div>
           //     <div class="right-side">
           //        <h4>Confederate Army: </h4>
           //         <p><i>${data.confederate_army}</i></p>
           //     </div>
           // </div>
           // <br>
           // <img src=${data.url} class="event-image">
           // </div>
           // <div class="description-section">
           //     <p class="info-text">${data.description}</p>
           // </div>
           // <p id="hidden-event-id" class="hidden-event-id">${data.id}</p>
           // `
            });
    }
