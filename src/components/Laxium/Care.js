import React, { Component } from 'react';
import './Laxium.css';

import { data } from './dataTips';

export default class Care extends Component{
   render(){
      return(
         <div style={{
            backgroundImage:"url(assets/img/LaxiumWoman.png)",
            backgroundSize:"cover",
            height:"40vh",
            marginBottom:"5%"
            }}>
            <div className="container col-md-7" style={{marginBottom:"5%",backgroundColor:"white",border:"2px solid white",padding:"0% 5%"}}>
               <div className="row" style={{marginTop:"-5%",marginBottom:"3%"}} >
                  <div className="col-md-8">
                     <p className="Laxtitle" style={{paddingRight:"20%",fontSize:"2.6rem"}}>{data[0].Col1[2].Tip}</p>
                  </div>
                  <div className="col-md-4">
                  <img src="/assets/img/Paper.png" alt="paper" width="85%" style={{marginBottom:"5%",marginTop:"-25%"}} />
                  </div>
               </div>
               <div className="row" style={{marginBottom:"5%",fontSize:"1.5rem"}}>
                  <div className="col-md-4" style={{borderRight:"2px solid #86BE3E"}}>
                     <p>{data[0].Col1[2].Msg[0]}</p>
                     <p>{data[0].Col1[2].Msg[1]}</p>
                  </div>
                  <div className="col-md-4" style={{borderRight:"2px solid #86BE3E"}}> 
                     <p>{data[0].Col1[2].Msg[2]}</p>
                  </div>
                  <div className="col-md-4">
                     <p>{data[0].Col1[2].Msg[3]}</p>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}