import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Player extends Component {

  constructor() {
    super();
    let radioId = FlowRouter.getParam('id');
    this.state = { stream: [], urlParam: radioId };

  }

 componentDidMount(){
   console.log(this.state);
   Meteor.call("streamRadio", {query: this.state.urlParam },(error, res) => {
      if(error) {
        console.log(error);

      } else {
        this.setState({ stream: res.data.results });
        console.log(res);

      }
    });
 }

render(){
  return(
    <div>
        {this.state.stream.map(radio => {
          return <audio key={radio.id} src={radio.stream} controls="controls"></audio>

        })
      }
    </div>
  )
}


}
