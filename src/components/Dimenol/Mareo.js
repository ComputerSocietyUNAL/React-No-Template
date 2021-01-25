import React, { Component } from 'react';

import './Dimenol.css';

import { data } from './dataTips';

export default class Mareo extends Component{
   render(){
      return(
         <React.Fragment>
            <div className="DimMareoWeb container col-md-10 MareoBlock">
               <div className="row">
                  <div className="col-md-6 MareoTextBlock">
                     <p className="Dimtitle">{data[0].Col1[0].Tip}</p>
                     <p className="MareoText">{data[0].Col1[0].Msg}</p>
                  </div>
                  <div className="col-md-6">
                     <img src="/assets/img/MareoWoman.png" alt="MareoWoman" width="100%" />
                  </div>
               </div>
            </div>
            <div className="DimMareoMov container col-md-10 MareoBlock">
               <div className="row">
                  <div className="col-12 MareoTextBlock">
                     <p className="Dimtitle">{data[0].Col1[0].Tip}</p>
                     <p className="MareoText">{data[0].Col1[0].Msg}</p>
                  </div>
                  <div className="col-12">
                     <img className="MareoWomanMov" src="/assets/img/MareoWomanMov.png" alt="MareoWoman" width="90%" />
                  </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}