import React , { Component } from 'react';

import { data } from '../../data/data';

import './Product.css';

export default class Product extends Component{
    render(){
        const id= this.props.id;
        
        /* const data=this.state.data; */
        return(
            <div className="container">
                <div className="row SliderBlock" >
                    <div className="col-md-6 ">
                        <p className="Tfont Slider-p" style={{
                            color:data[id].PrimaryColor,
                            lineHeight:data[id].LineHeight}}>
                            {data[id].PrimaryText}
                            <p style={{
                                color:data[id].SecondaryColor,}}>
                                {data[id].SecondaryText}
                            </p>
                        </p>
                        <p className="Reg" style={{
                            color:data[id].RegConfig[0],
                            fontSize:data[id].RegConfig[1],
                            lineHeight:data[id].LineHeight,
                            }}>
                            {data[id].PrimaryReg}
                            <p style={{
                                color:data[id].RegConfig[0],
                                fontSize:data[id].RegConfig[2]
                            }}>
                                {data[id].SecondaryReg}
                            </p>
                        </p>        
                    </div>
                    <div className="col-md-6 imgSlider">
                        <img src={data[id].Image} alt="" width="85%"/>
                        <p className="RegMovil" style={{
                            color:data[id].RegConfig[0],
                            fontSize:data[id].RegConfig[1],
                            lineHeight:data[id].LineHeight,
                            }}>
                            {data[id].PrimaryReg}
                            <p style={{
                                color:data[id].RegConfig[0],
                                fontSize:data[id].RegConfig[2]
                            }}>
                                {data[id].SecondaryReg}
                            </p>
                        </p>      
                    </div>
                </div>
            </div>
        );
    }
}