import React , { Component } from 'react';

export default class Symptoms extends Component{

   render(){
      return(
         <div className="container col-11 col-md-11 SympBlock" style={{}}>
            <div className="row">
                  <p className="SymMovilTitle">
                     ¿Cuales son los sintomas de la deshidratación?
                  </p>
               <div className="col-6 col-md-6 ">
                  <img className="DoctoraPic" src="/assets/img/SolDoctora.png" alt="Doctora" width="90%"/>
               </div>
               <div className="col-6 col-md-6 SympTextBlock" style={{}}>
                  <p className="SymTitle" style={{}}>
                     ¿Cuales son los sintomas de la deshidratación?
                  </p>
                  <ul className="SymList" style={{}}>
                     <li>Reducción de la orina</li>
                     <li>Piel, boca y lengua secas.</li>
                     <li>Ojos hundidos</li>
                     <li>Piel de aspecto grisáceo</li>
                     <li>Sed</li>
                     <li>Orina de color oscuro</li>
                     <li>Fatiga</li>
                     <li>Mareo</li>
                     <li>Incapacidad de sudar</li>
                  </ul>
               </div>
            </div>
         </div>
      );
   }
}