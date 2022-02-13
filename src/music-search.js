// var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
    clientId: '',
    clientSecret: '',
    redirectUri: 'http://localhost:8080/redirect'
});

spotifyApi.setAccessToken('')

spotifyApi.getAlbum('5U4W9E5WsYb2jUQWePT8Xm').then(function(data) {
    console.log('Albums information', data.body);
  }, function(err) {
    console.error(err);
  });


// var express = require('express');
// var app = express();
// var fs = require("fs");

// var searchAlbums = function (query) {
//     $.ajax({
//         url: 'https://api.spotify.com/v1/search',
//         data: {
//             q: query,
//             type: 'album'
//         },
//         success: function (response) {
//             console.log(response)
//         }
//     });
// };

// searchAlbums('Saba');