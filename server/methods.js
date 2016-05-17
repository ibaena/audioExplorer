var radioUrl = 'https://api.soundcloud.com/tracks?client_id=05d4489983fdf3fb4f7c4af4b263a473';
var streamUrl = 'https://api.jamendo.com/v3.0/radios/stream/?client_id=e84a0176&format=jsonpretty&id=';


Meteor.methods({
  getRadios: function(){
    this.unblock();
    return HTTP.get(radioUrl , {});
  },

  streamRadio: function(query){
    console.log(query);
    var radioId = query.query;
    this.unblock();
    return HTTP.get(streamUrl + radioId , {});
  }

});
