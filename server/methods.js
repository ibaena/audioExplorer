var playListUrl = 'https://api.soundcloud.com/playlists?client_id=05d4489983fdf3fb4f7c4af4b263a473&q=';


Meteor.methods({
  getPlayList: function(query){
    var search = query;
    console.log(search);
    this.unblock();
    return HTTP.get(playListUrl + search, {});
  }
});
