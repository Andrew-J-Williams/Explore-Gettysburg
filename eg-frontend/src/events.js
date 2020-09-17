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

            total.classList.add("total")
            eventTitle.classList.add("event-title")
            dateBox.classList.add("date-box")
            boxOne.classList.add("box")
            boxTwo.classList.add("box")
            leftSideOne.classList.add("left-side")
            leftSideTwo.classList.add("left-side")
            rightSideOne.classList.add("right-side")
            rightSideTwo.classList.add("right-side")
            img.classList.add("event-image")
            hidden.classList.add("hidden-event-id")
            descriptSection.classList.add("description-section")
            descriptP.classList.add("info-text")
            hidden.id = "hidden-event-id"

            name.innerText = `${data.name}`
            date.innerText = `${data.date}`
            dateP.innerText = `${data.date}`
            dateP.style = "italic"
            unionGeneral.innerText = `Union General: `
            unionGenP.innerText = `${data.union_leader}`
            unionGenP.style = "italic"
            confedGeneral.innerText = `Confederate General: `
            confedGenP.innerText = `${data.confederate_leader}`
            confedGenP.style = "italic"
            unionArmy.innerText = `Union Army: `
            unionArmyP.innerText = `${data.union_army}`
            unionArmyP.style = "italic"
            confedArmy.innerText = `Confederate Army: `
            confedArmyP.innerText = `${data.confederate_army}`
            confedArmyP.style = "italic"
            img.src = `${data.url}`
            descriptP.innerText = `${data.description}`
            hidden.innerText = `${data.id}`

            eventTitle.append(name)

            dateBox.append(date)
            dateBox.append(dateP)

            descriptSection.append(descriptP)

            leftSideOne.append(unionGeneral)
            leftSideOne.append(unionGenP)

            rightSideOne.append(confedGeneral)
            rightSideOne.append(confedGenP)

            leftSideTwo.append(unionArmy)
            leftSideTwo.append(unionArmyP)

            rightSideTwo.append(confedArmy)
            rightSideTwo.append(confedArmyP)

            boxOne.append(leftSideOne)
            boxOne.append(br)
            boxOne.append(br.cloneNode())
            boxOne.append(rightSideOne)

            boxTwo.append(leftSideTwo)
            boxTwo.append(br.cloneNode())
            boxTwo.append(br.cloneNode())
            boxTwo.append(rightSideTwo)

            total.append(eventTitle)
            total.append(br.cloneNode())
            total.append(dateBox)
            total.append(boxOne)
            total.append(boxTwo)
            total.append(br.cloneNode())
            total.append(img)

            infoContainer.append(br.cloneNode())
            infoContainer.append(br.cloneNode())
            infoContainer.append(total)
            infoContainer.append(descriptSection)
            infoContainer.append(hidden)

            });
    }
