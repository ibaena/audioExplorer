import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class PlayerWidget extends Component {

  componentDidMount(){




  }

render(){
  return(
    <div>
    {
      this.state.items.map((item)=>{
        return(
          <div id={item.id} className="modal bottom-sheet" key={item.id}>
            <div className="modal-content">
              <h4>Modal Header</h4>
              <p>A bunch of text</p>
            </div>
            <div className="modal-footer">
              <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
          </div>
        )
      })
    }
  </div>
  )
}


}
