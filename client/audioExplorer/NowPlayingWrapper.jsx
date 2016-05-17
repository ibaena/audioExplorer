import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Player from './Player.jsx';

export default class NowPlayingWrapper extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){

 }

  render() {
    return (<div className="row">
          <Player />
      </div>

    )
  }
}
