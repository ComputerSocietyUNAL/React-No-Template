import React, { Component } from 'react';

import './Labinpina.css';

import { data } from './dataTips';

export default class Tips extends Component{
   render(){
      let idx=-1;
      let idy=-1;
      let idxx=-1;
      let idyy=-1;
      return(
         <React.Fragment>
            <div className="LabTipsBlock"
               style={{
                  background:"url(/assets/img/LabTipsBck.png)",
                  backgroundSize:"cover",
               }}>
               <div className="container col-md-7 LabTipsBox">
                  <div className="row">
                     <div className="col-md-6">
                        <p className="Labtitle LabTiptitle">
                           {data[0].Col1[3].Tip}
                        </p>
                     </div>
                     <div className="col-md-6">
                        <img className="LabTipImg" src="/assets/img/GreyColon.png" alt="greycolon" width="70%"/>
                     </div>
                  </div>
                  <div className="row LabTipsTextBox">
                     <div className="col-md-6 LabTipLeft" >
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
                     <div className="col-md-6 LabTipRight" style={{}}>
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
            <div className="LabMovTipsBlock">
               <img className="LabTipsPic" src="/assets/img/LabMovTipsBck.png" alt="" />
               <div className="container col-12 LabTipsBox">
                  <div className="row LabTitleBox">
                     <div className="col-7">
                        <p className="Labtitle LabTiptitle">
                           {data[0].Col1[3].Tip}
                        </p>
                     </div>
                     <div className="col-5">
                        <img className="LabTipImg" src="/assets/img/GreyColon.png" alt="greycolon" width="70%"/>
                     </div>
                  </div>
                  <div className="row LabTipsTextBox">
                     <div className="col-md-6 LabTipLeft" >
                        <ul>
                           {data[0].Col1[3].MsgL.map(()=>{
                              idxx=idxx+1
                              return(
                                 <li>
                                    {data[0].Col1[3].MsgL[idxx]}
                                 </li>
                              );
                           })}
                        </ul>
                     </div>
                     <div className="col-md-6 LabTipRight" style={{}}>
                     <ul>
                           {data[0].Col1[3].MsgR.map(()=>{
                              idyy=idyy+1
                              return(
                                 <li>
                                    {data[0].Col1[3].MsgR[idyy]}
                                 </li>
                              );
                           })}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}