import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  var radioUrl = 'https://api.jamendo.com/v3.0/radios?client_id=e84a0176';


  Meteor.methods({
    getRadios: function(){
      this.unblock();
      return HTTP.get(radioUrl , {});
    }
  });

});
