import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/swiper-bundle.css';
import GALLERY from '../utils/gallery';

export default function GalleryArt() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const openCarousel = (index) => {
        setCurrentSlide(index);
        setIsOpen(true);
    };

    const closeCarousel = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className="gallery">
                {GALLERY.map((item, index) => (
                    <img
                        key={item.id}
                        src={item.photo}
                        alt={`Gallery Image ${item.id}`}
                        className="gallery-image"
                        onClick={() => openCarousel(index)}
                    />
                ))}
            </div>

            {isOpen && (
                <div className="carousel-overlay">
                    <button className="close-button" onClick={closeCarousel}>×</button>
                    <Swiper
                        initialSlide={currentSlide}
                        spaceBetween={10}
                        slidesPerView={1}
                        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Navigation]}
                    >
                        {GALLERY.map((item) => (
                            <SwiperSlide key={item.id} className='ahah'>
                                <img src={item.photo} alt={`Slide ${item.id}`} className="carousel-image" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-button-prev">
                        <FaChevronLeft />
                    </div>
                    <div className="swiper-button-next">
                        <FaChevronRight />
                    </div>
                    {/* Нумерация слайдов */}
                    <div className="slide-counter">
                        {currentSlide + 1} / {GALLERY.length}
                    </div>
                </div>
            )}
        </div>
    );
}