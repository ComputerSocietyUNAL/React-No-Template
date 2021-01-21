import React, { Component } from 'react';

import './Solhidrex.css';

export default class Olders extends Component{
   render(){
      return(
         <div className="container">
            <div className="col-md-10 OldersBox" style={{}}>
               <div className="row">
                  <div className="col-md-8">
                     <p className="title" style={{marginBottom:"10%",fontSize:"2.0rem",paddingLeft:"5%"}}>
                        ¿Cuales son los factores de riesgo de deshidratacion en adultos mayores?
                     </p>
                  </div>
               </div>
               <div className="row" >
                  <div className="col-md-6">
                     <ul className="OldList">
                        <li>Edad mayor de 85 años</li>
                        <li>Reduccion de la sensacion de sed y del apetito</li>
                        <li>Problemas de comunicacion.</li>
                        <li>Trastornos cognitivos</li>
                        <li>Dificultades para comer</li>
                        <li>Consumo de medicamentos como diureticos, laxantes o sedantes.</li>
                        <li>Problemas clinicos agudos como fiebre, vomito y diarrea.</li>
                     </ul>
                  </div>
                  <img src="/assets/img/Olders.png" alt="Olders" width="65%" className="OldersPic"/>
               </div>
            </div>
         </div>
      );
   }
}