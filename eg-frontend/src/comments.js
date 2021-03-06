class Comment {
    constructor(data){
        this.id = data.id,
        this.title = data.title,
        this.content = data.content,
        this.event_id = data.event_id,
        this.user_id = data.user_id
    }
    
    renderCommentContent() {
       return `
            <h4 class="comment-title">${this.title}</h4>
            <p>${this.content}</p>
        `
    }

    renderTitle(){
        return `${this.title}`
    }

    renderContent(){
        return `${this.content}`
    }
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
            const newUserComment = new Comment(newComment)
            console.log(newUserComment)
    
            let div = document.createElement('div')
            let br = document.createElement('br')
            let scrollContainer = document.getElementById('scroll-container')
            div.classList.add("user-comment")
            div.id = newUserComment.id
    
            div.innerHTML = newUserComment.renderCommentContent()

            let img = document.createElement('img')
            img.classList.add('comment-x')
            img.id = 'comment-x'
            img.src = 'https://i.imgur.com/dbzNiXR.png'
            div.append(img)
    
            img.addEventListener('click', e => {
                e.preventDefault()
                console.log(newUserComment)
                deleteComment(newUserComment, e)
            })
    
            const addReplies = document.createElement('div')
            addReplies.classList.add("user-comment-replies")
            addReplies.id = newUserComment.id
    
            const h4 = document.createElement('h4')
            h4.classList.add("replies-count")
            h4.id = newUserComment.id
            h4.innerText = `Replies (0)`
            addReplies.append(h4)
    
            scrollContainer.append(div)
            scrollContainer.append(addReplies)
            scrollContainer.append(br)
            div.scrollIntoView()
        })
}


function fetchComments(markerUrl, eventId){
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
                const newUserComment = new Comment(comment)

                let div = document.createElement('div')
                let divUser = document.createElement('div')
                let br = document.createElement('br')
                let h4 = document.createElement('h4')
                let p = document.createElement('p')
                div.classList.add("individual-comment")
                h4.classList.add("comment-title")
                divUser.classList.add("user-comment")
                let commentId = newUserComment.id
                div.id = commentId
                divUser.id = commentId


                if (newUserComment.event_id === eventId && addUserId === newUserComment.user_id){
    
                    h4.innerText = newUserComment.renderTitle()
                    p.innerText = newUserComment.renderContent()

                    divUser.append(h4)
                    divUser.append(p)

                    let img = document.createElement('img')
                    img.classList.add('comment-x')
                    img.id = commentId
                    img.src = 'https://i.imgur.com/dbzNiXR.png'
                    divUser.append(img)

                    img.addEventListener('click', e => {
                        e.preventDefault()
                        console.log(newUserComment)
                        deleteComment(newUserComment, e)
                    })

                    const userReplies = document.createElement('div')
                    userReplies.classList.add("user-comment-replies")
                    userReplies.id = newUserComment.id

                    scrollSection.append(br)
                    scrollSection.append(divUser)
                    scrollSection.append(br)
                    scrollSection.append(userReplies)
                    fetchReplies(eventId, newUserComment.id, addUserId)
                } else if (newUserComment.event_id === eventId && addUserId != newUserComment.user_id){
                    h4.innerText = newUserComment.renderTitle()
                    p.innerText = newUserComment.renderContent()

                    div.append(h4)
                    div.append(p)

                    let btn = document.createElement('button')
                    btn.classList.add("reply-button")
                    btn.id = newUserComment.id
                    btn.innerText = `Reply`
                    div.append(btn)

                    btn.addEventListener('click', e => {
                        e.preventDefault();
                        prepareReply(newUserComment.title, newUserComment.id);
                    })

                    const commentReplies = document.createElement('div')
                    commentReplies.classList.add("individual-comment-replies")
                    commentReplies.id = newUserComment.id
                    
                    scrollSection.append(br)
                    scrollSection.append(div)
                    scrollSection.append(br)
                    scrollSection.append(commentReplies)
                    fetchReplies(eventId, newUserComment.id, addUserId);
                }
            })

            const submitButton = document.createElement('button')
            submitButton.id = "submit-choice-comment"
            submitButton.innerText = `Submit`

            newComment.innerHTML = `
            <textarea rows="6" cols="50" name="comment" id="comment-box" class="comment-box" placeholder="Write a comment..."></textarea>
             `
            newComment.append(submitButton) 

            commentContainer.append(extraSpace)
            const commentSubmit = document.querySelector("#submit-choice-comment")

                commentSubmit.addEventListener('click', e => {
                    e.preventDefault()
                    addComment();
                    eraseText();
                })

        });

        
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

        const commentId = comment.id
        const convertId = commentId.toString()
        const commentsList = Array.from(document.getElementsByClassName("user-comment-replies"))
        const userRepliesList = commentsList.find(reply => reply.id === convertId)

        userRepliesList.innerHTML = ''

    })
}

function eraseText() {
    document.getElementById("comment-box").value = "";
}