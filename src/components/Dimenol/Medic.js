import React, { Component } from 'react';
import { data } from './dataTips';

import './Dimenol.css';

export default class Medic extends Component{
   render(){
      let idx=-1;
      return(
         <div className="container col-md-10" style={{marginTop:"10%",marginBottom:"5%"}}>
            <div className="row">
               <div className="col-md-6">
                  <img src="/assets/img/Doctora.png" alt="Doctora" width="90%" />
               </div>
               <div className="col-md-6">
                  <p className="Dimtitle" 
                     style={{
                        fontSize:"3rem",
                        paddingRight:"30%",
                        marginLeft:"-10%"
                        }}>{data[0].Col1[2].Tip}</p>
                  <p style={{fontSize:"1.3rem",paddingRight:"20%"}}>
                     {data[0].Col1[2].Msg[0]}
                  </p>
                  <ul>
                     {
                        data[0].Col1[2].li.map(() => {
                           idx=idx+1;
                           return(
                              <li style={{fontSize:"1.3rem"}}>
                                 {data[0].Col1[2].li[idx]}
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