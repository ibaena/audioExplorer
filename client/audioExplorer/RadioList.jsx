import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class RadioList extends TrackerReact(Component) {

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
        console.log(res.data);

        this.setState({ items: res.data });
      }
    });
 }


  render() {
    return (

      <div className="row">
          {
            this.state.items.map((item) => {
              if(item.artwork_url === null){
                return false
            }else {
              return   <div className="col s3 m3 l3 hvr-outline-in" key={item.id}>
                <a href={'/nowplaying/'+item.id+'/'+ item.name} >
                <div className="links" >
                  <img src={item.artwork_url} className="circle responsive-img" alt={item.name}/>
              </div>
              </a>
            </div>
            }


            })
          }

      </div>

    )
  }
}
