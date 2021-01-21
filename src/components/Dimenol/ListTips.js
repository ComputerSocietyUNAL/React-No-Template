import React , { Component } from 'react';

import { data } from './dataTips';

export default class ListTips extends Component{
    render(){
        /* const data= this.props.data; */
        let idx=-1;
        return(
                <div className="col-md-11">
                        {
                            data[0].Col1.map(() => {
                                idx=idx+1
                                return (
                                    <div className="row" style={{marginBottom:"3%",fontSize:"1.3rem"}}>
                                        <div className="col-md-2">
                                            <img src={data[0].Col1[idx].Image} alt={data[0].Col1[idx].id} height="90%" style={{marginTop:"-5%"}}/>
                                        </div>
                                        <div className="col-md-10">
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
