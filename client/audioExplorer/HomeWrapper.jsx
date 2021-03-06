import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import RadioList from './RadioList.jsx';
import PlayerWidget from './PlayerWidget.jsx';
import SearchUi from './SearchUi.jsx';




export default class HomeWrapper extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){


 }

  render() {
    return (
      <div className="Container">
        <SearchUi />
        <RadioList />


      </div>

    )
  }
}
