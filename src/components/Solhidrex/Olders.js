import React, { Component } from 'react';

import './Solhidrex.css';

import { data } from './dataTips'
export default class Olders extends Component{
   render(){
      let idx=-1;
      let idy=-1;
      return(
         <React.Fragment>
            <div className="container WebOlders">
               <div className="col-md-10 OldersBox" style={{}}>
                  <div className="row">
                     <div className="col-md-8">
                        <p className="title" style={{marginBottom:"10%",fontSize:"2.0rem",paddingLeft:"5%"}}>
                           ¿Cuales son los factores de riesgo de deshidratacion en adultos mayores?
                        </p>
                     </div>
                  </div>
                  <div className="row" >
                     <div className="col-md-6">
                        <ul className="OldList">
                           {data[1].Col2[0].Msg.map(()=>{
                              idx=idx+1;
                              return(
                                 <li>
                                    {data[1].Col2[0].Msg[idx]}
                                 </li>
                              );
                           })}
                        </ul>
                     </div>
                     <img src="/assets/img/Olders.png" alt="Olders" width="65%" className="OldersPic"/>
                  </div>
               </div>
            </div>
            <div className="container MovilOlders">
               <div className="col-md-10 OldersBox" style={{}}>
                  <div className="row">
                     <div className="col-md-8">
                        <p className="title" style={{marginBottom:"10%",fontSize:"1.5rem",paddingLeft:"5%"}}>
                           {data[1].Col2[0].Tip}
                        </p>
                     </div>
                  </div>
                  <div className="row" >
                     <div className="col-7 col-md-6">
                        <ul className="OldList">
                           {data[1].Col2[0].Msg.map(()=>{
                              idy=idy+1;
                              return(
                                 <li>
                                    {data[1].Col2[0].Msg[idy]}
                                 </li>
                              );
                           })}
                        </ul>
                     </div>
                     <div className="col-4">
                        <img src="/assets/img/Olders.png" alt="Olders" width="300%" className="OldersPic"/>
                     </div>
                  </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}