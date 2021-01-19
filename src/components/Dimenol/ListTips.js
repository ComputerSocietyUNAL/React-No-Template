import React , { Component } from 'react';

import { data } from './dataTips';

export default class ListTips extends Component{
    render(){
        /* const data= this.props.data; */
        let idx=-1;
        return(
                <div className="col-md-7">
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
        );
    }
}
