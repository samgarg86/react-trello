# react-trello
A React/Redux based Trello like client. 
See it in action here https://trello-reacter.herokuapp.com/

Contains: 
* ES6 - 7 Support with Babel
* Redux dev tools to help you keep track of the app's state
* Routing
* Hot module replacement support so you can change modules or react components without having to reload the browser
* A webpack production config so you can build the app and make it ready for production
* Sass support, just import your styles wherever you need them
* eslint to keep your js readable
* express.js server
* Procfile for Heroku
* React dnd for drag-drop
* much more...


## Run the app on dev

0. ```npm install```
0. ```npm start-dev```

Once running, if you want to hide the redux dev monitor: ```CTRL+H```

Yes, it takes a while to load the first time you open the app.

## Build the app
```npm run build```

This will build the app into the "dist" directory in the root of the project. It contains the index.html along with the minified assets, ready for production.
