// TestimonialsCar.js
import React from 'react';
import Slider from 'react-slick';
import profile from '../images/profile.jpg';
import TESTIMONIALS from '../utils/testimonials';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialsCar() {
    
    const settings = {
        dots: true, // Включение точек навигации
        infinite: true, // Бесконечная прокрутка
        speed: 500, // Скорость перехода между слайдами
        slidesToShow: 1, // Количество отображаемых слайдов
        slidesToScroll: 1, // Количество слайдов, которые прокручиваются за один раз
        autoplay: true, // Автоматическое воспроизведение слайдов
        autoplaySpeed: 2500, // Скорость автоматического воспроизведения (в миллисекундах)
        pauseOnHover: true, // Остановка воспроизведения при наведении мыши
    };

    // Отображение карусели с отзывами
    return (
        <div className='carousel'>
            <Slider {...settings}>
                {TESTIMONIALS.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial">
                        <img className='testimonial__img' src={profile} alt="" />
                        <h2 className='testimonial__name'>{testimonial.name}</h2>
                        <p className='testimonial__body'>"{testimonial.feedback}"</p>
                        <br />
                        <p className='testimonial__role'><strong>{testimonial.role}</strong></p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
