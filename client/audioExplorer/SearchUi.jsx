import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class SearchUi extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();
   this.state = { items: [] };
  }
  searchAll(event) {
    event.preventDefault();
    var text = this.refs.search.value.trim();
    if (text) {
      Meteor.call("getRadios", {query: text}, (error, res) => {
         if(error) {
           // handle error
         } else {
           Session.set('plist', res.data);
           this.setState({ items: res.data });
           console.log(this.state);
         }
       });
    }
  }
 componentDidMount(){

 }



  render(){
    return (

      <div className="mainSearch">
              <form className="search" onSubmit={this.searchAll.bind(this)}>
                <input type="text" ref="search" placeholder="Search"/>
              </form>
      </div>

    )
  }
}
