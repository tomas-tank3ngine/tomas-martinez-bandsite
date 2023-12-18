import {api_key, BandSiteApi} from "./band-site-api.js";

const BandSite = new BandSiteApi(api_key);

function convertEpochToReadable(epochTimestamp){
    const date = new Date(epochTimestamp);

    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    const currentDate = `${addZero(month)}/${addZero(day)}/${year}`;
    return currentDate;
}

//Function for adding a zero to the front of each single-digit number
function addZero(num){
    if (num < 10){
        num = "0" + num.toString();
        return num;
    }
    else{
        return num;
    }
}

function currentTimestampEpoch(){
    var currentDate = new Date();

    // Get the timestamp in milliseconds
    var timestamp = currentDate.getTime();

    return timestamp;
}

function createComment(commentObj){
    const commentEl = document.createElement('li');
    commentEl.classList.add('comment-entry');

    const headshotContainerEl = document.createElement('div');
    headshotContainerEl.classList.add('comment-entry__headshot-container');

    const headshotPortraitEl = document.createElement('div');
    headshotPortraitEl.classList.add('comment-entry__headshot-portrait');

    const commentEntryContainerEl = document.createElement('div');
    commentEntryContainerEl.classList.add('comment-entry__comment-container');

    const commentEntryInfoEl = document.createElement('div');
    commentEntryInfoEl.classList.add('comment-entry__info');
    
    const commentEntryNameEl = document.createElement('h3');
    commentEntryNameEl.classList.add('comment-entry__name');
    commentEntryNameEl.innerText = commentObj.name;
    
    const commentEntryTimeEl = document.createElement('h3');
    commentEntryTimeEl.classList.add('comment-entry__timestamp');
    commentEntryTimeEl.innerText = convertEpochToReadable(commentObj.timestamp);

    const commentEntryCommentEl = document.createElement('div');
    commentEntryCommentEl.classList.add('comment-entry__comment');

    const commentEntryTextEl = document.createElement('p');
    commentEntryTextEl.classList.add('comment-entry__text');
    commentEntryTextEl.innerText = commentObj.comment;

    commentEl.appendChild(headshotContainerEl);
    commentEl.appendChild(commentEntryContainerEl);

    headshotContainerEl.appendChild(headshotPortraitEl);

    commentEntryContainerEl.appendChild(commentEntryInfoEl);
    commentEntryContainerEl.appendChild(commentEntryCommentEl);


    commentEntryInfoEl.appendChild(commentEntryNameEl);
    commentEntryInfoEl.appendChild(commentEntryTimeEl);

    commentEntryCommentEl.appendChild(commentEntryTextEl);
    
    return commentEl;
}

//asynch function that renders comments on the page
async function renderComments() {
    const commentsContainerEl = document.querySelector(".comment-entry__container")
    commentsContainerEl.innerHTML = "";

    try {
        //wait for the Api to return the array of comments
        const apiComments = await BandSite.getComments();

        //iterate through comments array retrieved from API
        apiComments.forEach(commentObj => {
        const newComment = createComment(commentObj);
        commentsContainerEl.appendChild(newComment);
    });
    } catch (error) {
        
    }
    
}

async function handleFormSubmission(event){
    event.preventDefault();

    //create an object using the values from event (submitting the form)
    const commentData = {
        name: event.target.fullName.value,
        comment: event.target.commentText.value
    };

    try {
        await BandSite.postComment(commentData);
        renderComments();
        formEl.reset();
    } catch (error) {
        console.log("Error posting comment: ")
    }

}

const formEl = document.querySelector(".new-comment__form");
formEl.addEventListener("submit", handleFormSubmission);

renderComments();