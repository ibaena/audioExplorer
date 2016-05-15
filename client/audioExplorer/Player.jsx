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
   Meteor.call("streamRadio", {query: this.state.urlParam },(error, res) => {
      if(error) {
        console.log(error);

      } else {
        this.setState({ stream: res.data.results });
        console.log(res);

      }
    });
 }

render() {
  return (
    <div id="player">
      <div className="col s12 l6">
        <ul className="collection">
          {this.state.stream.map(radio => {
            return <li key={radio.playingnow.album_id} className="collection-item avatar">
              <i className="material-icons circle blue">radio</i>
              <span className="title">{radio.playingnow.track_name}</span>
              <p>{radio.playingnow.artist_name}
                <br/> {radio.playingnow.artist_name}
              </p>
            </li>

          })
}
        </ul>
      </div>
      <div className="col s12 l6">
        {this.state.stream.map(radio => {
          return <audio key={radio.id} autoplay="autoplay" src={radio.stream} controls="controls"></audio>
        })
}
      </div>
    </div>
  )
}

}
