import React , { Component } from 'react';

import './Solhidrex.css';


export default class MainTips extends Component{
    render(){
        return(
            <div className="container" style={{marginBottom:"0%"}}>
                <div className="row" style={{
                    background:"url(/assets/img/Solhidrex_MainTip.png)",
                    backgroundSize:"cover",
                    height:"45vh",
                    width:"100%",
                    marginBottom:"18%"
                }}>
                    <div className="col-md-3 offset-1 cards">
                        <p className="title" style={{padding:"0% 20%"}}>¿Qué es la deshidratación por diarrea?</p>
                        <p style={{fontSize:"1.1rem", padding:"0% 10%"}}> 
                            Es la pérdida de fluidos corporales. En presencia de vómito y diarrea, se pueden perder grandes cantidades de agua y sales llegando a sufrir de deshidratación
                        </p>
                    </div>
                    <div className="col-md-3 offset-1 cards">
                        <div>

                        </div>
                        <div>
                            <p>Vomito diarrea</p>
                        </div>
                    </div>
                    <div className="col-md-3 offset-1 cards">
                        <div>

                        </div>
                        <div>
                            <p>Deshidratación perdida de agua</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}