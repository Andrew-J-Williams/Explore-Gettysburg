function fetchScenario(markerUrl, eventId, userChoice){
    fetch(markerUrl)
    .then(response => response.json())
    .then(data => {
        const scenarioContainer = document.querySelector("#scenario-container")
        const scenarioId = data.id
        const scenario_desc = data.description
        const option_one = data.option_one
        const option_two = data.option_two
        const answer_one = data.answer_one
        const answer_two = data.answer_two
        const grabUserId = document.getElementById('hidden-user-id').innerText
        const grabEventId = eventId
        const returnUserId = parseInt(grabUserId, 10)
        const returnEventId = parseInt(grabEventId, 10)

        scenarioContainer.innerHTML = `
        <h2>You Make the Call!</h2>

        <img src="${data.url}" class="your-choice">

        <p class="description">${data.description}</p>
        <fieldset class="battle-choice">
            <legend><b> Battle Decision </b></legend>
            <div><label for="radio1"><input type="radio" name="rad" value="1" id="radio1">${option_one}</label></div>
            <div><label for="radio2"><input type="radio" name="rad" value="2" id="radio2">${option_two}</label></div>
            <br>
            <button id="submit-choice">Submit</button>
        </fieldset>
        <p class="info-text"></p>
        `
        const submitButton = document.querySelector("#submit-choice")
        submitButton.addEventListener('click', e => {

            if (document.getElementById('radio1').checked){
                scenarioContainer.innerHTML = `
                    <h2>Your Battle Decision Result: </h2>
                    <p id="answer-one" class="info-text">${answer_one}</p>
                `
                choiceBreakdown(answer_one, answer_two)
                if (userChoice && userChoice.user_id === returnUserId && userChoice.event_id === returnEventId){
                    editUserChoice(userChoice.id, answer_one);
                } else {
                    createUserChoice(answer_one, returnUserId, returnEventId, scenarioId);
                }

            } else if (document.getElementById('radio2').checked){

                scenarioContainer.innerHTML = `
                <h2>Your Battle Decision Result: </h2>
                <p id="answer-two" class="info-text">${answer_two}</p>
            `
                choiceBreakdown(answer_one, answer_two)
                if (userChoice && userChoice.user_id === returnUserId && userChoice.event_id === returnEventId){
                    editUserChoice(userChoice.id, answer_two);
                } else {
                    createUserChoice(answer_two, returnUserId, returnEventId, scenarioId);
                }
            }
        })
    });
}