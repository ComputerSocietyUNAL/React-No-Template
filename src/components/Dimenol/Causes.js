import React, { Component } from 'react';

import './Dimenol.css';

import { data } from './dataTips';

export default class Causes extends Component{
   
   render(){
      let idx=-1;
      return(
         <div>
            <div className="container col-md-10"
            style={{
               marginBottom:"5%",
               background:"url(/assets/img/Product_backDim01.png)",
               backgroundSize:"cover",
               height:"50vh",
               marginBottom:"15%"
            }}>
               <div className="row justify-content-around" style={{textAlign:"center"}}>
                  <div className="col-md-3 DimCards">
                     <p className="Dimtitle" style={{fontSize:"2.0rem",padding:"0% 7.5%",paddingBottom:"6%"}}>{data[0].Col1[1].Tip}</p>
                     <ul style={{textAlign:"left",paddingLeft:"20%"}}>
                        {
                           data[0].Col1[1].Msg.map(() => {
                              idx=idx+1
                              return(
                                 <li style={{fontSize:"1.6rem",padding:"0% 25% 0% 0%"}}>
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
      );
   }
}