// Link routes to data source
var friends = require("../data/friends");

// ============== Routes ==============
module.exports = function(app) {

    // API GET request
    app.get("/api/friends", function(req,res) {
        res.json(friends);
    });

    // API POST Request
    app.post("/api/friends", function(req, res) {
        friends.push(req.body);
        res.json(friends);
    });
}