import React, { Component } from 'react';
import HomeSlider from './HomeSlider/HomeSlider';

import './Home.css';

export default class Home extends Component {
    
    render(){
        return(
            <div className="row" style={{width:"100%"}}>
                    {/* <div className="col-md-1" style={{marginTop:"8%"}}>
                        <p className="link-text">Puntos de Venta</p>
                    </div> */}
                    <div className="col-md-10 offset-md-1 HomeBlock" >
                        <img className="headerTop" src="/assets/img/Header_1.png" alt="" height="200" />
                        <img className="headerMid" src="/assets/img/Header_2.png" alt=""  width="90%" />
                        <img className="headerBot" src="/assets/img/Header_3.png" alt="" width="45%" />
                    </div>
                    <HomeSlider />
            </div>
        );
    }
}