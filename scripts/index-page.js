import {api_key, BandSiteApi} from "./band-site-api.js";

const BandSite = new BandSiteApi(api_key);
// console.log("Key is: "+ BandSite.apiKey)
// console.log(await BandSite.getComments());

const comments = [
    // {name: "Connor Walton", timestamp: "02/17/2021", text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."},
    // {name: "Emilie Beach", timestamp: "01/09/2021", text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
    // {name: "Miles Acosta", timestamp: "12/20/2020", text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."}
    // await BandSite.getComments()
];

//Calculates current timestamp when new comment is submitted
// function currentTimestamp(){
//     const date = new Date();

//     const day = date.getDate();
//     console.log(day)
//     const month = date.getMonth() + 1;
//     const year = date.getFullYear();

//     if (day < 10){
//         day = "0" + day.toString();
//         console.log(day);
//     }

//     const currentDate = `${month}/${day}/${year}`;
//     return currentDate;
// }

function convertEpochToReadable(epochTimestamp){
    const date = new Date(epochTimestamp);

    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    //add a zero to the front of each single-digit number
    const currentDate = `${addZero(month)}/${addZero(day)}/${year}`;
    return currentDate;
}

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
    commentEntryNameEl.innerText = commentObj.name;//----------------------------------------------
    
    const commentEntryTimeEl = document.createElement('h3');
    commentEntryTimeEl.classList.add('comment-entry__timestamp');
    commentEntryTimeEl.innerText = convertEpochToReadable(commentObj.timestamp);//----------------------------------------------

    const commentEntryCommentEl = document.createElement('div');
    commentEntryCommentEl.classList.add('comment-entry__comment');

    const commentEntryTextEl = document.createElement('p');
    commentEntryTextEl.classList.add('comment-entry__text');
    commentEntryTextEl.innerText = commentObj.comment;//---------------------------------------------

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
        console.log(apiComments);

        const userComments = apiComments.map(() => 
            console.log()
            
        )

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
        // timestamp: currentTimestampEpoch().toString()
    };

    const jsonComment = JSON.stringify(commentData);
    try {
        await BandSite.postComment(jsonComment);
        renderComments();
        formEl.reset();
    } catch (error) {
        console.log("Error posting comment: ")
    }

}

// const formEl = document.getElementById("new-comment__form");
const formEl = document.querySelector(".new-comment__form");
formEl.addEventListener("submit", handleFormSubmission);

renderComments();