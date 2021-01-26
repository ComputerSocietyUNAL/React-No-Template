import React , { Component } from 'react';


import './ApiMap.css';
import BuyPopup from './BuyPopup';

export default class ApiMap extends Component{
    render(){
        return(
            <div style={{marginTop:"5%"}}>
                <div className="row " style={{
                    backgroundColor:"#121212",
                    backgroundImage:"url(/assets/img/FooterPic.png)",
                    backgroundSize:"cover",
                    color:"white",
                    width:"100%",
                    margin:"0%"}}>
                    <div className="col-8 col-md-6">
                        <p className="SalesText">Puntos de venta</p>
                    </div>
                    <div className="CellPhoneBox col-8 col-md-6" style={{textAlign:"center"}}>
                        <BuyPopup />
                    </div>
                </div>
                <div className="space">
                </div>
            </div>
        );
    }
}