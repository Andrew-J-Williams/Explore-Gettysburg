class UserChoice{
    constructor(data){
        this.user_input = data.user_input
        this.user_id = data.user_id
        this.event_id = data.event_id
        this.scenario_id = data.scenario_id
    }
}

function createUserChoice(userAnswer, userId, eventId, scenarioId){
    const choicesUrl = `http://localhost:3000/api/v1/user_choices/`

    const choice = {
       user_input: userAnswer,
       user_id: userId,
       event_id: eventId,
       scenario_id: scenarioId 
    }

    fetch(choicesUrl, {
        method: "POST",
        body: JSON.stringify(choice),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    })
    .then(resp => resp.json())
    .then(newChoice => {
        console.log(newChoice)
    })

}

function fetchUserChoices(url, eventId){
    const choicesUrl = `http://localhost:3000/api/v1/user_choices/`
    const scenarioUrl = `http://localhost:3000/api/v1/scenarios/${eventId}`
    const eventUserId = document.getElementById('hidden-user-id').innerText
    const selectUserId = parseInt(eventUserId, 10)


    fetch(choicesUrl)
    .then(response => response.json())
    .then(data => {
        const specificEvent = data.find(x => x.user_id === selectUserId && x.event_id === eventId)

        if (specificEvent){
            const scenarioContainer = document.querySelector("#scenario-container")
            
            scenarioContainer.innerHTML = `
            <h2>Your Battle Decision Result: </h2>
            <p class="info-text">${specificEvent.user_input}</p>
            <button id="edit-choice" class="edit-choice">Edit Choice</button>
            <p class="info-text"></p>
            `
            console.log(specificEvent)

            const choiceButton = document.getElementById("edit-choice")
            choiceButton.addEventListener('click', e => {
                e.preventDefault();
                const adjustScenarioUrl = `http://localhost:3000/api/v1/scenarios/${eventId}`
                scenarioContainer.innerHTML = ``
                fetchScenario(adjustScenarioUrl, eventId, specificEvent);
            })

            fetch(scenarioUrl)
            .then(response => response.json())
            .then(scenario => {

                const optionOne = scenario.answer_one
                const optionTwo = scenario.answer_two

                console.log(optionOne)
                console.log(optionTwo)

                choiceBreakdown(optionOne, optionTwo)

            })

        } else {
            fetchScenario(url, eventId)
        }

    })



}

function editUserChoice(choiceId, userAnswer){
    const specificChoiceUrl = `http://localhost:3000/api/v1/user_choices/${choiceId}`

    const choice = {
        user_input: userAnswer
    }

    fetch(specificChoiceUrl, {
        method: "PATCH",
        body: JSON.stringify(choice),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    })
    .then(resp => resp.json())
    .then(editChoice => {
        console.log(editChoice)
    })
}

function choiceBreakdown(userChoiceOne, userChoiceTwo){
    const choicesUrl = `http://localhost:3000/api/v1/user_choices/`

    fetch(choicesUrl)
        .then(response => response.json())
        .then(data => {
            const scenarioContainer = document.querySelector("#scenario-container")

            const choiceOne = data.filter(x => x.user_input === userChoiceOne)
            const choiceTwo = data.filter(x => x.user_input === userChoiceTwo)

            console.log(choiceOne)
            console.log(choiceTwo)

            const totalChoices = (choiceOne.length) + (choiceTwo.length)
            const div = document.createElement('div')
            const h3 = document.createElement('h3')
            const p = document.createElement('p')
            const space = document.createElement('p')
            p.classList.add("info-text")
            div.classList.add("choices-box")
            space.classList.add("info-text")
            const choiceOnePer = (choiceOne.length/totalChoices) * 100
            const choiceTwoPer = (choiceTwo.length/totalChoices) * 100

            h3.innerText = `All User Choice Results:`
            p.innerText = `Choice 1: ${choiceOnePer}%   |   Choice 2: ${choiceTwoPer}%`

            div.append(h3)
            div.append(p)

            scenarioContainer.append(div)
            scenarioContainer.append(space)
       
            console.log(totalChoices)
            console.log(choiceOne.length)
            console.log(choiceTwo.length)
            console.log(totalChoices)
        })
}