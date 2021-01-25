import React, { Component } from 'react';

import './Labinpina.css';

import { data } from './dataTips';

export default class Medic extends Component{
   render(){
      let idx=-1;
      let idy=-1;
      return(
         <React.Fragment>
            <div className="WebLabMedic"
               style={{
                  marginTop:"15%",
                  marginBottom:"5%"
            }}>
               <div className="container col-md-10">
                  <div className="row">
                     <div className="col-md-6">
                        <img src="/assets/img/Doctor2.png" alt="Medic" width="100%" />
                     </div>
                     <div className="col-md-6 LabSymBlock" style={{}}>
                        <p className="Labtitle SymTitle">
                           {data[0].Col1[2].Tip}
                        </p>
                        <ul className="LAbSymList col-md-6 justify-content-center">
                           {data[0].Col1[2].Msg.map(()=>{
                              idx=idx+1
                              return(
                                 <li>
                                    {data[0].Col1[2].Msg[idx]}
                                 </li>
                              );
                           })}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div className="MovLabMedic"
               style={{
                  marginTop:"15%",
                  marginBottom:"5%"
            }}>
               <div className="container col-11">
                        <p className="Labtitle SymTitle">
                           {data[0].Col1[2].Tip}
                        </p>
                     <div className="col-10 LabSymBlock" style={{}}>
                        <ul className="LAbSymList offset-5 col-12 justify-content-center">
                           {data[0].Col1[2].Msg.map(()=>{
                              idy=idy+1
                              return(
                                 <li>
                                    {data[0].Col1[2].Msg[idy]}
                                 </li>
                              );
                           })}
                        </ul>
                  <div className="row">
                     <div className="col-12">
                        <img className="LabMedic" src="/assets/img/Doctor2.png" alt="Medic" width="100%" />
                     </div>
                     </div>
                  </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}