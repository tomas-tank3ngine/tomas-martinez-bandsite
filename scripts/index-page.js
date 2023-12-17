import {api_key, BandSiteApi} from "./band-site-api.js";

const tester = new BandSiteApi(api_key);
console.log("Key is: "+ tester.apiKey)

const comments = [
    {name: "Connor Walton", timestamp: "02/17/2021", text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."},
    {name: "Emilie Beach", timestamp: "01/09/2021", text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
    {name: "Miles Acosta", timestamp: "12/20/2020", text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."}
];

function currentTimestamp(){
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const currentDate = `${month}/${day}/${year}`;
    return currentDate;
}

function createComment(comment){
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
    commentEntryNameEl.innerText = comment.name;//----------------------------------------------
    
    const commentEntryTimeEl = document.createElement('h3');
    commentEntryTimeEl.classList.add('comment-entry__timestamp');
    commentEntryTimeEl.innerText = comment.timestamp;//----------------------------------------------

    const commentEntryCommentEl = document.createElement('div');
    commentEntryCommentEl.classList.add('comment-entry__comment');

    const commentEntryTextEl = document.createElement('p');
    commentEntryTextEl.classList.add('comment-entry__text');
    commentEntryTextEl.innerText = comment.text;

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

function renderComments() {
    const commentsContainerEl = document.querySelector(".comment-entry__container")
    commentsContainerEl.innerHTML ="";
    comments.forEach(commentObj => {
        const newComment = createComment(commentObj);
        commentsContainerEl.appendChild(newComment);
    });
}

function handleFormSubmit(event){

    event.preventDefault();

    //create an object using the values from event (submitting the form)
    const commentData = {
        name: event.target.fullName.value,
        timestamp: currentTimestamp(),
        text: event.target.commentText.value,
    };

    //add new comment to beginning of existing comments array
    comments.unshift(commentData);
    
    renderComments();

    formEl.reset();

}

// const formEl = document.getElementById("new-comment__form");
const formEl = document.querySelector(".new-comment__form");
formEl.addEventListener("submit", handleFormSubmit);
