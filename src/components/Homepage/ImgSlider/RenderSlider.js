import ImageSlider from "./Slider";
import Slider from "react-slick";
import { useRef } from "react";

export default function RenderSlider({props}){
    var sliderRef = useRef(null);
    
    const settings = {
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      adaptiveHeight: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      focusOnSelect: true,
      initialSlide: 0,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    
    const renderBox = props.map(items => {
        return ( 
            <ImageSlider 
                key = {items.id}
                id = {items.id}
                date = {items.date}
                link = {items.link}
            />
        );
    });
    const left = "<";
    const right = ">";
    console.log(sliderRef.current);
    return(
        <div className="container">
            
            <Slider ref={sliderRef} {...settings} className="container--vidSlider">
                {renderBox}
            </Slider>
            <div className="button--Flex">
            <button className="container--button" onClick={() => sliderRef.current.slickPrev()}>{left}</button>
            <button className="container--button" onClick={() => sliderRef.current.slickNext()}>{right}</button>
            </div>
        </div>
            
            
    )
}