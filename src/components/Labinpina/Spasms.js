import React, { Component } from 'react';

import './Labinpina.css';

import { data } from './dataTips';

export default class Spasms extends Component{
   render(){
      return(
         <div className="container col- col-md-10" style={{marginBottom:"5%"}}>
            <div className="row">
               <div className="col-10 col-md-6 SpasmsText" style={{}}>
                  <p className="Labtitle Tfont SpasmsTitleText" style={{}}>{data[0].Col1[0].Tip}</p>
                  <p className="Lfont SpasmssubText" style={{}}> {data[0].Col1[0].Msg} </p>
               </div>
               <div className="col-md-6">
                  <img className="MovilSpasmsWomanPic" src="/assets/img/SpasmWoman.png" alt="SpasmWoman"  />
               </div>
            </div>
         </div>
      );
   }
}