import React , { Component } from 'react';
import ApiMap from '../ApiMap/ApiMap';

import './Diarrea.css'
import Treatment from './treatment';

export default class Diarrea extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="DiarreaWeb" style={{width:"100%"}}>
                    <div className="row">
                        <div className="col-md-10 offset-md-1 DiaHomeBlock" >
                            <img className="DiaheaderTop" src="/assets/img/Header_1.png" alt="" height="200" />
                            <img className="DiaheaderMid" src="/assets/img/Header_2.png" alt="" />
                            <img className="DiaheaderBot" src="/assets/img/Header_3.png" alt="" width="45%" />
                        </div>
                    </div>
                    <Treatment/>
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
                <ApiMap/>
            </React.Fragment>
        );
    }
}