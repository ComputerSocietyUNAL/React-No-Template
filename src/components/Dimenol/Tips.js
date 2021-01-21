import React, { Component } from 'react';
import { data } from './dataTips';

import './Dimenol.css';

export default class Tips extends Component{
   render(){
      let idx=-1;
      let idy=-1;
      return(
         <div style={{
            background:"url(/assets/img/DimTipsBack.png)",
            backgroundSize:"cover",
            paddingTop:"9%",
            paddingLeft:"0%",
            paddingBottom:"7%"
            }}>
            <div className="container col-md-7" 
               style={{
                  backgroundColor:"white",
                  boxShadow: "15px 20px 1px 1px rgba(96,96,96,0.1)",
               }}>
               <div className="row ">
                  <div className="col-md-6">
                     <p className="Dimtitle" style={{padding:"15% 20%",marginLeft:"-5%"}}>{data[0].Col1[3].Tip}</p>
                  </div>
                  <div className="col-md-6"
                     style={{}}>
                     <img src="/assets/img/Dizzy.png" alt="Dizzy" width="50%" 
                        style={{
                           marginLeft:"50%"
                        }} />
                  </div>
               </div>
               <div className="row" style={{color:"#606060",paddingBottom:"5%"}}>
                  <div className="col-md-6" style={{fontSize:"1.5rem",borderRight:"2px solid #0E4C99"}}>
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
                  <div className="col-md-6" style={{fontSize:"1.5rem"}}>
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
         </div>
      );
   }
}