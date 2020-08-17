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

function fetchReplies(eventId, commentId, userId){
    const replyUrl = `http://localhost:3000/api/v1/replies/`
    
    console.log(userId)
    fetch(replyUrl)
        .then(response => response.json())
        .then(data => {
            const userComment = document.getElementsByClassName("user-comment-replies")
            const indComment = document.getElementsByClassName("individual-comment-replies")
            const sCommentId = commentId.toString()
            const countHolder = document.createElement('p')
            countHolder.classList.add("count-holder")
            countHolder.id = commentId

            const userDivs = Array.from(userComment)
            const selectUser = userDivs.find(div => div.id === sCommentId)

            const indDivs = Array.from(indComment)
            const selectInd = indDivs.find(div => div.id === sCommentId)

            const replyList = data.filter(reply => reply.event_id === eventId && reply.comment_id === commentId)
            const lengthList = replyList.length


            if (selectUser && selectInd === undefined){
                console.log(`user reply!`)
                const h4 = document.createElement('h4')
                h4.classList.add("replies-count")
                h4.id = commentId
                const br = document.createElement('br')
                h4.innerText = `Replies (${lengthList})`
                selectUser.append(h4)
                let count = 0;

                h4.addEventListener('click', e => {
                    count += 1;
                    countHolder.innerText = count

                    if (Math.abs(count % 2) == 1){
                        e.preventDefault();
                        getUserReplies();
                        selectInd.append(countHolder)
                    } else {
                        selectUser.innerHTML = ``
                        selectUser.append(h4)
                    }
                })

                function getUserReplies(){
                    replyList.forEach(reply => {
                    const userReply = document.createElement('div')
                    const userReplyUser = document.createElement('div')
                    const h5 = document.createElement('h5')
                    const p = document.createElement('p')
                    userReply.classList.add("user-reply")
                    userReplyUser.classList.add("user-reply-user")
                    console.log(reply)

                    h5.innerText = `${reply.title}`
                    p.innerText = `${reply.content}`
                
                    if (reply.user_id !== userId){
                        userReply.id = reply.id
                        userReply.append(h5)
                        userReply.append(p)

                        selectUser.append(br)
                        selectUser.append(userReply)
                        selectUser.append(br)
                    } else if (reply.user_id === userId && reply.comment_id === commentId){
                        userReplyUser.id = reply.id
                        userReplyUser.append(h5)
                        userReplyUser.append(p)

                        const img = document.createElement('img')
                        img.classList.add('comment-x')
                        img.id = commentId
                        img.src = 'https://i.imgur.com/dbzNiXR.png'
                        userReplyUser.append(img)

                        img.addEventListener('click', e => {
                            e.preventDefault()
                            console.log(reply)
                            deleteReply(reply, e)
                        })

                        selectUser.append(br)
                        selectUser.append(userReplyUser)
                        selectUser.append(br)
                    }
                })
                }
            } else {
                console.log(`another user!`)
                const h4 = document.createElement('h4')
                h4.classList.add("replies-count-ind")
                h4.id = commentId
                const br = document.createElement('br')
                h4.innerText = `Replies (${lengthList})`
                selectInd.append(h4)
                let count = 0;

                h4.addEventListener('click', e => {
                    count += 1;
                    countHolder.innerText = count

                    if (Math.abs(count % 2) == 1){
                        e.preventDefault();
                        getIndReplies();
                        selectInd.append(countHolder)
                    } else {
                        selectInd.innerHTML = ``
                        selectInd.append(h4)
                    }
                })

                function getIndReplies(){
                    console.log(replyList.length - 1)

                    data.forEach(reply => {
                    const indReply = document.createElement('div')
                    const indReplyUser = document.createElement('div')
                    const h5 = document.createElement('h5')
                    const p = document.createElement('p')
                    const br = document.createElement('br')
                    indReply.classList.add("ind-reply")
                    indReplyUser.classList.add("ind-reply-user")
                    console.log(reply)

                    h5.innerText = `${reply.title}`
                    p.innerText = `${reply.content}`
                    
                    if (reply.user_id === userId){
                        indReplyUser.id = reply.id
                        indReplyUser.append(h5)
                        indReplyUser.append(p)

                        const img = document.createElement('img')
                        img.classList.add('comment-x')
                        img.id = commentId
                        img.src = 'https://i.imgur.com/dbzNiXR.png'
                        indReplyUser.append(img)

                        img.addEventListener('click', e => {
                            e.preventDefault()
                            deleteReply(reply, e)
                        })

                        //if (img.click()){
                        //    replyList.innerHTML = `Replies (${replyList.length - 1})`
                        //}

                        selectInd.append(br)
                        selectInd.append(indReplyUser)
                        selectInd.append(br)
                    } else if (reply.user_id !== userId && reply.comment_id === commentId) {
                        indReply.id = reply.id
                        indReply.append(h5)
                        indReply.append(p)

                        selectInd.append(br)
                        selectInd.append(indReply)
                        selectInd.append(br)
                    }
                })
                }
            }


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
        const indComment = document.getElementsByClassName("individual-comment-replies")
        const getButton = document.getElementsByClassName("replies-count-ind")
        const getCount = document.getElementsByClassName("count-holder")
        const sCommentId = commentId.toString()

        const indReplyUser = document.createElement('div')
        const h5 = document.createElement('h5')
        const p = document.createElement('p')
        const br = document.createElement('br')
        indReplyUser.classList.add("ind-reply-user")

        const indDivs = Array.from(indComment)
        const selectInd = indDivs.find(div => div.id === sCommentId)

        const allButtons = Array.from(getButton)
        const selectButton = allButtons.find(h4 => h4.id === sCommentId)

        const collectCounts = Array.from(getCount)
        const selectCount = collectCounts.find(p => p.id === sCommentId)

        console.log(selectButton)
        console.log(selectInd)
        console.log(collectCounts)

        if (selectCount % 2 == 0 || !selectCount){
            selectButton.click();
        }

        h5.innerText = `${newReply.title}`
        p.innerText = `${newReply.content}`

        indReplyUser.id = newReply.id
        indReplyUser.append(h5)
        indReplyUser.append(p)

        let img = document.createElement('img')
        img.classList.add('comment-x')
        img.id = commentId
        img.src = 'https://i.imgur.com/dbzNiXR.png'
        indReplyUser.append(img)

        img.addEventListener('click', e => {
            e.preventDefault()
            console.log(newReply)
            deleteReply(newReply, e)
        })

        selectInd.append(br)
        selectInd.append(indReplyUser)
        selectInd.append(br)
        indReplyUser.scrollIntoView()
    })


}

function deleteReply(reply, event){

    fetch(`http://localhost:3000/api/v1/replies/${reply.id}`, {
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