import React, { Component } from 'react';
import { data } from './dataTips';

import './Solhidrex.css';

export default class Tips extends Component{
   render(){
      return(
         <React.Fragment>
            <div className="container WebTip col-md-6" style={{textAlign:"center"}}>
            <p className="title" style={{fontSize:"3.0rem"}}> Tips para controlar la deshidratación</p>
            <div className="row" style={{}}>
               <div className="col-md-4">
                  <img src="/assets/img/Sol_Ice.png" alt="paleta" width="25%" />
               </div>
               <div className="col-md-4">                  
                  <img src="/assets/img/Sol_Drops.png" alt="gotas" width="50%" />
               </div>
               <div className="col-md-4">            
                  <img src="/assets/img/Sol_Bottle.png" alt="botella"  width="50%" />
               </div>
            </div>
            <div className="row" style={{fontSize:"1.5rem"}}>
               <div className="col-md-4">
                  <p>{data[1].Col2[1].Msg[0]}</p>
               </div>
               <div className="col-md-4">
                  <p>{data[1].Col2[1].Msg[1]}</p>
               </div>
               <div className="col-md-4">
                  <p>{data[1].Col2[1].Msg[2]}</p>
               </div>
            </div>
            
         </div>
         <div className="container MovilTip " style={{textAlign:"center"}}>
            <p className="title" style={{fontSize:"2.3rem"}}>{data[1].Col2[1].Tip}</p>
            <div className="row justify-content-center" >
               <div className="col-6 ">
                  <img src="/assets/img/Sol_Ice.png" alt="paleta" width="25%" />
                  <p>
                     {data[1].Col2[1].Msg[0]}
                  </p>
               </div>
               <div class="w-100"></div>
               <div className="col-6">                  
                  <img src="/assets/img/Sol_Drops.png" alt="gotas" width="50%" />
                  <p>
                     {data[1].Col2[1].Msg[1]}
                  </p>
               </div>
               <div class="w-100"></div>
               <div className="col-6">            
                  <img src="/assets/img/Sol_Bottle.png" alt="botella"  width="50%" />
                  <p>
                     {data[1].Col2[1].Msg[2]}
                  </p>
               </div>
            </div>
         </div>
         </React.Fragment>
      );
   }
}