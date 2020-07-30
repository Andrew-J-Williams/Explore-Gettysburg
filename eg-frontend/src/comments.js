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

            data.forEach(comment => {
                let div = document.createElement('div')
                div.classList.add("individual-comment")
                div.id = comment.id

                div.innerHTML = `
                    <h4>${comment.title}</h4>
                    <p>${comment.content}</p>
                `

                scrollSection.append(div)
            })

            //scrollSection.innerHTML = `
            //    <h2> This section will scroll through comments </h2>
            //`

            //newComment.innerHTML = `
            //    <h2> This section will create new comments </h2>
            //`

        });
}

class Comment {
    constructor(title, content, event_id, user_id){
        this.title = title
        this.content = content
        this.event_id = event_id
        this.user_id = user_id
    }
}