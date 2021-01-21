import React , { Component } from 'react';

import { data } from './dataTips';

export default class ListTips extends Component{
    render(){
        /* const data= this.props.data; */
        let idx=-1;
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        {
                            data[0].Col1.map(() => {
                                idx=idx+1
                                return (
                                    <div className="row" style={{marginBottom:"1%"}}>
                                        <div className="col-md-2">
                                            <img src={data[0].Col1[idx].Image} alt={data[0].Col1[idx].id} height="65%" />
                                        </div>
                                        <div className="col-md-9">
                                            <p style={{fontSize:"1.3rem"}}> { data[0].Col1[idx].Tip } </p>
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
