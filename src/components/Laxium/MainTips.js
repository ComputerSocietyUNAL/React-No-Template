import React , { Component } from 'react';

import './Laxium.css';

import { data } from './dataTips';


export default class MainTips extends Component{
    render(){
        let idx=-1;
        let idy=-1;
        return(
            <React.Fragment>
                <div className="MainTipWeb container col-md-11" style={{marginBottom:"0%",marginTop:"5%"}}>
                    <div className="row justify-content-center MainTipBox" style={{
                        background:"url(/assets/img/Laxium_MainTip.png)",
                        backgroundSize:"cover",
                    }}>
                        <div className="col-md-3 LaxCards">
                            <p className="Laxtitle" style={{padding:"0% 8%",fontSize:"2.0rem",marginBottom:"10%"}}>{data[0].Col1[0].Tip}</p>
                            <ul style={{textAlign:"left"}}>
                                {data[0].Col1[0].Msg.map(() => {
                                    idx=idx+1;
                                    return(
                                        <React.Fragment>
                                            <li style={{fontSize:"1.5rem",color:"#606060"}}>{data[0].Col1[0].Msg[idx]}</li>
                                        </React.Fragment>
                                    );
                                })}
                            </ul> 
                        </div>
                        <div className="col-md-3 offset-1 LaxCards">
                            <div>
                                <img src="/assets/img/Embarazo.png" alt="Embarazo"  width="75%" style={{margin:"5% 0%"}}/>
                            </div>
                            <div>
                                <p style={{fontSize:"1.5rem",color:"#606060"}}>Embarazo</p>
                            </div>
                        </div>
                        <div className="col-md-3 offset-1 LaxCards">
                            <div>
                                <img src="/assets/img/pills.png" alt="Medicamentos" width="75%" style={{margin:"5% 0%"}}/>
                            </div>
                            <div>
                                <p style={{fontSize:"1.5rem",color:"#606060"}}>Medicamentos</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="MainTipMov container col-9" style={{marginBottom:"0%",marginTop:"5%"}}>
                    <div className="row justify-content-center MainTipBox">
                        <div className="col-12 LaxCardsMov">
                            <p className="Laxtitle">
                                {data[0].Col1[0].Tip}
                            </p>
                            <ul style={{textAlign:"left"}}>
                                {data[0].Col1[0].Msg.map(() => {
                                    idy=idy+1;
                                    return(
                                        <React.Fragment>
                                            <li style={{fontSize:"1.2rem",color:"#606060"}}>{data[0].Col1[0].Msg[idy]}</li>
                                        </React.Fragment>
                                    );
                                })}
                            </ul> 
                        </div>
                        <div className="col-12 LaxCardsMov">
                                <img src="/assets/img/Embarazo.png" alt="Embarazo"  width="75%" style={{margin:"5% 0%"}}/>
                            <div>
                                <p style={{fontSize:"1.5rem",color:"#606060"}}>Embarazo</p>
                            </div>
                        </div>
                        <div className="col-12 LaxCardsMov">
                            <div>
                                <img src="/assets/img/pills.png" alt="Medicamentos" width="75%" style={{margin:"5% 0%"}}/>
                            </div>
                            <div>
                                <p style={{fontSize:"1.5rem",color:"#606060"}}>Medicamentos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}