import React , { Component } from 'react';
import Carousel from "react-multi-carousel";
import { data } from '../../data/dimenol';
import Products from './Products';
import ListTips from './ListTips';
import Mareo from './Mareo';
import Causes from './Causes';
import Medic from './Medic';
import Tips from './Tips';


export default class Dimenol extends Component{
    render(){
        let id =0;
        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
              },
              tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
              },
              mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
              }
        };
        return(
            <div style={{width:"100%",lineHeight:"1.2"}}>
                <div className="container" style={{marginBottom:"10%"}}>
                    <div className="row" >
                        <div className="col-md-6">
                            <p className="Tfont" style={{
                                color:data[id].PrimaryColor,
                                fontSize:data[id].Fsize,
                                lineHeight:data[id].LineHeight}}>
                                {data[id].PrimaryText}
                                <p style={{
                                    color:data[id].SecondaryColor,
                                    fontSize:data[id].Fsize}}>
                                    {data[id].SecondaryText}
                                </p>
                            </p>
                            <p className="DimReg" style={{
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
                        <div className="col-md-6">
                            <Carousel 
                                autoPlay={true}
                                autoPlaySpeed={4000}
                                arrows={true}
                                showDots={true}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                draggable={false}
                                customTransition="all 1s "
                                transitionDuration={900}
                                containerClass="carousel-container"
                                /* removeArrowOnDeviceType={[ "mobile"]} */
                                deviceType={this.props.deviceType}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding"
                                centerMode={false}
                                renderDotsOutside={false}
                            >
                                <Products/>
                                <div>2</div>
                                <div>3</div>
                            </Carousel>
                            <p className="DimMovReg" style={{
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
                <div className="DimMainProd" style={{
                    background:"url(/assets/img/ProductBack_03.png)",
                    backgroundSize:"cover",
                    }}>
                    <div className="container col-md-9">
                        <div className="row">
                            <div className="col-md-6" style={{marginLeft:"0%",marginTop:"-10%",marginRight:"10%"}}>
                                <img src="/assets/img/Dimenol.png" alt="Dimenol" height="60%" />
                                <p style={{
                                    paddingRight:"25%",
                                    fontSize:data[0].RegConfig[1]
                                }}>
                                    {data[0].PrimaryReg}
                                    <p style={{
                                        fontSize:data[0].RegConfig[2]
                                    }}>
                                        {data[0].SecondaryReg}
                                    </p>
                                </p>
                            </div>
                            <div className="col-md-6" style={{marginTop:"-5%", marginLeft:"-10%",paddingRight:"0%"}}>
                                <img src="/assets/img/Dimenol_spec.png" alt="Dimenol" width="100%" />
                                <ListTips/>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div className="DimMainMovProd" style={{
                    background:"url(/assets/img/ProductBack_03.png)",
                    backgroundSize:"cover",
                    }}>
                        <img src="/assets/img/Dimenol_spec.png" alt="Dimenol" width="100%" style={{marginTop:"-10%"}}/>
                    <div className="container col-12">
                        <div className="row justify-content-center">
                            <div className="col-10" style={{marginTop:"-0%"}}>
                                <img src="/assets/img/Dimenol.png" alt="Dimenol" width="100%" />
                            </div>
                            <div className="col-8" style={{marginTop:"-10%", marginLeft:"-0%"}}>
                                <ListTips/>
                            </div>
                            <p style={{
                                marginLeft:"5%",
                                paddingRight:"0%",
                                fontSize:"0.8rem"
                            }}>
                                {data[0].PrimaryReg}
                                <p style={{
                                    fontSize:"0.7rem"
                                }}>
                                    {data[0].SecondaryReg}
                                </p>
                            </p>
                        </div>
                    </div>                    
                </div>
                <Mareo/>
                <Causes/>
                <Medic/>
                <Tips/>
            </div>
        );
    }
}