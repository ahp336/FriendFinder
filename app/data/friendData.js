var friendsArray = [
    {
        name: "Bugs Bunny",
        text: "EH, What's up doc?",
        photo: "https://media.tenor.com/images/5e3525bc9a2495d557175eadecdf44ea/tenor.gif",
        scores: ["5", "4", "1", "4", "2", "1", "3", "4", "1", "3"]
    },
    {
        name: "Goku",
        photo: "https://static.comicvine.com/uploads/original/11122/111223595/4459178-3177148620-goku_.png",
        scores: ["3", "4", "2", "5", "3", "5", "1", "2", "5", "2"]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;