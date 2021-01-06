import React , { Component } from 'react';

import { data } from './dataTips';

import './Products.css';

export default class Tips extends Component{
    render(){
        /* const data= this.props.data; */
        let idx=-1;
        let idy=-1;
        return(
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        {
                            data[0].Col1.map(() => {
                                idx=idx+1
                                return (
                                    <div className="row" style={{marginBottom:"7%"}}>
                                        <div className="col-md-3">
                                            <img src={data[0].Col1[idx].Image} alt={data[0].Col1[idx].id} width="100%" />
                                        </div>
                                        <div className="col-md-9">
                                            <p> { data[0].Col1[idx].Tip } </p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="col-md-6" style={{marginTop:"-0.5%"}}>
                    <div className="row">
                        {
                            data[1].Col2.map(() => {
                                idy=idy+1
                                return (
                                    <div className="row" >
                                        <div className="col-md-3">
                                            <img src={data[1].Col2[idy].Image} alt={data[1].Col2[idy].id} width="100%" />
                                        </div>
                                        <div className="col-md-9">
                                            <p> { data[1].Col2[idy].Tip } </p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    
                </div>
            </div>
        );
    }
}
