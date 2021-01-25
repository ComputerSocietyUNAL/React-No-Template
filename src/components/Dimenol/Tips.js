import React, { Component } from 'react';
import { data } from './dataTips';

import './Dimenol.css';

export default class Tips extends Component{
   render(){
      let idx=-1;
      let idy=-1;
      let idxx=-1;
      let idyy=-1;
      return(
         <React.Fragment>
            <div className="DimTipWeb DimTipsBlock" style={{
               background:"url(/assets/img/DimTipsBack.png)",
               backgroundSize:"cover",
               }}>
               <div className="container col-md-7" 
                  style={{
                     backgroundColor:"white",
                     boxShadow: "15px 20px 1px 1px rgba(96,96,96,0.1)",
                  }}>
                  <div className="row ">
                     <div className="col-md-6">
                        <p className="Dimtitle" style={{padding:"15% 20%",marginLeft:"-5%"}}>
                           {data[0].Col1[3].Tip}
                        </p>
                     </div>
                     <div className="col-md-6"
                        style={{}}>
                        <img src="/assets/img/Dizzy.png" alt="Dizzy" width="50%" 
                           style={{
                              marginLeft:"50%"
                           }} />
                     </div>
                  </div>
                  <div className="row DimTipsBox" >
                     <div className="col-md-6 DimTipsL">
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
                     <div className="col-md-6" >
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
            <div className="DimTipMov DimTipsBlock" style={{
            }}>
               <img src="/assets/img/DimTipsBackMov.png" alt="" width="150%"
                  style={{margin:"0% 0% 0% -25%"}}/>
            <div className="container col-md-7" 
               style={{
                  backgroundColor:"white",
                  boxShadow: "15px 20px 1px 1px rgba(96,96,96,0.1)",
                  margin:"-40% 0% 0% 0%"
               }}>
               <div className="row ">
                  <div className="col-6">
                     <p className="Dimtitle" style={{margin:"10% 0% 0% 0%",fontSize:"1.3rem"}}>
                        {data[0].Col1[3].Tip}
                     </p>
                  </div>
                  <div className="col-6"
                     style={{}}>
                     <img src="/assets/img/Dizzy.png" alt="Dizzy" width="100%" 
                        style={{margin:"-40% 0% 0% 10%"}} />
                  </div>
               </div>
               <div className="row DimTipsBox" >
                  <div className="col-12 DimTipsL">
                     <ul>
                        {
                           data[0].Col1[3].MsgL.map(()=>{
                              idxx=idxx+1
                              return(
                                 <li>
                                    {data[0].Col1[3].MsgL[idxx]}
                                 </li>
                              );
                           })
                        }
                     </ul>
                  </div>
                  <div className="col-12" >
                     <ul>
                        {
                           data[0].Col1[3].MsgR.map(()=>{
                              idyy=idyy+1
                              return(
                                 <li>
                                    {data[0].Col1[3].MsgR[idyy]}
                                 </li>
                              );
                           })
                        }
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         </React.Fragment>
      );
   }
}