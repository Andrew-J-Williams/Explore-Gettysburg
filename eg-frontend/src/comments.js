class Comment {
    constructor(title, content, event_id, user_id){
        this.title = title
        this.content = content
        this.event_id = event_id
        this.user_id = user_id
    }
}

function fetchComments(markerUrl, eventId, userStatus, userId){
    fetch(markerUrl)
        .then(response => response.json())
        .then(data => {
            const commentContainer = document.querySelector("#comment-container")
            const scrollSection = document.createElement('div')
            const newComment = document.createElement('div')
            const extraSpace = document.createElement('p')
            scrollSection.classList.add("scroll-container")
            scrollSection.id = "scroll-container"
            newComment.classList.add("new-comment-container")
            newComment.id = "new-comment-container"
            extraSpace.classList.add("info-text")


            commentContainer.append(scrollSection)
            commentContainer.append(newComment)

            data.forEach(comment => {
                let div = document.createElement('div')
                div.classList.add("individual-comment")
                div.id = comment.id

                if (comment.event_id === eventId){
                    div.innerHTML = `
                        <h4>${comment.title}</h4>
                        <p>${comment.content}</p>
                    `

                scrollSection.append(div)
                } else {
                    scrollSection.innerHTML = `
                        <h2>No Comments Yet!</h2>
                    `
                }
            })

            newComment.innerHTML = `
            <input type="hidden" id="title"><br/>
            <input type="hidden" id="event-id">
            <input type="hidden" id="user-id">
            <label><strong>Description:   </strong></label><br/>
            <textarea rows="6" cols="50" name="comment"></textarea>
            <input type="submit" value="Submit">
             `
            commentContainer.append(extraSpace)
        });
}
