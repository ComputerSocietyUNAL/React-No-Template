import React , { Component } from 'react';

import { data } from './dataTips';

export default class ListTips extends Component{
    render(){
        let idx=-1;
        let idy=-1;
        let idz=-1;
        return(
            <div className="row">
                <div className="col-md-6 LeftFullList">
                    <div className="row">
                        {
                            data[0].Col1.map(() => {
                                idx=idx+1
                                return (
                                    <div className="row LeftList" style={{}}>
                                        <div className="col-md-3"  >
                                            <img src={data[0].Col1[idx].Image} alt={data[0].Col1[idx].id} width="100%"/>
                                        </div>
                                        <div className="col-md-8">
                                            <p> { data[0].Col1[idx].Tip } </p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="col-md-6 RightList" style={{}}>
                    <div className="row">
                        {
                            data[1].Col2.map(() => {
                                idy=idy+1
                                return (
                                    <div className="row" >
                                        <div className="col-3 col-md-3">
                                            <img src={data[1].Col2[idy].Image} alt={data[1].Col2[idy].id} width="100%" />
                                        </div>
                                        <div className="col-8 col-md-8">
                                            <p> { data[1].Col2[idy].Tip } </p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    
                </div>
                <div className="col-12 MovilTipList">
                    <div className="row">
                        {
                            data[2].Full.map(()=>{
                                idz=idz+1;
                                return(
                                    <div className="row" >
                                        <div className="col-3">
                                            <img src={data[2].Full[idz].Image} alt={data[2].Full[idz].id} width="100%" />
                                        </div>
                                        <div className="col-8">
                                            <p> { data[2].Full[idz].Tip } </p>
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
