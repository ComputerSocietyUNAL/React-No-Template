import React , { Component } from 'react';
import Carousel from "react-multi-carousel";
import { data } from '../../data/data';
import Product from './Product';

import './HomeSlider.css';
import "react-multi-carousel/lib/styles.css";

export default class HomeSlider extends Component{
    constructor(props) {
        super(props);
        this.state= {
            data:data,
        }
    }

    render(){
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
        let id=-1;
        return(
            <div className="container" >
                <Carousel 
                    autoPlay={true}
                    autoPlaySpeed={8000}
                    arrows={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    draggable={false}
                    customTransition="all .4"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    /* removeArrowOnDeviceType={[ "mobile"]} */
                    deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding"
                    centerMode={false}
                    renderDotsOutside={false}
                >
                    {
                        data.map(() =>{
                            id=id+1
                            return(
                                <div>
                                    <Product id={id} /* data={this.state.data} */ />
                                </div>
                            );
                        })
                    }
                </Carousel>
            </div>
        );
    }
}
