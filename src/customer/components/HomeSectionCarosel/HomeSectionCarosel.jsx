import React, { useState, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

const CarouselComponent = ({ data, sectionName }) => {
    const [activeindex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };
    const slidePrev = () => { carouselRef.current.slidePrev()}

    const slideNext = () => {carouselRef.current.slideNext()}

    const syncActiveIndex = ({ item }) => {
        setActiveIndex(item);
    };

    const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />);

    return (
        <div className="border">
            <h1 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h1>
            <div className="relative p-5">
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    activeIndex={activeindex}
                    onSlideChanged={syncActiveIndex}
                />
                {activeindex < items.length - 5 && (
                    <Button
                        variant="contained"
                        className="z-50 bg-white"
                        onClick={slideNext}
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            right: '0rem',
                            transform: 'translateX(50%) rotate(90deg)',
                            bgcolor: 'white',
                        }}
                        aria-label="next"
                    >
                        <KeyboardArrowLeftIcon
                            sx={{ transform: 'rotate(90deg)', color: 'black' }}
                        />
                    </Button>
                )}
                {activeindex !== 0 && (
                    <Button
                        variant="contained"
                        className="z-50 bg-white"
                        onClick={slidePrev}
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            left: '0rem',
                            transform: 'translateX(-50%) rotate(90deg)',
                            bgcolor: 'white',
                        }}
                        aria-label="prev"
                    >
                        <KeyboardArrowLeftIcon
                            sx={{ transform: 'rotate(-90deg)', color: 'black' }}
                        />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default CarouselComponent;
