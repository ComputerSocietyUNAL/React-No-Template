import React , { Component } from 'react';

import './Solhidrex.css';

import { data } from './dataTips';

export default class MainTips extends Component{
    render(){
        return(
            <div className="container col-10 col-md-10 MainTipBlock">
                <div className="row justify-content-around MainTip" style={{
                    background:"url(/assets/img/Solhidrex_MainTip.png)",
                    backgroundSize:"cover",
                }}>
                    <div className="col-11 col-md-3 SolCards">
                        <p className="title SolTipText">
                            {data[0].Col1[0].Tip}
                        </p>
                        <p className="SolTiptext"> 
                            {data[0].Col1[0].Msg}
                        </p>
                    </div>
                    <div className="col-11 col-md-3  SolCards">
                        <div>
                            <img src="/assets/img/Sol_Drops.png" alt="Gotas" width="50%" style={{margin:"8% 0%"}}/>
                        </div>
                        <div>
                            <p style={{fontSize:"1.5rem",padding:"0% 40%"}}>Vomito diarrea</p>
                        </div>
                    </div>
                    <div className="col-11 col-md-3  SolCards">
                        <div>
                            <img src="/assets/img/Sol_Bottle.png" alt="Botella" width="50%" style={{margin:"8% 0%"}} />
                        </div>
                        <div>
                            <p style={{fontSize:"1.5rem",padding:"0% 20%"}}>Deshidratación perdida de agua</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}