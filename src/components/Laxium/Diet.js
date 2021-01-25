import React, { Component } from 'react';

import { data } from './dataTips';

export default class Diet extends Component{
   render(){
      return(
      <React.Fragment>
         <div className="LaxDietWeb container col-md-7" style={{textAlign:"center"}}>
            <p className="Laxtitle DietTitle" style={{}}>
                  {data[0].Col1[3].Tip}
            </p>
            <div className="row CareIconsBox" style={{}}>
               <div className="col-md-4" style={{}}>
                     <img src="/assets/img/Fruit.png" alt="fruit" height="80%" />
               </div>
               <div className="col-md-4" style={{}}>
                     <img src="/assets/img/Bottle.png" alt="bottle" height="80%" />
               </div>
               <div className="col-md-4" style={{}}>
                     <img src="/assets/img/Drops.png" alt="drops" height="80%" />
               </div>
            </div>
            <div className="row CareTextBox" style={{}}>
               <div className="col-md-4 CareText" style={{}}>
                     {data[0].Col1[3].Msg[0]}
               </div>
               <div className="col-md-4 CareText" style={{}}>
                     {data[0].Col1[3].Msg[1]}
               </div>
               <div className="col-md-4 CareText" style={{}}>
                     {data[0].Col1[3].Msg[2]}
               </div>
            </div>
         </div>
         <div className="LaxDietMov container col-md-7" style={{textAlign:"center"}}>
            <p className="Laxtitle DietTitle" style={{textAlign:"left"}}>
                  {data[0].Col1[3].Tip}
            </p>
            <div className="row CareIconsBox justify-content-center" style={{fontSize:"1.0rem",lineHeight:"1.1"}}>
               <div className="col-7" style={{marginBottom:"8%"}}>
                     <div>
                     <img src="/assets/img/Fruit.png" alt="fruit" width="40%" style={{marginBottom:"5%"}} />
                     </div>
                     {data[0].Col1[3].Msg[0]}
               </div>
               <div class="w-100"></div>
               <div className="col-7" style={{marginBottom:"8%"}}>
                     <div>
                     <img src="/assets/img/Bottle.png" alt="bottle" height="20%" 
                     style={{marginBottom:"5%"}}/>
                     </div>
                     {data[0].Col1[3].Msg[1]}
               </div>
               <div class="w-100"></div>
               <div className="col-7" style={{marginBottom:"8%"}}>
                     <div>
                     <img src="/assets/img/Drops.png" alt="drops" width="40%" 
                     style={{marginBottom:"5%"}}/>
                     </div>
                     {data[0].Col1[3].Msg[2]}
               </div>
            </div>
         </div>
      </React.Fragment>
      );
   }
}