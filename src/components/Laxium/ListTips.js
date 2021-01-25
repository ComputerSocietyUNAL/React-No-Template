import React , { Component } from 'react';

import { data } from './dataTips';

export default class ListTips extends Component{
    render(){
        /* const data= this.props.data; */
        let idx=-1;
        let idy=-1;
        return(
            <React.Fragment>
                <div className="row">
                    <div className="ListTipWeb col-12 col-md-12">
                        <div className="row">
                            {
                                data[0].Col1.map(() => {
                                    idx=idx+1
                                    return (
                                        <div className="row" style={{marginBottom:"1%"}}>
                                            <div className="col-2 col-md-2 ListTipPic">
                                                <img src={data[0].Col1[idx].Image} alt={data[0].Col1[idx].id} height="65%" />
                                            </div>
                                            <div className="col-9 col-md-9">
                                                <p style={{fontSize:"1.3rem"}}> { data[0].Col1[idx].Tip } </p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="ListTipMov col-11 col-md-12">
                        <div className="row ">
                            {
                                data[0].Col1.map(() => {
                                    idy=idy+1
                                    return (
                                        <div className="row justify-content-center" style={{marginBottom:"1%"}}>
                                            <div className="col-2 ListTipPic">
                                                <img src={data[0].Col1[idy].Image} alt={data[0].Col1[idy].id} height="60%" />
                                            </div>
                                            <div className="col-9 ">
                                                <p style={{fontSize:"1.0rem"}}> { data[0].Col1[idy].Tip } </p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
