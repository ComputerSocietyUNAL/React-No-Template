import React, { Component } from 'react';

import './Solhidrex.css';

export default class Hospital extends Component{
   render(){
      return(
         <div style={{
            background:"url(/assets/img/Hospital_back.png)",
            backgroundSize:"cover",
            paddingTop:"8%",
            paddingBottom:"10%",
            marginBottom:"5%"
            }}>
            <div className="container col-md-6" 
               style={{
                     marginBottom:"5%",
                     backgroundColor:"white",
                     }} >
               <div className="row">
                  <div className="col-md-6">
                     <p className="title">¿Cuando llevar a un niño deshidratado al hospital?</p>
                  </div>
                  <div className="col-md-6">
                     <img src="/assets/img/Sol_Heart.png" alt="heart" width="50%" />
                  </div>
               </div>
               <div className="row" style={{paddingBottom:"5%"}}>
                  <div className="col-md-4" style={{borderRight:"2px solid #D84962",}}>
                     <p>En caso de deshidratación severa</p>
                  </div>
                  <div className="col-md-4" style={{borderRight:"2px solid #D84962",}}>
                     <p>En caso de alto riesgo de deshidratación: deposición aguada, vómito frecuente, poca ingesta de líquido.</p>
                  </div>
                  <div className="col-md-4">
                     <p>En caso de riego de complicaciones: otras enfermedades subyacentes como diabetes o insuficiencia renal, fiebre y desnutrición.</p>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}