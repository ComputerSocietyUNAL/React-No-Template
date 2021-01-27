import React , { Component } from 'react';
import Carousel from "react-multi-carousel";
import { data } from '../../data/labinpina';
import Products from './Products';
import ListTips from './ListTips';
import Spasms from './Spasms';
import Causes from './Causes';
import Medic from './Medic';
import Tips from './Tips';
import ApiMap from '../ApiMap/ApiMap';


export default class Labinpina extends Component {
    render(){
        let id =0;
        let elink=2;
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
            <div style={{width:"100%"}}>
                <div className="container" style={{marginBottom:"10%"}}>
                    <div className="row" >
                        <div className="col-10 col-md-6">
                            <p className="Tfont Labtitletext" style={{
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
                                lineHeight:data[id].LineHeight
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
                        <div className="col-12 col-md-6">
                            <Carousel 
                                autoPlay={false}
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
                            <p className="LabRegMovil" style={{
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
                <div className="ListTipsBlock" style={{
                    background:"url(/assets/img/ProductBack_04.png)",
                    backgroundSize:"cover",
                    }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-md-6 MainLabiBox">
                                <img className="LabPic" src="/assets/img/Labinpina.png" alt="Labinpina"/>
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
                            <div className="col-md-6 LabListBox" style={{}}>
                                <img src="/assets/img/Labinpina_spec.png" alt="Dimenol" width="100%" />
                                <ListTips/>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div className="ListMovTipsBlock col-12" style={{
                    background:"url(/assets/img/ProductBack_04.png)",
                    backgroundSize:"cover",
                    }}>
                        <img className="LabSpec" src="/assets/img/Labinpina_spec.png" alt="Dimenol" width="100%" />
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 MainLabiBox">
                                <img className="LabPic" src="/assets/img/Labinpina.png" alt="Labinpina"/>
                                <ListTips/>
                                <p className="MovReg" style={{
                                }}>
                                    {data[0].PrimaryReg}
                                    <p style={{
                                    }}>
                                        {data[0].SecondaryReg}
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>                    
                </div>
                <Spasms/>
                <Causes/>
                <Medic/>
                <Tips/>
                <ApiMap elink={elink}/>
            </div>
        );
    }
}