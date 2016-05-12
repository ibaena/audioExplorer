import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class HomeWrapper extends Component {

  componentDidMount() {
    $('.button-collapse').sideNav({
      menuWidth: 250, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
  }
  showSideNav() {
    $('.button-collapse').sideNav();
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
           <a href="#" className="brand-logo center">AudioRover</a>
          <ul id="slide-out" className="side-nav">
            <li>
              <a href="/myplaylist">My PlayList</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
          <a href="" data-activates="slide-out" onClick={this.showSideNav.bind(this)} className="button-collapse show-on-large">
            <i className="mdi-navigation-menu"></i>
          </a>
        </div>
      </nav>

    )
  }
}
