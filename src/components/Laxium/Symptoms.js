import React , { Component } from 'react';

import { data } from './dataTips';

export default class Symptoms extends Component{

   render(){
      let idx=-1;
      return(
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <img src="" alt="Doctor" height="100%" width="100%"/>
               </div>
               <div className="col-md-6" style={{textAlign:"center"}}>
                  <p className="title">
                     {data[1].Col2[0].Tip}
                  </p>
                  <ul style={{textAlign: "left",display:"inline-block"}}>
                     {data[1].Col2[0].Msg.map(() => {
                        idx=idx+1;
                        return(
                           <React.Fragment>
                              <li>{data[1].Col2[0].Msg[idx]}</li>
                           </React.Fragment>
                        );
                     })}
                  </ul>
               </div>
            </div>
         </div>
      );
   }
}