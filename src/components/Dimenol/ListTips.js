import React , { Component } from 'react';

import { data } from './dataTips';

export default class ListTips extends Component{
    render(){
        /* const data= this.props.data; */
        let idx=-1;
        let idy=-1;
        return(
            <React.Fragment>
                <div className="DimWebListTip col-12 col-md-11">
                        {
                            data[0].Col1.map(() => {
                                idx=idx+1
                                return (
                                    <div className="row DimTipListBlock">
                                        <div className="col-2 col-md-2">
                                            <img className="DimMovIcon" src={data[0].Col1[idx].Image} alt={data[0].Col1[idx].id} width="100%" style={{marginTop:"-5%",}}/>
                                        </div>
                                        <div className="col-10 col-md-10">
                                            <p> { data[0].Col1[idx].Tip } </p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                </div>
                <div className="DimMovListTip col-12 col-md-11">
                        {
                            data[0].Col1.map(() => {
                                idy=idy+1
                                return (
                                    <div className="row DimTipListBlock">
                                        <div className="col-2 col-md-2" style={{padding:"0%",marginBottom:"5%"}}>
                                            <img className="DimMovIcon" src={data[0].Col1[idy].Image} alt={data[0].Col1[idy].id} width="100%" style={{marginTop:"-5%",}}/>
                                        </div>
                                        <div className="col-10 col-md-10">
                                            <p> { data[0].Col1[idy].Tip } </p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                </div>
            </React.Fragment>
        );
    }
}
