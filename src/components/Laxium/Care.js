import React, { Component } from 'react';

import { data } from './dataTips';

export default class Care extends Component{
   render(){
      return(
         <div className="container col-md-7" style={{marginBottom:"5%"}}>
            <div className="row">
               <div className="col-md-6">
                  <p className="title">{data[0].Col1[1].Tip}</p>
               </div>
               <div className="col-md-6">
               <img src="" alt="paper" height="100%" />
               </div>
            </div>
            <div className="row">
               <div className="col-md-4" style={{borderRight:"2px solid #86BE3E"}}>
                  <p>{data[0].Col1[1].Msg[0]}</p>
                  <p>{data[0].Col1[1].Msg[1]}</p>
               </div>
               <div className="col-md-4" style={{borderRight:"2px solid #86BE3E"}}> 
                  <p>{data[0].Col1[1].Msg[2]}</p>
               </div>
               <div className="col-md-4">
                  <p>{data[0].Col1[1].Msg[3]}</p>
               </div>
            </div>
         </div>
      );
   }
}