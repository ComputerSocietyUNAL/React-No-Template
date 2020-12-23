import React, { Component } from 'react';

import './Home.css';

import { data } from '../data/data';


export default class Home extends Component {
    
    render(){
        let current=0;
        return(
            <div className="row" style={{width:"100%"}}>
                    <div className="col-md-1" style={{marginTop:"8%"}}>
                        <p className="link-text">Puntos de Venta</p>
                    </div>
                    <div className="col-md-10 offset-md-1 header">
                        
                        <img src="/assets/img/Header_1.png" alt="" height="200" 
                            style={{
                                position:"absolute",
                                top:"10%",
                                left:"0%"
                        }} />

                        <img src="/assets/img/Header_2.png" alt=""  width="90%"
                            style={{
                                marginBottom:"5%"
                        }} />
                        <img src="/assets/img/Header_3.png" alt="" width="45%" 
                            style={{
                                position:"absolute",
                                top:"40%",
                                left:"-10%"
                        }} />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p style={{
                                    color:data[current].PrimaryColor,
                                    fontSize:data[current].Fsize,}}>
                                        {data[current].PrimaryText}
                                    <p style={{
                                        color:data[current].SecondaryColor,
                                        fontSize:data[current].Fsize}}>
                                        {data[current].SecondaryText}
                                    </p>
                                </p>
                                <p style={{
                                    color:data[current].RegConfig[0],
                                    fontSize:data[current].RegConfig[1]
                                }}>
                                    {data[current].PrimaryReg}
                                    <p style={{
                                        color:data[current].RegConfig[0],
                                        fontSize:data[current].RegConfig[2]
                                    }}>
                                        {data[current].SecondaryReg}
                                    </p>
                                </p>
                                
                            </div>
                            <div className="col-md-6">
                                <img src="/assets/img/Solhidrex_01.png" alt="" width="85%"/>
                            </div>
                        </div>
                    </div>
                    
            </div>
        );
    }
}