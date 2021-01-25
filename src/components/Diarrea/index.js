import React , { Component } from 'react';

import './Diarrea.css'
import Treatment from './treatment';

export default class Diarrea extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="DiarreaWeb">

                </div>
                <div className="DiarreaMov" style={{width:"100%"}}>
                    <div className="row">
                        <div className="col-10 DiaHomeBlock" >
                            <img className="DiaheaderTop" src="/assets/img/Header_1.png" alt="" />
                            <img className="DiaheaderMid" src="/assets/img/Header_2.png" alt=""  width="90%" />
                            <img className="DiaheaderBot" src="/assets/img/Header_3.png" alt="" width="45%" />
                        </div>
                    </div>
                    <Treatment/>
                </div>
            </React.Fragment>
        );
    }
}