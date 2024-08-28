import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import TESTIMONIALS from '../utils/testimonials';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialsCar() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: (
            <div>
                <FaArrowRight style={{ color: 'black', fontSize: '24px' }} />
            </div>
        ),
        prevArrow: (
            <div>
                <FaArrowLeft style={{ color: 'black', fontSize: '24px' }} />
            </div>
        ),
    };

    return (
        <div className='carousel'>
            <Slider {...settings}>
                {TESTIMONIALS.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <h2>{testimonial.name}</h2>
                        <p>{testimonial.feedback}</p>
                        <p><strong>{testimonial.role}</strong></p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
