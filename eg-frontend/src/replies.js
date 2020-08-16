class Reply {
    constructor(data){
        this.title = data.title
        this.content = data.content
        this.comment_name = data.comment_name
        this.event_id = data.event_id
        this.user_id = data.user_id
        this.comment_id = data.comment_id
    }
}

function fetchReplies(getCommentId, getEventId, getUserId){
    const replyUrl = `http://localhost:3000/api/v1/replies/`
    
    
    fetch(replyUrl)
        .then(response => response.json())
        .then(data => {
            const replyList = document.createElement('div')
            const userComment = document.getElementsByClassName("user-comment")

            data.forEach(reply => {
               const eachReply = document.createElement('div')
               const userReply = document.createElement('div')  
                
            })

        })
}

function createReply(commentName, commentId){
    const grabRepliesUrl = `http://localhost:3000/api/v1/replies/`

    console.log(`Test successful for REPLY`)

    const usersName = document.querySelector('#welcome-user').innerText
    const currentEventId = document.getElementById("hidden-event-id").innerText
    const currentUserId = document.getElementById("hidden-user-id").innerText
    const commentTitle = usersName.toString().substr(9)
    const addEventId = parseInt(currentEventId, 10)
    const addUserId = parseInt(currentUserId, 10)


    const reply = {
        title: commentTitle,
        content: document.getElementById('reply-box').value,
        comment_name: commentName,
        event_id: addEventId,
        user_id: addUserId,
        comment_id: commentId
    }

    fetch(grabRepliesUrl, {
        method: "POST",
        body: JSON.stringify(reply),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    })
    .then(resp => resp.json())
    .then(newReply => {
        console.log(newReply)
    })


}

function prepareReply(commentName, commentId){
    console.log(`test successful`)
    clearNewComment();

    const commentContainer = document.getElementById("new-comment-container")

    commentContainer.innerHTML = `
    <textarea rows="6" cols="50" name="reply" id="reply-box" class="reply-box"></textarea>
    `
    const replyBox = document.getElementById("reply-box")
    const extraSpace = document.createElement('p')
    extraSpace.classList.add("info-text")
    replyBox.innerText = `@${commentName}`
    const replyButton = document.createElement('button')
    replyButton.id = "submit-reply-choice"
    replyButton.innerText = `Reply`

    commentContainer.append(replyButton)
    commentContainer.append(extraSpace)

    replyButton.addEventListener('click', e => {
        e.preventDefault();
        createReply(commentName, commentId);
        eraseReplyText();
    })
}

function clearNewComment(){
    const commentContainer = document.getElementById("new-comment-container")
    commentContainer.innerHTML = ``
}

function eraseReplyText(){
    clearNewComment();
    const commentContainer = document.getElementById("new-comment-container")
    const submitButton = document.createElement('button')
    const extraSpace = document.createElement('p')
    extraSpace.classList.add("info-text")
    submitButton.id = "submit-choice-comment"
    submitButton.innerText = `Submit`

    commentContainer.innerHTML = `
    <textarea rows="6" cols="50" name="comment" id="comment-box" class="comment-box" placeholder="Write a comment..."></textarea>
    `
    commentContainer.append(submitButton)
    commentContainer.append(extraSpace)

    const commentSubmit = document.querySelector("#submit-choice-comment")

                commentSubmit.addEventListener('click', e => {
                    e.preventDefault()
                    addComment();
                    eraseText();
                })

}