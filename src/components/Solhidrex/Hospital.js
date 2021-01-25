import React, { Component } from 'react';

import './Solhidrex.css';

export default class Hospital extends Component{
   render(){
      return(
         <React.Fragment>
         <div className="HospitalBlock" style={{
            background:"url(/assets/img/Hospital_back.png)",
            backgroundSize:"cover",
            }}>
            <div className="container col-md-7 HospitalBox">
               <div className="row">
                  <div className="col-md-7">
                     <p className="title" style={{fontSize:"2.6rem"}}>¿Cuando llevar a un niño deshidratado al hospital?</p>
                  </div>
                  <div className="col-md-4">
                     <img src="/assets/img/Sol_Heart.png" alt="heart" width="65%" style={{marginTop:"-10%",marginLeft:"25%"}} />
                  </div>
               </div>
               <div className="row cellText" style={{}}>
                  <div className="col-md-4 HospitalCellLeft">
                     <p>En caso de deshidratación severa</p>
                  </div>
                  <div className="col-md-4 HospitalCellMid">
                     <p>En caso de alto riesgo de deshidratación: deposición aguada, vómito frecuente, poca ingesta de líquido.</p>
                  </div>
                  <div className="col-md-4">
                     <p>En caso de riego de complicaciones: otras enfermedades subyacentes como diabetes o insuficiencia renal, fiebre y desnutrición.</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="HospitalMovilBlock" style={{
            }}>
               <img className="HospitalPicBack" src="/assets/img/HospitalMovilBack.png" alt="" />
            <div className="container col-md-7 HospitalBox">
               <div className="row">
                  <div className="col-8 col-md-7">
                     <p className="title" style={{paddingLeft:"10%",fontSize:"1.2rem"}}>
                        ¿Cuando llevar a un niño deshidratado al hospital?
                     </p>
                  </div>
                  <div className="col-3 col-md-4">
                     <img src="/assets/img/Sol_Heart.png" alt="heart" width="200%" style={{marginTop:"-100%",marginLeft:"-30%"}} />
                  </div>
               </div>
               <div className="row cellText" style={{fontSize:"0.8rem"}}>
                  <div className="col-md-4 HospitalCellLeft">
                     <p>
                        En caso de deshidratación severa
                     </p>
                  </div>
                  <div className="col-md-4 HospitalCellMid">
                     <p>
                        En caso de alto riesgo de deshidratación: deposición aguada, vómito frecuente, poca ingesta de líquido.
                     </p>
                  </div>
                  <div className="col-md-4">
                     <p>En caso de riego de complicaciones: otras enfermedades subyacentes como diabetes o insuficiencia renal, fiebre y desnutrición.</p>
                  </div>
               </div>
            </div>
         </div>
         </React.Fragment>
      );
   }
}