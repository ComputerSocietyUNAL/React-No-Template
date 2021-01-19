import React, { Component } from 'react';

import './Dimenol.css';

import { data } from './dataTips';

export default class Mareo extends Component{
   render(){
      return(
         <div className="container" style={{marginBottom:"5%"}}>
            <div className="row">
               <div className="col-md-6" style={{padding:"18% 0%"}}>
                  <p className="Dimtitle">{data[0].Col1[0].Tip}</p>
                  <p>{data[0].Col1[0].Msg}</p>
               </div>
               <div className="col-md-6">
                  <img src="/assets/img/MareoWoman.png" alt="MareoWoman" width="100%" />
               </div>
            </div>
         </div>
      );
   }
}