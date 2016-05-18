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
        console.log(Session.get('plist'));
      }
    });
 }


  render() {
    return (

      <div className="row">
        {
          Session.get('plist').map((item)=>{
            return <div key={item.id}>
              <ul className="collection">
                <li className="collection-item avatar">
                  <img src={item.artwork_url} alt="" className="circle responsive-img" />
                    <span className="title">{item.title}</span>
                    <p>
                        <audio src={item.stream_url+"?client_id=05d4489983fdf3fb4f7c4af4b263a473"} controls></audio>
                    </p>
                    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                  </li>
                </ul>
              </div>

          })
        }
      </div>

    )
  }
}
