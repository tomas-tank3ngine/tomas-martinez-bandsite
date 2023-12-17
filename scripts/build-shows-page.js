import {api_key, BandSiteApi} from "./band-site-api.js";

const BandSite = new BandSiteApi(api_key);

const showsArray = await BandSite.getShows();
console.log(showsArray)

function convertEpochToWords(epochDate){
    const date = new Date(epochDate);

    let dayWord = date.getDay();
    let dayNum = date.getDate();

    switch (dayWord) {
        case 1:
            dayWord = "Mon"
            break;
    
        case 2:
            dayWord = "Tue"
            break;
    
        case 3:
            dayWord = "Wed"
            break;
    
        case 4:
            dayWord = "Thur"
            break;
    
        case 5:
            dayWord = "Fri"
            break;
    
        case 6:
            dayWord = "Sat"
            break;
    
        case 7:
            dayWord = "Sun"
            break;
    
        default:
            break;
    }

    let month = date.getMonth() + 1;
    switch (month) {
        case 1:
            month = "Jan"
            break;
    
        case 2:
            month = "Feb"
            break;
    
        case 3:
            month = "Mar"
            break;
    
        case 4:
            month = "Apr"
            break;
    
        case 5:
            month = "May"
            break;
    
        case 6:
            month = "Jun"
            break;
    
        case 7:
            month = "Jul"
            break;
    
        case 8:
            month = "Aug"
            break;
    
        case 9:
            month = "Sep"
            break;
    
        case 10:
            month = "Oct"
            break;
    
        case 11:
            month = "Nov"
            break;
    
        case 12:
            month = "Dec"
            break;
    
        default:
            break;
    }

    const year = date.getFullYear();

    //add a zero to the front of each single-digit number
    // const currentDate = `${addZero(month)}/${addZero(day)}/${year}`;
    const currentDate = `${dayWord} ${month} ${addZero(dayNum)} ${year}`;
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

function createShowsSection() {
    const mainEl = document.createElement("main");
    mainEl.classList.add("main");
    document.body.insertBefore(mainEl, document.querySelector("footer"));
    
    const showsEl = document.createElement("section");
    showsEl.classList.add("shows-table");
    mainEl.appendChild(showsEl);
    
    const shows__titleEl = document.createElement("h2");
    shows__titleEl.classList.add("shows-table__title");
    shows__titleEl.innerText = "Shows";
    showsEl.appendChild(shows__titleEl);

    const shows__containerEl = document.createElement("ul");
    shows__containerEl.classList.add("shows-table__container");
    showsEl.appendChild(shows__containerEl);

    //HEADERS LI
    const table__headersEl = document.createElement("li");
    table__headersEl.classList.add("shows-table__headers");
    shows__containerEl.appendChild(table__headersEl);
    
    const headerDateEl = document.createElement("p");
    headerDateEl.classList.add("shows-table__header");
    headerDateEl.innerText = "date";
    table__headersEl.appendChild(headerDateEl);
    
    const headerVenueEl = document.createElement("p");
    headerVenueEl.classList.add("shows-table__header");
    headerVenueEl.innerText = "venue";
    table__headersEl.appendChild(headerVenueEl);

    const headerLocationEl = document.createElement("p");
    headerLocationEl.classList.add("shows-table__header");
    headerLocationEl.innerText = "location";
    table__headersEl.appendChild(headerLocationEl);

    const headerEmptyEl = document.createElement("p");
    headerEmptyEl.classList.add("shows-table__header");
    headerEmptyEl.innerText = "";
    table__headersEl.appendChild(headerEmptyEl);

    showsArray.forEach(show => {
        //create the list item element and child it to the end of the container
        const showItemEl = document.createElement("li");
        showItemEl.classList.add("show-item");
        showItemEl.tabIndex = 0;
        shows__containerEl.appendChild(showItemEl);

        //Date Item
        //Create Date list item
        const dateInfoEl = document.createElement("div");
        dateInfoEl.classList.add("show-item__info");
        showItemEl.appendChild(dateInfoEl);

        //Date Header
        const dateHeaderEl = document.createElement("p");
        dateHeaderEl.classList.add("show-item__info-header");
        dateHeaderEl.innerText = "Date";
        dateInfoEl.appendChild(dateHeaderEl);

        //Date Text
        const dateTextEl = document.createElement("p");
        dateTextEl.classList.add("show-item__info-text");
        dateTextEl.innerText = convertEpochToWords(show.date);
        dateInfoEl.appendChild(dateTextEl);
        

        //Venue
        //Create Venue list item
        const venueInfoEl = document.createElement("div");
        venueInfoEl.classList.add("show-item__info");
        showItemEl.appendChild(venueInfoEl);

        //Venue Header
        const venueHeaderEl = document.createElement("p");
        venueHeaderEl.classList.add("show-item__info-header");
        venueHeaderEl.innerText = "Venue";
        venueInfoEl.appendChild(venueHeaderEl);

        //Venue Text
        const venueTextEl = document.createElement("p");
        venueTextEl.classList.add("show-item__info-text");
        venueTextEl.innerText = show.place;
        venueInfoEl.appendChild(venueTextEl);

        
        //Location
        //Create Location list item
        const locationInfoEl = document.createElement("div");
        locationInfoEl.classList.add("show-item__info");
        showItemEl.appendChild(locationInfoEl);
        //Location Header
        const locationHeaderEl = document.createElement("p");
        locationHeaderEl.classList.add("show-item__info-header");
        locationHeaderEl.innerText = "Location";
        locationInfoEl.appendChild(locationHeaderEl);

        const locationTextEl = document.createElement("p");
        locationTextEl.classList.add("show-item__info-text");
        locationTextEl.innerText = show.location;
        locationInfoEl.appendChild(locationTextEl);
        
        //Button
        const buttonHolderEl = document.createElement("div");
        buttonHolderEl.classList.add("show-item__info");
        showItemEl.appendChild(buttonHolderEl);

        const buttonEl = document.createElement("button");
        buttonEl.classList.add("button");
        buttonEl.innerText = "Buy Tickets";
        buttonEl.type = "submit";
        buttonHolderEl.appendChild(buttonEl);
    });
}

createShowsSection();