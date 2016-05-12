var playListUrl = 'https://api.soundcloud.com/playlists?client_id=05d4489983fdf3fb4f7c4af4b263a473&q=jedimindtricks';
var query = '';

Meteor.methods({
  getPlayList: function(){
    this.unblock();
    return HTTP.get(playListUrl , {});
  }
});
