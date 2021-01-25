import React, { Component } from 'react';

import './Dimenol.css';

import { data } from './dataTips';

export default class Causes extends Component{
   
   render(){
      let idx=-1;
      let idy=-1;
      return(
         <React.Fragment>
            <div className="DimCausesWeb">
               <div className="container col-md-10 CausesBlock"
               style={{
                  background:"url(/assets/img/Product_backDim01.png)",
                  backgroundSize:"cover",
               }}>
                  <div className="row justify-content-around" style={{textAlign:"center"}}>
                     <div className="col-md-3 DimCards">
                        <p className="Dimtitle DimCardL">{data[0].Col1[1].Tip}</p>
                        <ul className="DimCauseList">
                           {
                              data[0].Col1[1].Msg.map(() => {
                                 idx=idx+1
                                 return(
                                    <li className="DimCauses-li">
                                       {data[0].Col1[1].Msg[idx]}
                                    </li>
                                 );
                              })
                           }
                        </ul>
                     </div>
                     <div className="col-md-3 DimCards" style={{alignItems:"center"}}>
                        <img src="/assets/img/Headache.png" alt="headache" width="80%" style={{paddingLeft:"7%"}}/>
                        <p style={{fontSize:"1.6rem"}}>Migraña</p>
                     </div>
                     <div className="col-md-3 DimCards" style={{alignItems:"center"}}>
                        <img src="/assets/img/Airplane.png" alt="Airplane" width="80%" style={{paddingLeft:"7%"}}/>
                        <p style={{fontSize:"1.6rem"}}>Viajes en carro, avión, tren y barco</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="DimCausesMov">
               <div className="container col-10">
                  <div className="row justify-content-center" style={{textAlign:"center"}}>
                     <div className="col-10 DimCards">
                        <p className="Dimtitle DimCardL">
                           {data[0].Col1[1].Tip}
                        </p>
                        <ul className="DimCauseList">
                           {
                              data[0].Col1[1].Msg.map(() => {
                                 idy=idy+1
                                 return(
                                    <li className="DimCauses-li">
                                       {data[0].Col1[1].Msg[idy]}
                                    </li>
                                 );
                              })
                           }
                        </ul>
                     </div>
                     <div class="w-100"></div>
                     <div className="col-10 DimCards" style={{alignItems:"center"}}>
                        <img src="/assets/img/Headache.png" alt="headache" width="80%" style={{paddingLeft:"7%"}}/>
                        <p style={{fontSize:"1.1rem"}}>Migraña</p>
                     </div>
                     <div class="w-100"></div>
                     <div className="col-10 DimCards" style={{alignItems:"center"}}>
                        <img src="/assets/img/Airplane.png" alt="Airplane" width="80%" style={{paddingLeft:"7%"}}/>
                        <p style={{fontSize:"1.1rem"}}>Viajes en carro, avión, tren y barco</p>
                     </div>
                  </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}