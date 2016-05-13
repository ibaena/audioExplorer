import React, {Component} from 'react';

export default class HomeWrapper extends Component {

   componentWillMount() {
     Meteor.call('getPlayList', function(err, res){
       Session.set('plist', res.data);
     });
     this.state = Session.get('plist');
     return this.state;
   }

  render() {
    console.log(this.state);
    return (

      <div className="row">
        <div className="col s12 l12">
          <ul>
              {this.componentWillMount().map((plist, i) => {
                return <li key={i}>{plist.uri}</li>
              })}
            </ul>
        </div>
      </div>

    )
  }
}
