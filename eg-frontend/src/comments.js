class Comment {
    constructor(data){
        this.title = data.title
        this.content = data.content
        this.event_id = data.event_id
        this.user_id = data.user_id
    }
}

function fetchComments(markerUrl, eventId, userId){
    fetch(markerUrl)
        .then(response => response.json())
        .then(data => {
            const commentContainer = document.querySelector("#comment-container")
            const scrollSection = document.createElement('div')
            const newComment = document.createElement('div')
            const extraSpace = document.createElement('p')
            const h3 = document.createElement('h3')
            h3.classList.add("comment-h3")
            const commentHeader = document.createElement('div')
            scrollSection.classList.add("scroll-container")
            scrollSection.id = "scroll-container"
            newComment.classList.add("new-comment-container")
            newComment.id = "new-comment-container"
            extraSpace.classList.add("info-text")
            const currentUserId = document.getElementById("hidden-user-id").innerText
            const addUserId = parseInt(currentUserId, 10)
            h3.innerText = `Join the Discussion!`
            commentHeader.classList.add("comment-header")

            commentHeader.append(h3)
            commentContainer.append(commentHeader)
            commentContainer.append(scrollSection)
            commentContainer.append(newComment)

            data.forEach(comment => {
                let div = document.createElement('div')
                let divUser = document.createElement('div')
                let br = document.createElement('br')
                div.classList.add("individual-comment")
                divUser.classList.add("user-comment")
                let commentId = comment.id
                div.id = commentId
                divUser.id = commentId


                if (comment.event_id === eventId && addUserId === comment.user_id){
                    divUser.innerHTML = `
                        <h4 class="comment-title">${comment.title}</h4>
                        <p>${comment.content}</p>
                    `
                    let img = document.createElement('img')
                    img.classList.add('comment-x')
                    img.id = commentId
                    img.src = 'https://i.imgur.com/dbzNiXR.png'
                    divUser.append(img)

                    img.addEventListener('click', e => {
                        e.preventDefault()
                        console.log(comment)
                        deleteComment(comment, e)
                    })
                    
                    
                    scrollSection.append(br)
                    scrollSection.append(divUser)
                    scrollSection.append(br)
                } else if (comment.event_id === eventId && addUserId != comment.user_id){
                    div.innerHTML = `
                        <h4 class="comment-title">${comment.title}</h4>
                        <p>${comment.content}</p>
                    `

                    scrollSection.append(br)
                    scrollSection.append(div)
                    scrollSection.append(br)
                } else {
                    scrollSection.innerHTML = `
                        <h2>No Comments Yet!</h2>
                    `
                }
            })

            newComment.innerHTML = `
            <textarea rows="6" cols="50" name="comment" id="comment-box" class="comment-box"></textarea>
            <button id="submit-choice-comment">Submit</button>
             `
            commentContainer.append(extraSpace)
            const commentSubmit = document.querySelector("#submit-choice-comment")

            commentSubmit.addEventListener('click', e => {
                e.preventDefault()
                addComment();
            })

        });

        
}

function addComment(){
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

        let div = document.createElement('div')
        let br = document.createElement('br')
        let scrollContainer = document.getElementById('scroll-container')
        div.classList.add("user-comment")
        div.id = newComment.id

        div.innerHTML = `
            <h4 class="comment-title">${newComment.title}</h4>
            <p>${newComment.content}</p>
        `
        let img = document.createElement('img')
        img.classList.add('comment-x')
        img.id = 'comment-x'
        img.src = 'https://i.imgur.com/dbzNiXR.png'
        div.append(img)

        scrollContainer.append(div)
        scrollContainer.append(br)
        div.scrollIntoView()
    })

}

function deleteComment(comment, event){
    
    fetch(`http://localhost:3000/api/v1/comments/${comment.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    })
    .then(resp => resp.json())
    .then(data => {
        event.target.parentElement.remove()
    })
}