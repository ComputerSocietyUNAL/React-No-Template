import React, { Component } from 'react';
import { data } from './dataTips';


import './Labinpina.css';

export default class Causes extends Component{
   render(){
      let idx=-1;
      let idy=-1;
      return(
         <React.Fragment>
         <div className="WebLabCauses"
            style={{
               marginBottom:"5%"
         }}>
            <div className="container col-md-10 CausesBlock" 
               style={{
                  background:"url(/assets/img/LabCauseBck.png)",
                  backgroundSize:"cover",
                  }}>
               <div className="row justify-content-around" style={{textAlign:"center"}}>
                  <div className="col-md-3 LabCards">
                     <p className="Labtitle CardTextTitle" style={{}}>
                        {data[0].Col1[1].Tip}
                     </p>
                     <ul className="Labtext CardTextLeft" style={{}}>
                        {data[0].Col1[1].Msg.map(()=>{
                           idx=idx+1
                           return(
                              <li>{data[0].Col1[1].Msg[idx]} </li>
                           );
                        })}
                     </ul>
                  </div>
                  <div className="col-md-3 LabCards">
                     <div>
                        <img src="/assets/img/colon.png" alt="colon" width="80%" style={{marginLeft:"5%"}}/>
                     </div>
                     <div>
                        <p className="Labtext">
                           Sindrome de intestino irritable (SII)
                        </p>
                     </div>
                  </div>
                  <div className="col-md-3 LabCards">
                     <div>
                        <img src="/assets/img/LabPills.png" alt="pills" width="80%"  style={{marginLeft:"5%"}}/>
                     </div>
                     <div>
                        <p className="Labtext">
                           Algunos medicamentos como analgésicos, laxantes y antidepresivos
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="MovLabCauses" 
            style={{
               marginBottom:"5%"
         }}>
            <div className="container col-10 CausesBlock" 
               style={{}}>
               <div className="row justify-content-around" style={{textAlign:"center"}}>
                  <div className="col-12 LabCards">
                     <p className="Labtitle CardTextTitle" style={{}}>
                        {data[0].Col1[1].Tip}
                     </p>
                     <ul className="Labtext CardTextLeft" style={{}}>
                        {data[0].Col1[1].Msg.map(()=>{
                           idy=idy+1
                           return(
                              <li>{data[0].Col1[1].Msg[idy]} </li>
                           );
                        })}
                     </ul>
                  </div>
                  <div className="col-12 LabCards">
                     <div>
                        <img src="/assets/img/colon.png" alt="colon" width="80%" style={{marginLeft:"5%"}}/>
                     </div>
                     <div>
                        <p className="Labtext">
                           Sindrome de intestino irritable (SII)
                        </p>
                     </div>
                  </div>
                  <div className="col-12 LabCards">
                     <div>
                        <img src="/assets/img/LabPills.png" alt="pills" width="80%"  style={{marginLeft:"5%"}}/>
                     </div>
                     <div>
                        <p className="Labtext">
                           Algunos medicamentos como analgésicos, laxantes y antidepresivos
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         </React.Fragment>
      );
   }
}