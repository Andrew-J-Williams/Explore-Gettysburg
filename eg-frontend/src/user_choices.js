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

function fetchUserChoices(){
    const choicesUrl = `http://localhost:3000/api/v1/user_choices/`
    const eventUserId = document.getElementById('hidden-user-id').innerText
    const selectUserId = parseInt(eventUserId, 10)


    fetch(choicesUrl)
    .then(response => response.json())
    .then(data => {
        if (data.find(x => x.user_id === selectUserId)){
            const scenarioContainer = document.querySelector("#scenario-container")
            
            scenarioContainer.innerHTML = `<h1>TESTING</h1>`
        }

    })



}