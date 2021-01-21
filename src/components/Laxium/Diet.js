import React, { Component } from 'react';

import { data } from './dataTips';

export default class Diet extends Component{
   render(){
      return(
         <div className="container col-md-7">
            <p className="Laxtitle" style={{paddingLeft:"0%",fontSize:"3.0rem"}}>
                  {data[0].Col1[3].Tip}
            </p>
            <div className="row" style={{marginBottom:"-5%",marginTop:"5%"}}>
               <div className="col-md-4" style={{textAlign:"center"}}>
                     <img src="/assets/img/Fruit.png" alt="fruit" height="80%" />
               </div>
               <div className="col-md-4" style={{textAlign:"center"}}>
                     <img src="/assets/img/Bottle.png" alt="bottle" height="80%" />
               </div>
               <div className="col-md-4" style={{textAlign:"center"}}>
                     <img src="/assets/img/Drops.png" alt="drops" height="80%" />
               </div>
            </div>
            <div className="row" style={{textAlign:"center",marginTop:"3%",padding:"0% 0%",fontSize:"1.5rem"}}>
               <div className="col-md-4" style={{textAlign:"center",padding:"1%"}}>
                     {data[0].Col1[3].Msg[0]}
               </div>
               <div className="col-md-4" style={{textAlign:"center",padding:"1%"}}>
                     {data[0].Col1[3].Msg[1]}
               </div>
               <div className="col-md-4" style={{textAlign:"center",padding:"1%"}}>
                     {data[0].Col1[3].Msg[2]}
               </div>
            </div>
         </div>
      );
   }
}