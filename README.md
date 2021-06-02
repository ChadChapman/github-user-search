## Getting Started 

- Enter a username / login for a GitHub user in the `sidebar`
  
- Click the `fetch user` button
  
- If a matching user record is found -> see some of that user's attributes displayed in the `content` area.

As more usernames are entered, the list of previous searches will grow, vertically expanding the page.

The `nav` section is purposefully non-functioning due to time.

The sections should collapse / stack as specified, at a screen size approximate to a full-size tablet.

When the designated areas stack, the `nav` and `sidebar` list elements should condense as well.

There is some minimal feedback to notify the user when a search fails.  The failed search arguments should not be included in the list of previous search results.

This project obviously included a lot of handwaving and assumptions.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is deployed using [AWS Amplify](https://aws.amazon.com/amplify/).

[View the project](https://main.d2ityiiy2u2j0x.amplifyapp.com/).

## Want to run it locally?

Nothing fancy here, assuming you have `git` and [`node` (preferably 12+)](https://nodejs.org/en/) installed:

- `git clone https://github.com/ChadChapman/github-user-search.git`
- `cd github-user-search`
- `npm install`
- stretch, get something to drink, grab a snack
- `npm start`
- check out `localhost:3000` if a browser tab does not automatically open to that location
