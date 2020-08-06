function fetchScenario(markerUrl){
    fetch(markerUrl)
    .then(response => response.json())
    .then(data => {
        const scenarioContainer = document.querySelector("#scenario-container")

        scenarioContainer.innerHTML = `
        <h2>${data.description}</h2>
        <fieldset>
            <legend><b> Battle Decision </b></legend>
            <div><label for="radio1"><input type="radio" name="rad" value="1" id="radio1">${data.option_one}</label></div>
            <div><label for="radio2"><input type="radio" name="rad" value="2" id="radio2">${data.option_two}</label></div>
            <br>
            <button id="submit-choice">Submit</button>
        </fieldset>
        <p class="info-text"></p>
        `
        const submitButton = document.querySelector("#submit-choice")
        submitButton.addEventListener('click', e => {
            
            if (document.getElementById('radio1').checked){
                scenarioContainer.innerHTML = `
                    <h2>${data.description}</h2>
                    <p class="info-text">${data.answer_one}</p>
                `
            } else if (document.getElementById('radio2').checked){

                scenarioContainer.innerHTML = `
                <h2>${data.description}</h2>
                <p class="info-text">${data.answer_two}</p>
            `

            }
        })
    });
}