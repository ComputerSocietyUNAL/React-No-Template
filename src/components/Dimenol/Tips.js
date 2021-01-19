import React, { Component } from 'react';
import { data } from './dataTips';

import './Dimenol.css';

export default class Tips extends Component{
   render(){
      let idx=-1;
      let idy=-1;
      return(
         <div className="container col-md-6">
            <div className="row ">
               <div className="col-md-6">
                  <p className="Dimtitle">{data[0].Col1[3].Tip}</p>
               </div>
               <div className="col-md-6">
                  <img src="" alt="Dizzy" width="100%" />
               </div>
            </div>
            <div className="row">
               <div className="col-md-6">
                  <ul>
                     {
                        data[0].Col1[3].MsgL.map(()=>{
                           idx=idx+1
                           return(
                              <li>
                                 {data[0].Col1[3].MsgL[idx]}
                              </li>
                           );
                        })
                     }
                  </ul>
               </div>
               <div className="col-md-6">
                  <ul>
                     {
                        data[0].Col1[3].MsgR.map(()=>{
                           idy=idy+1
                           return(
                              <li>
                                 {data[0].Col1[3].MsgR[idy]}
                              </li>
                           );
                        })
                     }
                  </ul>
               </div>
            </div>
         </div>
      );
   }
}