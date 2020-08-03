class Comment {
    constructor(data){
        this.title = data.title
        this.content = data.content
        this.event_id = data.event_id
        this.user_id = data.user_id
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
            <label><strong>Description:   </strong></label><br/>
            <textarea rows="6" cols="50" name="comment" id="comment-box" class="comment-box"></textarea>
            <input id="submit-comment" class="submit-comment" type="submit" value="Submit">
             `
            commentContainer.append(extraSpace)
            const commentSubmit = document.getElementById('submit-comment')

            commentSubmit.addEventListener('click', e => {
                e.preventDefault()
                addComment(eventId, userId);
            })
        });

        
}

function addComment(getEventId, getUserId){
    const grabCommentUrl = `http://localhost:3000/api/v1/comments/`

    const usersName = document.querySelector('#welcome-user').innerText
    const currentEventId = document.getElementById("hidden-event-id").innerText
    const currentUserId = document.getElementById("hidden-user-id").innerText
    const commentTitle = usersName.toString().substr(9)
    const addEventId = parseInt(currentEventId, 10)
    const addUserId = parseInt(currentUserId, 10)

    console.log(addEventId)
    console.log(addUserId)

    const comment = {
        title: commentTitle,
        content: document.getElementById('comment-box').value,
        event_id: addEventId,
        user_id: addUserId
    }


    fetch(grabCommentUrl, {
        method: "POST",
        body: JSON.stringify(comment),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    })
    .then(resp => resp.json())
    .then(newComment => {
        console.log(newComment)
    })

}
