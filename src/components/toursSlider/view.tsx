import Slider from "react-slick";
import { TourCardLayout } from '../tourCard/view';
import { useRef, useEffect } from 'react';
import { settings } from './settings';

export function ToursSliderLayout(props: any) {
    const { slides, diraction } = props;
    const customSlider: any = useRef();

    const goNext = () => customSlider?.current?.slickNext();
    const goPrev = () => customSlider?.current?.slickPrev()

    useEffect(() => {
        diraction === 'next' && goNext();
        diraction === 'prev' && goPrev();
    }, [diraction]);

    return <div>
    <Slider {...settings} ref={(slider: any) => customSlider.current = slider}>
        {slides.map((flight: any, index: number) => <div key={flight.id}>
            <TourCardLayout isFavorite={flight.isFavorite} id={flight.id} name={flight.name} index={index} description={flight.description} />
        </div>)}
    </Slider>
  </div>
};