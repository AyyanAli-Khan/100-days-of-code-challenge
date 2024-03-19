"use strict";
function make_album(artistName, albumTittle, numberOfTracks) {
    let album;
    if (numberOfTracks == undefined) {
        album = {
            artist_name: artistName,
            album_tittle: albumTittle,
        };
    }
    else {
        album = {
            artist_name: artistName,
            album_tittle: albumTittle,
            track: numberOfTracks,
        };
    }
    return album;
}
let album1 = make_album("artist 1", "album 1");
let album2 = make_album("artist 2", "album 2");
let album3 = make_album("artist 3", "album 3", 5);
console.log(album1);
console.log(album2);
console.log(album3);
