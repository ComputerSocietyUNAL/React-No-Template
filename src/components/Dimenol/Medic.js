import React, { Component } from 'react';
import { data } from './dataTips';

import './Dimenol.css';

export default class Medic extends Component{
   render(){
      let idx=-1;
      return(
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <img src="" alt="Doctora" width="100%" />
               </div>
               <div className="col-md-6">
                  <p className="Dimtitle">{data[0].Col1[2].Tip}</p>
                  <p>
                     {data[0].Col1[2].Msg[0]}
                  </p>
                  <ul>
                     {
                        data[0].Col1[2].li.map(() => {
                           idx=idx+1;
                           return(
                              <li>
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