import React, { Component } from 'react';

import './Solhidrex.css';

export default class Olders extends Component{
   render(){
      return(
         <div className="container col-md-8">
            <div className="row">
               <div className="col-md-6">
                  <p className="title">
                     ¿Cuales son los factores de riesgo de deshidratacion en adultos mayores?
                  </p>
               </div>
            </div>
            <div className="row">
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
               <div>
                  <img src="" alt="Olders" height="100%" width="100%" />
               </div>
            </div>
         </div>
      );
   }
}