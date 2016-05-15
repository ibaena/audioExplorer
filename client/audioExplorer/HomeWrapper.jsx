import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class HomeWrapper extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();
   this.state = { items: [] };
  }

 componentDidMount(){
   Meteor.call("getRadios", (error, res) => {
      if(error) {
        // handle error
      } else {
        this.setState({ items: res.data.results });
      }
    });
 }



  render() {
console.log(this.state);
    return (

      <div className="row">
        <div className="col s12 l12">
          <h2>Pick A Radio</h2>
          <ul>
          {

             this.state.items.map(item=> {
               return <li key={item.id}>
                 <img src={item.image} alt={item.id} />
                </li>})


          }
        </ul>
        </div>
      </div>

    )
  }
}
