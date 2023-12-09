
let comments = [
    {name: "test1", timestamp: "time1", text: "text1"},
    {name: "test2", timestamp: "time2", text: "tex2"},
    {name: "test3", timestamp: "time3", text: "text3"}
];

// let commentObj = {
//     name: 'commenter name',
//     timestamp: 'time and date',
//     text: 'comment text'
// }

//todo function for getting current time to put into createComment for timestamp

function createComment(comment){
    //Comment Object Format Template
//<li class="comment-entry">
//  <div class="comment-entry__headshot-container">
//      <div class="comment-entry__headshot-portrait"></div>
//  </div>

//  <div class="comment-entry__container">
//      <div class="comment-entry__info">
//          <h3 class="comment-entry__user-name">Connor Walton</h3>
//          <h3 class="comment-entry__timestamp">02/17/2021</h3>
//      </div>
//
//      <div class="comment-entry__comment">
//          <p class="comment-entry__text"></p>
//      </div>
//  </div>
//</li>

    const commentEl = document.createElement('li');
    commentEl.classList.add('comment-entry');

    const headshotContainerEl = document.createElement('div');
    headshotContainerEl.classList.add('comment-entry__headshot-container');

    const headshotPortraitEl = document.createElement('div');
    headshotPortraitEl.classList.add('comment-entry__headshot-portrait');

    const commentEntryContainerEl = document.createElement('div');
    commentEntryContainerEl.classList.add('comment-entry__container');

    const commentEntryInfoEl = document.createElement('div');
    commentEntryInfoEl.classList.add('comment-entry__info');
    
    const commentEntryNameEl = document.createElement('h3');
    commentEntryNameEl.classList.add('comment-entry__name');
    commentEntryNameEl.innerText = comment.name;
    
    const commentEntryTimeEl = document.createElement('h3');
    commentEntryTimeEl.classList.add('comment-entry__time');
    commentEntryTimeEl.innerText = comment.timestamp;


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

function handleFormSubmit(event){

    event.preventDefault();
    // console.log(event.target.fullName.value);

    //create an object out of the values from event / form
    const commentData = {
        name: event.target.fullName.value,
        timestamp: "2023/12/09",//todo make date automatic
        text: event.target.commentText,
    };

    //put into the comments[] array (at the beginning - reverse, splice, or unshift)

    //Wipe the form
}


const formEl = document.getElementById("new-comment__form");
formEl.addEventListener("submit", handleFormSubmit);
