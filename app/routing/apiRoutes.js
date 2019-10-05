
var friendsArray = require('../data/friendData.js');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendsArray);
    });

    app.post('/api/friends', function (req, res) {
        // Variable to refer to the scores
        var user = req.body;
        // Loop thru scores
        for (let i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        // Default match to first index of the friendsArray
        var friendIndex = 0;

        // Placeholder variable actually with the most difference between user and friend listed in friendsArray
        var minimumDifference = 25;

        // Nested loop compares the scores of the new user with scores of friends listed in the friendsArray and determine the difference
        for (var i = 0; i < friendsArray.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < friendsArray[i].scores.length; j++) {
                var difference = Math.abs(user.scores[j] - parseInt(friendsArray[i].scores[j]));
                totalDifference += difference;
            }

            // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
            if (totalDifference < minimumDifference) {
                friendIndex = i;
                minimumDifference = totalDifference;
            }
        }

        console.log(req.body);
        friendsArray.push(req.body);
        res.json(friendsArray[friendIndex]);
    });

}