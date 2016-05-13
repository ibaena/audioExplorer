import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class PlayerWidget extends Component {
  getSearch(){
    if(Session.get('PlayList') === undefined){
      return false;
    }else{
      return Session.get('PlayList').fetch();
    }

  }
render(){
  return(
    <div className="row">
      <iframe id="sc-widget" src="https://w.soundcloud.com/player/?url=http://api.soundcloud.com/users/1539950/favorites" width="100%" height="465" scrolling="no" frameborder="no"></iframe>

    <form onSubmit={this.playListSearch.bind(this)}>
      <div className="input-field">
        <input id="search" ref="search" type="search" required/>
        <label for="search">
          <i className="material-icons">search</i>
        </label>
        <i className="material-icons">close</i>
      </div>
    </form>
  </div>
  )
}


}
