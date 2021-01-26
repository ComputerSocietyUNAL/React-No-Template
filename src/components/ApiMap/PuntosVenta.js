import React , { Component } from 'react';

import './ApiMap.css';
import { data } from './data';

export default class PuntosVenta extends Component{
   render(){
      let idx=-1;
      let idy=-1;
      return(
         <React.Fragment>
            <div className="PuntosVenta container col-11 justify-content-center"
               style={{textAlign:"center"}}>
               {data[0].Online.map(()=>{
                  idx=idx+1;
                  return(
                     <div className="container col-12 justify-content-center">
                        <div className="PopUpBlock">
                           <a href={data[0].Online[idx].link}>
                           <img 
                              src={data[0].Online[idx].img} 
                              alt={data[0].Online[idx].id} 
                              width={data[0].Online[idx].width}
                           />
                           </a>
                        </div>
                     </div>
                  );
               })}
            </div>
         </React.Fragment>
      );
   }
}