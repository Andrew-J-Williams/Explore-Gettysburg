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
        content: document.getElementById('comment-box').value,
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

function prepareReply(commentName){
    console.log(`test successful`)

    const replyBox = document.getElementById("comment-box")
    const replyButton = document.getElementById("submit-choice-comment")
    replyBox.innerText = `@${commentName}`
    replyButton.innerText = `Reply`

    replyButton.addEventListener('click', e => {
        e.preventDefault()
    })
}