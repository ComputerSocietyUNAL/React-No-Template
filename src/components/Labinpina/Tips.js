import React, { Component } from 'react';

import './Labinpina.css';

import { data } from './dataTips';

export default class Tips extends Component{
   render(){
      let idx=-1;
      let idy=-1;
      return(
         <div
            style={{
               background:"url(/assets/img/LabTipsBck.png)",
               backgroundSize:"cover",
               height:"auto",
               paddingTop:"9%",
               paddingBottom:"8%",
               paddingLeft:"0%"
            }}>
            <div className="container col-md-7" 
               style={{
                  boxShadow: "15px 20px 1px 1px rgba(96,96,96,0.1)",
                  backgroundColor:"white",
                  padding:"2% 2%",
               }}>
               <div className="row">
                  <div className="col-md-6">
                     <p className="Labtitle" style={{fontSize:"2.6rem",textAlign:"left",paddingLeft:"7%"}}>
                        {data[0].Col1[3].Tip}
                     </p>
                  </div>
                  <div className="col-md-6">
                     <img src="/assets/img/GreyColon.png" alt="greycolon" width="70%"
                        style={{
                           marginTop:"-25%",
                           marginLeft:"30%"
                        }} 
                     />
                  </div>
               </div>
               <div className="row" style={{padding:"0% 2% 2% 2%",fontSize:"1.5rem"}}>
                  <div className="col-md-6" style={{borderRight:"2px solid #0E4C99",}}>
                     <ul>
                        {data[0].Col1[3].MsgL.map(()=>{
                           idx=idx+1
                           return(
                              <li>
                                 {data[0].Col1[3].MsgL[idx]}
                              </li>
                           );
                        })}
                     </ul>
                  </div>
                  <div className="col-md-6" style={{paddingRight:"10%"}}>
                  <ul>
                        {data[0].Col1[3].MsgR.map(()=>{
                           idy=idy+1
                           return(
                              <li>
                                 {data[0].Col1[3].MsgR[idy]}
                              </li>
                           );
                        })}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}