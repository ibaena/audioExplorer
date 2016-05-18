var radioUrl = 'https://api.soundcloud.com/playlists?client_id=05d4489983fdf3fb4f7c4af4b263a473&q=';
var streamUrl = 'https://api.jamendo.com/v3.0/radios/stream/?client_id=e84a0176&format=jsonpretty&id=';


Meteor.methods({
  getRadios: function(query){
    console.log(query);
    var searchAll = query.query;
    this.unblock();
    return HTTP.get(radioUrl + searchAll, {});
  },

  streamRadio: function(query){
    console.log(query);
    var radioId = query.query;
    this.unblock();
    return HTTP.get(streamUrl + radioId , {});
  }

});
