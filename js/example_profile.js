var Profile = require("../js/profile.js"); //make sure this still works


var studentProfile = new Profile("chalkers");

/**
* When the JSON body is fully recieved the
* the "end" event is triggered and the full body
* is given to the handler or callback
**/
studentProfile.on("end", console.dir);

/**
* If a parsing, network or HTTP error occurs an
* error object is passed in to the handler or callback
**/
studentProfile.on("error", console.error);
