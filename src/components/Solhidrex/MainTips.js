import React , { Component } from 'react';

import './Solhidrex.css';


export default class MainTips extends Component{
    render(){
        return(
            <div className="container col-md-10 MainTipBlock">
                <div className="row justify-content-center MainTip" style={{
                    background:"url(/assets/img/Solhidrex_MainTip.png)",
                    backgroundSize:"cover",
                }}>
                    <div className="col-md-3 SolCards">
                        <p className="title" style={{padding:"0% 20%",fontSize:"2.0rem"}}>¿Qué es la deshidratación por diarrea?</p>
                        <p style={{fontSize:"1.5rem", padding:"0% 9.5%"}}> 
                            Es la pérdida de fluidos corporales. En presencia de vómito y diarrea, se pueden perder grandes cantidades de agua y sales llegando a sufrir de deshidratación
                        </p>
                    </div>
                    <div className="col-md-3 offset-1 SolCards">
                        <div>
                            <img src="/assets/img/Sol_Drops.png" alt="Gotas" width="50%" style={{margin:"8% 0%"}}/>
                        </div>
                        <div>
                            <p style={{fontSize:"1.5rem",padding:"0% 40%"}}>Vomito diarrea</p>
                        </div>
                    </div>
                    <div className="col-md-3 offset-1 SolCards">
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