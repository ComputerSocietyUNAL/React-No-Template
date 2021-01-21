import React , { Component } from 'react';

import { data } from './dataTips';

export default class Symptoms extends Component{

   render(){
      let idx=-1;
      return(
         <div className="container col-md-10" style={{marginBottom:"5%"}}>
            <div className="row">
               <div className="col-md-6">
                  <img src="/assets/img/Doctor.png" alt="Doctor" height="100%" width="100%"/>
               </div>
               <div className="col-md-6" style={{textAlign:"left",marginTop:"10%"}}>
                  <div className="col-md-12">
                     <p className="Laxtitle" style={{paddingLeft:"0%",fontSize:"3rem"}}>
                        {data[0].Col1[1].Tip}
                     </p>
                     <ul style={{textAlign: "left",display:"inline-block",marginLeft:"10%",fontSize:"1.3rem"}}>
                        {data[0].Col1[1].Msg.map(() => {
                           idx=idx+1;
                           return(
                              <React.Fragment>
                                 <li style={{listStylePosition:"initial"}}>{data[0].Col1[1].Msg[idx]}</li>
                              </React.Fragment>
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