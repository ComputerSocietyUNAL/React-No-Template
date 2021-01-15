import React , { Component } from 'react';

export default class Symptoms extends Component{

   render(){
      return(
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <img src="" alt="Doctora" height="100%" width="100%"/>
               </div>
               <div className="col-md-6" style={{textAlign:"center"}}>
                  <p className="title">
                     ¿Cuales son los sintomas de la deshidratación?
                  </p>
                  <ul style={{textAlign: "left",display:"inline-block"}}>
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