import React from 'react'
import {Carousel} from "antd"

    const CarouselComp = ({ children , contentStyle}) => {
      return (
          <Carousel autoplay autoplaySpeed={3000} >
           {React.Children.map(children, (child) => (
              <div style={contentStyle}>
               {child}
              </div>
              ))}
          </Carousel>
        
      );
    };

    CarouselComp.defaultProps = {
      autoplay: true,
      autoplaySpeed: 3000,
      contentStyle: {
        
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
        background: "#364d79",
      },
    };
 

export default CarouselComp