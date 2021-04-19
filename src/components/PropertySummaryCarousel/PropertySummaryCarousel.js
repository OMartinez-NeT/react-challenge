import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PropertySummaryCarousel.css"
import PropertySummaryCard from "./PropertySummaryCard/PropertySummaryCard";


const PropertySummaryCarousel = (props) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };

      return (
        <div className={'product-summary-container'}>

          <h2> {props.title}</h2>
          <Slider {...settings}>
            <div>
                <PropertySummaryCard/>
            </div>
            <div>
                <PropertySummaryCard/>
            </div>
            <div>
                <PropertySummaryCard/>
            </div>
            <div>
                <PropertySummaryCard/>
            </div>
            <div>
                <PropertySummaryCard/>
            </div>
            <div>
                <PropertySummaryCard/>
            </div>
          </Slider>
        </div>
      );
}


export default PropertySummaryCarousel;
