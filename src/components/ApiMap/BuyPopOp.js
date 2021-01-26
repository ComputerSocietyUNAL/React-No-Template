import React, {Component} from 'react';
import PopPop from 'react-poppop';
import PuntosVenta from './PuntosVenta';

import './ApiMap.css'

export default class BuyPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  toggleShow = show => {
    this.setState({show});
  }

  render() {
    const {show} = this.state;
    return (
      <div className="container">
         <img className="MapPic" src="/assets/img/CellPhone.png" alt="" onClick={()=> this.toggleShow(true)} />
        <PopPop position="centerCenter"
                open={show}
                closeBtn={false}
                closeOnEsc={true}
                onClose={() => this.toggleShow(false)}
                closeOnOverlay={true}
                overlayStyle-width={"10%"}
                >
          <PuntosVenta/>
        </PopPop>
      </div>
    )
  }
}