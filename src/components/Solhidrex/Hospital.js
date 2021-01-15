import React, { Component } from 'react';

import './Solhidrex.css';

export default class Hospital extends Component{
   render(){
      return(
         <div className="container col-md-6 " style={{marginBottom:"5%"}} >
            <div className="row">
               <div className="col-md-6">
                  <p className="title">¿Cuando llevar a un niño deshidratado al hospital?</p>
               </div>
               <div className="col-md-6">
                  <img src="" alt="heart" height="100%" width="100%" />
               </div>
            </div>
            <div className="row">
               <div className="col-md-4" style={{borderRight:"2px solid #D84962"}}>
                  <p>En caso de deshidratación severa</p>
               </div>
               <div className="col-md-4" style={{borderRight:"2px solid #D84962"}}>
                  <p>En caso de alto riesgo de deshidratación: deposición aguada, vómito frecuente, poca ingesta de líquido.</p>
               </div>
               <div className="col-md-4">
                  <p>En caso de riego de complicaciones: otras enfermedades subyacentes como diabetes o insuficiencia renal, fiebre y desnutrición.</p>
               </div>
            </div>
         </div>
      );
   }
}