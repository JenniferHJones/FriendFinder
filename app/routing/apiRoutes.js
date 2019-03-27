// Link routes to data source
var friends = require("../data/friends");

// ============== Routes ==============
module.exports = function(app) {

    // API GET request
    app.get("/api/friends", function(req,res) {
        res.json(friends);
    });

    // API POST Request - add compatability function here
    app.post("/api/friends", function(req, res) {    
        console.log("post=",req.body);
        var entry = req.body;
        
        friends.push(req.body);
        res.json(friends);
    });
}