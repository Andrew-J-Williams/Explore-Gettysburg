function fetchComments(markerUrl){
    fetch(markerUrl)
        .then(response => response.json())
        .then(data => {
            const commentContainer = document.querySelector("#comment-container")

            commentContainer.innerHTML = `
                <h2>THIS IS WHERE COMMENTS GO</h2>
                <p class="info-text"></p>
            `
        });
}