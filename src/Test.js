import React, { useState } from 'react';
import { SliderData } from './SliderData';
import './Test.css';

const Test = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };


    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            <i class="left fas fa-chevron-left" onClick={prevSlide}></i>
            <i class="right fas fa-chevron-right" onClick={nextSlide}></i>
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                        < img className='image' src={slide.image} alt="" />)}
                    </div>
                )
            }
            )}
        </section>
    );
};


export default Test;
