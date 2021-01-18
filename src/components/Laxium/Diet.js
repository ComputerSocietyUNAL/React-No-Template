import React, { Component } from 'react';
import Care from './Care';

import { data } from './dataTips';

export default class Diet extends Component{
   render(){
      return(
         <div className="container col-md-8">
            <p className="title">{data[1].Col2[1].Tip}</p>
            <div className="row" style={{textAlign:"center"}}>
               <div className="col-md-4">
                  <div>
                     <img src="" alt="fruit" height="100%" />
                  </div>
                  <div>
                     {data[1].Col2[1].Msg[0]}
                  </div>
               </div>
               <div className="col-md-4">
                  <div>
                     <img src="" alt="bottle" height="100%" />
                  </div>
                  <div>
                     {data[1].Col2[1].Msg[1]}
                  </div>
               </div>
               <div className="col-md-4">
                  <div>
                     <img src="" alt="drops" height="100%" />
                  </div>
                  <div>
                     {data[1].Col2[1].Msg[2]}
                  </div>
               </div>
            </div>

         </div>
      );
   }
}