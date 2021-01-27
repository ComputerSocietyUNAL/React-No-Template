import React , { Component } from 'react';

import './ApiMap.css';
import { data } from './data';

export default class PuntosVenta extends Component{
   render(){
      let idx=-1;
      let idy=-1;
      let idxx=-1;
      let idyy=-1;
      let elink =this.props.elink;
      return(
         <React.Fragment>
            <div 
               className="PuntosVentaWeb container col-11 justify-content-center"
               style={{textAlign:"center",}}
            >
               <p className="ModalText">
                  Puntos de venta
                  <span className="ModalSubtext">
                     online
                  </span>
               </p>
               {data[0].Online.map(()=>{
                  idx=idx+1;
                  return(
                     <a href={data[0].Online[idx].link[elink]}>
                        <img className="ModalPic"
                           src={data[0].Online[idx].img} 
                           alt={data[0].Online[idx].id} 
                        />
                     </a>
                  );
               })}
               <p className="ModalText">
                  Puntos de venta
               </p>
               {data[1].Phisic.map(()=>{
                  idy=idy+1;
                  return(
                     <a href={data[1].Phisic[idy].link[elink]}>
                        <img className="ModalPicP"
                           src={data[1].Phisic[idy].img} 
                           alt={data[1].Phisic[idy].id} 
                        />
                     </a>
                  );
               })}
               
            </div>
            <div 
               className="PuntosVentaMov container col-11 justify-content-center"
               style={{textAlign:"center"}}>
                  <p className="ModalText">
                     Puntos de venta
                     <span className="ModalSubtext">
                        online
                     </span>
                  </p>
               {data[0].Online.map(()=>{
                  idxx=idxx+1;
                  return(
                     <div className="container col-12 justify-content-center">
                        <div className="PopUpBlock">
                           <a href={data[0].Online[idxx].link[elink]}>
                           <img className="ModalPic"
                              src={data[0].Online[idxx].img} 
                              alt={data[0].Online[idxx].id} 
                           />
                           </a>
                        </div>
                     </div>
                  );
               })}
               <p className="ModalText">
                     Puntos de venta
               </p>
               <div className="container col-10 justify-content-center">
                  {data[1].Phisic.map(()=>{
                     idyy=idyy+1;
                     return(
                           <div className="PopUpBlockP">
                              <a href={data[1].Phisic[idyy].link[elink]}>
                              <img className="ModalPicP"
                                 src={data[1].Phisic[idyy].img} 
                                 alt={data[1].Phisic[idyy].id} 
                              />
                              </a>
                           </div>
                     );
                  })}
               </div>
            </div>
         </React.Fragment>
      );
   }
}