import React, { Component } from 'react';

import './Dimenol.css';

import { data } from './dataTips';

export default class Causes extends Component{
   
   render(){
      let idx=-1;
      return(
         <div>
            <div className="container col-md-6">
               <div className="row" style={{textAlign:"center"}}>
                  <div className="col-md-4">
                     <p className="Dimtitle">{data[0].Col1[1].Tip}</p>
                     <ul style={{textAlign:"left"}}>
                        {
                           data[0].Col1[1].Msg.map(() => {
                              idx=idx+1
                              return(
                                 <li>
                                    {data[0].Col1[1].Msg[idx]}
                                 </li>
                              );
                           })
                        }
                     </ul>
                  </div>
                  <div className="col-md-4">
                     <img src="" alt="headche" width="100%" />
                     <p>Migraña</p>
                  </div>
                  <div className="col-md-4">
                     <img src="" alt="Airplane" width="100%" />
                     <p>Viajes en carro, avión, tren y barco</p>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}