import React, { Component } from 'react';

import { data } from './dataTips';

export default class Diet extends Component{
   render(){
      return(
         <div className="container col-md-7" style={{textAlign:"center"}}>
            <p className="Laxtitle DietTitle" style={{}}>
                  {data[0].Col1[3].Tip}
            </p>
            <div className="row CareIconsBox" style={{}}>
               <div className="col-md-4" style={{}}>
                     <img src="/assets/img/Fruit.png" alt="fruit" height="80%" />
               </div>
               <div className="col-md-4" style={{}}>
                     <img src="/assets/img/Bottle.png" alt="bottle" height="80%" />
               </div>
               <div className="col-md-4" style={{}}>
                     <img src="/assets/img/Drops.png" alt="drops" height="80%" />
               </div>
            </div>
            <div className="row CareTextBox" style={{}}>
               <div className="col-md-4 CareText" style={{}}>
                     {data[0].Col1[3].Msg[0]}
               </div>
               <div className="col-md-4 CareText" style={{}}>
                     {data[0].Col1[3].Msg[1]}
               </div>
               <div className="col-md-4 CareText" style={{}}>
                     {data[0].Col1[3].Msg[2]}
               </div>
            </div>
         </div>
      );
   }
}