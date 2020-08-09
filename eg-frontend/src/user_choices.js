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
    const eventUserId = document.getElementById('hidden-user-id').innerText
    const selectUserId = parseInt(eventUserId, 10)


    fetch(choicesUrl)
    .then(response => response.json())
    .then(data => {
        const specificEvent = data.find(x => x.user_id === selectUserId && x.event_id === eventId)
        const userChoiceId = specificEvent.id

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
                scenarioContainer.innerHTML = `
                <p class="hidden-choice-id">${userChoiceId}</p>
                `
                fetchScenario(adjustScenarioUrl, eventId);
            })

        } else {
            fetchScenario(url, eventId)
        }

    })



}

function editUserChoice(choiceId){
    const specificChoiceUrl = `http://localhost:3000/api/v1/user_choices/${choiceId}`

    const choice = {

    }
}