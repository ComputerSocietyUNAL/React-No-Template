import React, { Component } from 'react';
import { data } from './dataTips';


import './Labinpina.css';

export default class Causes extends Component{
   render(){
      let idx=-1;
      return(
         <div 
            style={{
               marginBottom:"5%"
         }}>
            <div className="container col-md-10" 
               style={{
                  background:"url(/assets/img/LabCauseBck.png)",
                  backgroundSize:"cover",
                  height:"50vh",
                  marginBottom:"15%"
                  }}>
               <div className="row justify-content-around" style={{textAlign:"center"}}>
                  <div className="col-md-3 LabCards">
                     <p className="Labtitle" style={{fontSize:"2.0rem",padding:"0% 8%"}}>{data[0].Col1[1].Tip}</p>
                     <ul className="Labtext" style={{textAlign:"left",paddingRight:"10%",fontSize:"1.6rem"}}>
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
      );
   }
}