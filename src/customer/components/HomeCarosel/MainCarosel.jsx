import React from "react";
import { mainCarouselData } from "./MainCaroselData";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarosel = () => {
    const items = mainCarouselData.map((item)=> <img className="cursor-pointer -z-10" src={item.image} alt="" role="presentation"/>)
    return(
        <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        />
    )
}
export default MainCarosel;