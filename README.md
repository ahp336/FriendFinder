# Friend Finder
Friend Finder - Node and Express Servers

A survey that has 10 questions, using a scale from 1 to 5 based on how much the user agrees or disagrees with a question.

The `server.js` file should require the basic npm packages we've used in class: `express` and `path`.

The `htmlRoutes.js` file should include two routes:

* A GET Route to `/survey` which should display the survey page.
* A default, catch-all route that leads to `home.html` which displays the home page.

The `apiRoutes.js` file should contain two routes:

* A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
* A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

The data is saved inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.(Json format)

{
"name":"Bugs bunny",

![Pic1](https://media.tenor.com/images/5e3525bc9a2495d557175eadecdf44ea/tenor.gif),

"scores":[5,1,4,4,5,1,2,5,4,1]
}
```

The `apiRoutes.js` route will determine the user's most compatible friend.

Once the app has found the current user's most compatible friend, it will display the result as a modal pop-up.
* The modal will display both the name and picture of the closest match.
