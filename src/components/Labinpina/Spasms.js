import React, { Component } from 'react';

import './Labinpina.css';

import { data } from './dataTips';

export default class Spasms extends Component{
   render(){
      return(
         <div className="container col-md-10" style={{marginBottom:"5%"}}>
            <div className="row">
               <div className="col-md-6" style={{padding:"0% 5%"}}>
                  <p className="Labtitle Tfont" style={{fontSize:"2.6rem"}}>{data[0].Col1[0].Tip}</p>
                  <p className="Lfont" style={{fontSize:"1.9rem"}}> {data[0].Col1[0].Msg} </p>
               </div>
               <div className="col-md-6">
                  <img src="/assets/img/SpasmWoman.png" alt="SpasmWoman" width="100%" />
               </div>
            </div>
         </div>
      );
   }
}