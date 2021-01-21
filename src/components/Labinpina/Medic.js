import React, { Component } from 'react';

import './Labinpina.css';

import { data } from './dataTips';

export default class Medic extends Component{
   render(){
      let idx=-1;
      return(
         <div 
            style={{
               marginTop:"15%",
               marginBottom:"5%"
         }}>
            <div className="container">
               <div className="row">
                  <div className="col-md-6">
                     <img src="/assets/img/Doctor2.png" alt="Medic" width="100%" />
                  </div>
                  <div className="col-md-6" style={{paddingTop:"5%"}}>
                     <p className="Labtitle">
                        {data[0].Col1[2].Tip}
                     </p>
                     <p>
                        {data[0].Col1[2].Msg.map(()=>{
                           idx=idx+1
                           return(
                              <li>
                                 {data[0].Col1[2].Msg[idx]}
                              </li>
                           );
                        })}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}