import React, { Component } from 'react';
import './Laxium.css';

import { data } from './dataTips';

export default class Care extends Component{
   render(){
      return(
         <React.Fragment>
            <div className="CareWeb CareBlock" style={{
               backgroundImage:"url(assets/img/LaxiumCare.png)",  
               }}>
               <div className="container col-md-7 CareHeaderBox" style={{}}>
                  <div className="row" style={{marginTop:"5%",marginBottom:"3%"}} >
                     <div className="col-md-8">
                        <p className="Laxtitle CareTitle" style={{}}>{data[0].Col1[2].Tip}</p>
                     </div>
                     <div className="col-md-4">
                     <img className="CareIcon" src="/assets/img/Paper.png" alt="paper" width="85%" style={{marginBottom:"5%",marginTop:"-25%"}} />
                     </div>
                  </div>
                  <div className="row CareTextBox" style={{}}>
                     <div className="col-md-4 CareTipLeft" style={{}}>
                        <p>{data[0].Col1[2].Msg[0]}</p>
                        <p>{data[0].Col1[2].Msg[1]}</p>
                     </div>
                     <div className="col-md-4 CareTipMid" style={{}}> 
                        <p>{data[0].Col1[2].Msg[2]}</p>
                     </div>
                     <div className="col-md-4">
                        <p>{data[0].Col1[2].Msg[3]}</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="CareMov CareBlock" style={{
               }}>
                  <img src="assets/img/LaxCareMov.png" alt="" width="150%" style={{marginLeft:"-30%"}} />
               <div className="container col-12 CareHeaderBox" style={{}}>
                  <div className="row" 
                     style={{
                        marginTop:"5%",
                        marginBottom:"3%"}}>
                     <div className="col-8">
                        <p className="Laxtitle CareTitle" style={{fontSize:"1.3rem"}}>{data[0].Col1[2].Tip}</p>
                     </div>
                     <div className="col-4">
                     <img className="CareIcon" src="/assets/img/Paper.png" alt="paper" width="120%" 
                     style={{
                        margin:"-50% 0% 0% -25%"
                     }}/>
                     </div>
                  </div>
                  <div className="row CareTextBox" style={{lineHeight:"1.1"}}>
                     <div className="col-md-4 CareTipLeft" style={{}}>
                        <p>{data[0].Col1[2].Msg[0]}</p>
                        <p>{data[0].Col1[2].Msg[1]}</p>
                     </div>
                     <div className="col-md-4 CareTipMid" style={{}}> 
                        <p>{data[0].Col1[2].Msg[2]}</p>
                     </div>
                     <div className="col-md-4">
                        <p>{data[0].Col1[2].Msg[3]}</p>
                     </div>
                  </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}