var playlist = {
  TheVerve : 'Sonnet'
};

playlist['Slowdive'] = 'Alison';
playlist['My Bloody Valentine'] = 'Sometimes';
console.log(playlist);


function updatePlaylist(playlist, artist, song) {
  playlist.artist = song;
  return playlist;
}



function removeFromPlaylist(playlist, artist) {
  delete playlist.artist;
  return playlist;
}