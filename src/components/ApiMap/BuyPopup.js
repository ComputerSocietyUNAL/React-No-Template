import React, { Component } from 'react';

import Modal from 'react-modal';

import './ApiMap.css';
import PuntosVenta from './PuntosVenta';

export default class BuyPopup extends Component{
   constructor () {
      super();
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    render () {
      return (
        <div>
           <img className="MapPic" src="/assets/img/CellPhone.png" alt="" onClick={this.handleOpenModal} />
         <Modal 
             isOpen={this.state.showModal}
             contentLabel="onRequestClose Example"
             onRequestClose={this.handleCloseModal}
             className="Modal"
             overlayClassName="Overlay"
         >
           <PuntosVenta elink={this.props.elink}/>
           <div className="PopupFooterBox">
                  <img className="PopupFooterPic" src="/assets/img/PopupFooter.png" alt="" />
            </div>
          </Modal>
        </div>
      );
   }
}
