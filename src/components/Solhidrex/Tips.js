import React, { Component } from 'react';

import './Solhidrex.css';

export default class Tips extends Component{
   render(){
      return(
         <div className="container col-md-7">
            <p className="title" style={{textAlign:"center", fontSize:"2.0rem"}}> Tips para controlar la deshidratación</p>
            <div className="row">
               <div className="col-md-4">
                  <img src="" alt="paleta" height="100%" width="100%" />
                  <p>Chupar hielo o una paleta puede ayudar a incrementar la ingesta de líquidos.</p>
               </div>
               <div className="col-md-4">
                  <img src="" alt="gotas" height="100%" width="100%" />
                  <p>En caso de nauseas, se recomienda tomar pequeños tragos de agua.</p>
               </div>
               <div className="col-md-4">
                  <img src="" alt="botella" height="100%" width="100%" />
                  <p>Tomar soluciones de rehidratacion oral para reemplazar las que ha perdido el cuerpo.</p>
               </div>
            </div>
         </div>
      );
   }
}