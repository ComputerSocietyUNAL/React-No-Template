import React , { Component } from 'react';

import './Labinpina.css'

import { data } from './dataTips';

export default class ListTips extends Component{
    render(){
        let idx=-1;
        let idy=-1;
        return(
            <React.Fragment>
                <div className="col-md-7 WebListTip">
                        {
                            data[0].Col1.map(() => {
                                idx=idx+1
                                return (
                                    <div className="row LabTipList" style={{}}>
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
                <div className="row justify-content-center">
                    <div className="col-8 MovListTip">
                            {
                                data[0].Col1.map(() => {
                                    idy=idy+1
                                    return (
                                        <div className="row LabTipList" style={{}}>
                                            <div className="col-3">
                                                <img src={data[0].Col1[idy].Image} alt={data[0].Col1[idy].id} width="100%" />
                                            </div>
                                            <div className="col-9">
                                                <p> { data[0].Col1[idy].Tip } </p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
