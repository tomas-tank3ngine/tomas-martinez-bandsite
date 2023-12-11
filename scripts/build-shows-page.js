shows = [
    {date: "Mon Sept 06 2021", venue: "Ronald Lane", location: "San Francisco, CA"},
    {date: "Tue Sept 21 2021", venue: "Pier 3 East", location: "San Francisco, CA"},
    {date: "Fri Oct 15 2021", venue: "View Lounge", location: "San Francisco, CA"},
    {date: "Sat Nov 06 2021", venue: "Hyatt Agency", location: "San Francisco, CA"},
    {date: "Fri Nov 26 2021", venue: "Moscow Center", location: "San Francisco, CA"},
    {date: "Wed Dec 15 2021", venue: "Press Club", location: "San Francisco, CA"}
]

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

    shows.forEach(show => {
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
        dateTextEl.innerText = show.date;
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
        venueTextEl.innerText = show.venue;
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

        const breakEl = document.createElement("li");
        breakEl.classList.add("show-break");
        shows__containerEl.appendChild(breakEl);

    });
}

createShowsSection();