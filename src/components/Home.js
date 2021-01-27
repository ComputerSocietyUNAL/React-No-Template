import React, { Component } from 'react';
import HomeSlider from './HomeSlider/HomeSlider';

import './Home.css';
import ApiMap from './ApiMap/ApiMap';

export default class Home extends Component {
    
    render(){
        let elink=0;
        return(
            <React.Fragment>
            <div className="row" style={{width:"100%"}}>
                    <div className="col-md-10 offset-md-1 HomeBlock" >
                        <img className="headerTop" src="/assets/img/Header_1.png" alt="" height="200" />
                        <img className="headerMid" src="/assets/img/Header_2.png" alt=""  width="90%" />
                        <img className="headerBot" src="/assets/img/Header_3.png" alt="" width="45%" />
                    </div>
                    <HomeSlider/>
            </div>
            <div className="" style={{width:"100%"}}>
                <ApiMap elink={elink}/>
            </div>
            </React.Fragment>
        );
    }
}