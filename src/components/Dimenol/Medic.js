import React, { Component } from 'react';
import { data } from './dataTips';

import './Dimenol.css';

export default class Medic extends Component{
   render(){
      let idx=-1;
      let idy=-1;
      return(
         <React.Fragment>
            <div className="DimWebMedic container col-md-10" style={{marginTop:"10%",marginBottom:"5%"}}>
               <div className="row">
                  <div className="col-md-6">
                     <img src="/assets/img/Doctora.png" alt="Doctora" width="90%" />
                  </div>
                  <div className="col-md-6">
                     <p className="Dimtitle MedicTitle" >
                        {data[0].Col1[2].Tip}
                     </p>
                     <p className="MedicText">
                        {data[0].Col1[2].Msg[0]}
                     </p>
                     <ul>
                        {
                           data[0].Col1[2].li.map(() => {
                              idx=idx+1;
                              return(
                                 <li className="Medic-li" >
                                    {data[0].Col1[2].li[idx]}
                                 </li>
                              );
                           })
                        }
                     </ul>
                  </div>
               </div>
            </div>
            <div className="DimMovMedic container col-11" style={{marginTop:"10%",marginBottom:"5%"}}>
               <div className="row">
                  <div className="col-12">
                     <p className="Dimtitle MedicTitle" >
                        {data[0].Col1[2].Tip}
                     </p>
                  </div>
                  <div className="col-9 offset-4">
                     <p className="MedicText">
                        {data[0].Col1[2].Msg[0]}
                     </p>
                     <ul>
                        {
                           data[0].Col1[2].li.map(() => {
                              idy=idy+1;
                              return(
                                 <li className="Medic-li" >
                                    {data[0].Col1[2].li[idy]}
                                 </li>
                              );
                           })
                        }
                     </ul>
                  </div>
                  <img src="/assets/img/Doctora.png" alt="Doctora" width="200%" 
                     style={{margin:"-90% 0% 0% -90%"}}/>
               </div>
            </div>
         </React.Fragment>
      );
   }
}