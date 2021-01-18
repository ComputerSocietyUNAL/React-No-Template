import React , { Component } from 'react';

import './Laxium.css';

import { data } from './dataTips';


export default class MainTips extends Component{
    render(){
        let idx=-1;
        return(
            <div className="container" style={{marginBottom:"0%",marginTop:"5%"}}>
                <div className="row" style={{
                    background:"url(/assets/img/Solhidrex_MainTip.png)",
                    backgroundSize:"cover",
                    height:"45vh",
                    width:"100%",
                    marginBottom:"18%"
                }}>
                    <div className="col-md-3 offset-1 cards">
                        <p className="title" style={{padding:"0% 20%"}}>{data[0].Col1[0].Tip}</p>
                        <ul style={{textAlign:"left"}}>
                            {data[0].Col1[0].Msg.map(() => {
                                idx=idx+1;
                                return(
                                    <React.Fragment>
                                        <li>{data[0].Col1[0].Msg[idx]}</li>
                                    </React.Fragment>
                                );
                            })}
                        </ul> 
                    </div>
                    <div className="col-md-3 offset-1 cards">
                        <div>
                            <img src="" alt="Embarazo" />
                        </div>
                        <div>
                            <p>Embarazo</p>
                        </div>
                    </div>
                    <div className="col-md-3 offset-1 cards">
                        <div>
                            <img src="" alt="Medicamentos" />
                        </div>
                        <div>
                            <p>Medicamentos</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}