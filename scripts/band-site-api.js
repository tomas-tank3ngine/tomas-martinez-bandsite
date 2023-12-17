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
        // this.testingVar = 10;
    }
    
    async postComment(comment){
        try{
            const response = await axios.post(this.baseUrl + "/comments");

        } catch(error){
            console.error(error);
        }
    }

    async getComments(){
        // console.log("in comments")
        try{
            const response = await axios.get(this.baseUrl + "/comments");
            console.log(response);
        } catch(error){
            console.error(error);
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