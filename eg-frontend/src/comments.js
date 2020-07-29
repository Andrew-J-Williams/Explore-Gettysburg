function fetchComments(markerUrl, eventId){
    fetch(markerUrl)
        .then(response => response.json())
        .then(data => {
            const commentContainer = document.querySelector("#comment-container")
            const scrollSection = document.createElement('div')
            const newComment = document.createElement('div')
            scrollSection.classList.add("scroll-container")
            scrollSection.id = "scroll-container"
            newComment.classList.add("new-comment-container")
            newComment.id = "new-comment-container"

            commentContainer.append(scrollSection)
            commentContainer.append(newComment)

            scrollSection.innerHTML = `
                <h2> This section will scroll through comments </h2>
            `

            newComment.innerHTML = `
                <h2> This section will create new comments </h2>
            `

        });
}