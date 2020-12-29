import React , { Component } from 'react';

import './ApiMap.css';

export default class ApiMap extends Component{
    render(){
        return(
            <div>
                <div className="row" style={{
                    backgroundColor:"#121212",
                    backgroundImage:"url(/assets/img/FooterPic.png)",
                    backgroundSize:"cover",
                    color:"white",
                    width:"100%",
                    margin:"0%"}}>
                    <div className="col-md-6">
                        <p className="SalesText">Puntos de venta</p>
                    </div>
                    <div className="col-md-6">
                        <p>aqui pondria mi ApiMap... si tan solo tuviera una :'v</p>
                    </div>
                </div>
                <div className="space">

                </div>
            </div>
        );
    }
}