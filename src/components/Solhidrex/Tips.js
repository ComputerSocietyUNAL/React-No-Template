import React, { Component } from 'react';

import './Solhidrex.css';

export default class Tips extends Component{
   render(){
      return(
         <div className="container col-md-6" style={{textAlign:"center"}}>
            <p className="title" style={{fontSize:"3.0rem"}}> Tips para controlar la deshidratación</p>
            <div className="row" style={{}}>
               <div className="col-md-4">
                  <img src="/assets/img/Sol_Ice.png" alt="paleta" width="25%" />
               </div>
               <div className="col-md-4">                  
                  <img src="/assets/img/Sol_Drops.png" alt="gotas" width="50%" />
               </div>
               <div className="col-md-4">            
                  <img src="/assets/img/Sol_Bottle.png" alt="botella"  width="50%" />
               </div>
            </div>
            <div className="row" style={{fontSize:"1.5rem"}}>
               <div className="col-md-4">
                  <p>Chupar hielo o una paleta puede ayudar a incrementar la ingesta de líquidos.</p>
               </div>
               <div className="col-md-4">
                  <p>En caso de nauseas, se recomienda tomar pequeños tragos de agua.</p>
               </div>
               <div className="col-md-4">
                  <p>Tomar soluciones de rehidratacion oral para reemplazar las que ha perdido el cuerpo.</p>
               </div>
            </div>
            
         </div>
      );
   }
}