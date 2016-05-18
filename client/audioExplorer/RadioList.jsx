import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class RadioList extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();
   this.state = { items: [] };
   Session.set('plist', []);
  }

 componentDidMount(){
   Meteor.call("getRadios", (error, res) => {
      if(error) {
        // handle error
      } else {
        this.setState({ items: res.data });
        console.log(this.state);
      }
    });
 }


  render() {
    return (

      <div className="row">
        {
          Session.get('plist').map((item)=>{
            return <div key={item.id}>
                    <p>{item.title}</p>
                    <p>{item.description}</p>

                </div>

          })
        }
      </div>

    )
  }
}
