import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';



export default class HomeWrapper extends Component {
  componentDidMount() {
    $('.button-collapse').sideNav({
      menuWidth: 250, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
  }
  playListSearch(event) {
      event.preventDefault();
      Meteor.call("getPlayList", function(err, res) {

        Session.set('Playlist',res.data.slice(0,10) );
        console.log(res.data.slice(0,10));

      });
    this.refs.search.value = "";
  }

  render() {
    return (

      <div className="row">
        <div className="col s12 l12">
        <form onSubmit={this.playListSearch.bind(this)}>
          <div className="input-field">
            <input id="search" ref="search" type="search"required />
            <label for="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </form>
        </div>
      </div>

    )
  }
}
