import React, { Component } from 'react';

import './Diarrea.css';

import { data } from './dataTips';

export default class Treatment extends Component{
   render(){
      return(
         <React.Fragment>
            <div className="treatmentWeb">

            </div>
            <div className="treatmentMov" style={{width:"100%"}}>
               <div className="container col-12" >
                  <p 
                  style={{
                     fontSize:data[0].Fsize,
                     color:data[0].PrimaryColor,
                     lineHeight:data[0].LineHeight
                  }}>
                  {data[0].PrimaryText}
                     <p
                     style={{
                        color:data[0].SecondaryColor,
                     }}>
                        {data[0].SecondaryText}
                     </p>
                  </p>
                  <p
                     style={{
                        color:data[0].PrimaryColor,
                        fontSize:"1.6rem"
                     }}>
                     {data[0].TertiaryText}
                  </p>
                  <img className="DiarreaMainPic" src={data[0].Image} alt="" />
                  <p
                     style={{
                        fontSize:data[0].RegConfig[1],
                        color:data[0].RegConfig[0],
                        lineHeight:data[0].LineHeight
                     }}
                  >
                     {data[0].PrimaryReg}
                     <p 
                        style={{
                           fontSize:data[0].RegConfig[2]
                        }}>
                        {data[0].SecondaryReg}
                     </p> 
                  </p>
                  
               </div>
            </div>
         </React.Fragment>
      );
   }
}