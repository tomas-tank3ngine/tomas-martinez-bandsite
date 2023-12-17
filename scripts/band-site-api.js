// import axios from 'axios';
const api_key = "abaf0f0f-c151-4d89-b72a-7e05e264f0e7";
//?api_key=abaf0f0f-c151-4d89-b72a-7e05e264f0e7

// const commentData = {
//     name: event.target.fullName.value,
//     timestamp: currentTimestamp(),
//     text: event.target.commentText.value,
// };

class BandSiteApi{
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseUrl = "https://project-1-api.herokuapp.com/";
    }
    
    async postComment(commentObj){
        //store the api url including key
        const COMMENTS_API_URL = this.baseUrl + "comments?api_key=" + this.apiKey;

        //the content type needs to be a variable like this:
        const headers = {
            "Content-Type": "application/json"
        }

        try{
            await axios.post(COMMENTS_API_URL, commentObj, {headers});

        } catch(error){
            console.error("error posting comment: " + error);
        }
    }

    async getComments(){
        //store the api url including key
        const COMMENTS_API_URL = this.baseUrl + "comments?api_key=" + this.apiKey;

        try{
            const commentsResponse = await axios.get(COMMENTS_API_URL);
            const commentsData = commentsResponse.data;

            //Sort the comments from newest to oldest
            commentsData.sort(function(a, b) {
                return b.timestamp - a.timestamp;
            })

            return commentsData;
        } catch(error){
            console.error("error getting comments: " + error);
        }
    }

    async getShows(){
        try{
            const response = await axios.get(this.baseUrl + "/showdates");

        } catch(error){
            console.error(error);
        }
    }
}

export {api_key, BandSiteApi};