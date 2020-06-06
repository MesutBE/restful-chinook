#  Restful Chinook: Development Strategy

Building this site one step at a time.

## 0. Setup

* Fork the [restful-chinook](https://github.com/HackYourFutureBelgium/restful-chinook).

## 1. User Story: route/albums

A user can get all album list, get one album, create a new album, update an exiting album and delete an exiting album.

* Complete following methods ../api/albums/controllers to create a fully-functioning API.
  * create 
  * getAll
  * getOne
  * create
  * update
  * delete

## 2. User Story: route/artists

A user can get all artist list, get one artist, create a new artist, update an exiting artist and delete an exiting artist.

* Complete following methods ../api/artists/controllers to create a fully-functioning API.
  * create 
  * getAll
  * getOne
  * create
  * update
  * delete

## 3. User Story: route/genres

A user can get all genre list, get one genre, create a new genre, update an exiting genre and delete an exiting genre.

* Complete following methods ../api/genres/controllers to create a fully-functioning API.
  * create 
  * getAll
  * getOne
  * create
  * update
  * delete

## 4. User Story: route/media-types

A user can get all media-type list, get one media-type, create a new media-type, update an exiting media-type and delete an exiting media-type.

* Complete following methods ../api/media-types/controllers to create a fully-functioning API.
  * create 
  * getAll
  * getOne
  * create
  * update
  * delete

## 5. User Story: route/playlists

A user can get all playlist list, get one playlist, create a new playlist, update an exiting playlist and delete an exiting playlist.

* Complete following methods ../api/playlists/controllers to create a fully-functioning API.
  * create 
  * getAll
  * getOne
  * create
  * update
  * delete

## 6. User Story: route/tracks

A user can get all track list, get one track, create a new track, update an exiting track and delete an exiting track.

* Complete following methods ../api/tracks/controllers to create a fully-functioning API.
  * create 
  * getAll
  * getOne
  * create
  * update
  * delete

## 7. Deploying App

Deploy app using Heroku.

* type to terminal `heroku create restful-chinook`
* type to terminal `git push heroku master`
* Go to heroku page in the browser and then add `Config Vars` => `NODE_ENV: production`
* Be sure `../config/production.js` includes all of the followings:
```javascript
module.exports = {
  MODE: 'production',
  PORT: process.env.PORT,
  DATA_DIR: process.env.DATA_DIR
};
```

## 8. Write a Frontend

If you have finished the API and are looking for a challenge, write a frontend!  No suggestions from us, impress yourself :)

## 9. Complete README.md

* Complete README.md for more details about the project.