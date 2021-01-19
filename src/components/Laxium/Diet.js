import React, { Component } from 'react';

import { data } from './dataTips';

export default class Diet extends Component{
   render(){
      return(
         <div className="container col-md-6">
            <p className="Laxtitle" style={{paddingLeft:"5%"}}>
                  {data[0].Col1[3].Tip}
            </p>
            <div className="row" style={{marginBottom:"-8%",}}>
               <div className="col-md-4" style={{textAlign:"center"}}>
                     <img src="/assets/img/Fruit.png" alt="fruit" height="50%" />
               </div>
               <div className="col-md-4" style={{textAlign:"center"}}>
                     <img src="/assets/img/Bottle.png" alt="bottle" height="50%" />
               </div>
               <div className="col-md-4" style={{textAlign:"center"}}>
                     <img src="/assets/img/Drops.png" alt="drops" height="50%" />
               </div>
            </div>
            <div className="row" style={{textAlign:"center",marginTop:"3%",padding:"0% 0%"}}>
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