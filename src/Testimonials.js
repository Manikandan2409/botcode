import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Testimonials.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Testinomial() {
    return (
        <div className="container my-5">
            <br />
            <br />
            <br />
            <br />
            <h2 className="text-center mb-4">Testimonials</h2>
            <div className="text-center">
                <p className="sub-heading mb-4">
                Our customers testimonials highlight how we make laundry day easier and more enjoyable. From the convenience of doorstep pick-up and delivery to the exceptional care we take with each garment, their stories reflect our commitment to quality, reliability, and customer satisfaction. Join our growing community of happy clients and share your experience with us!
                </p>
            </div>
            <div className="swiper-container">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="testimonial">
                            <p>"Exceptional service! Scheduling pick-up is easy. My clothes always come back looking fantastic."</p>
                            <p className="testimonial-author">- Sarah L.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial">
                            <p>"With my busy schedule, this service is a lifesaver. Prompt delivery and excellent customer service. Truly convenient!"</p>
                            <p className="testimonial-author">- John D.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial">
                            <p>"They handled my delicate fabrics with such care. I'm extremely pleased. My clothes have never looked better!"</p>
                            <p className="testimonial-author">- Emily W.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial">
                            <p>"Always on time and great communication. They remember my preferences, making me feel valued. Couldn't be happier!"</p>
                            <p className="testimonial-author">- David R.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial">
                            <p>"Best laundry service I've used. Quality and professionalism exceed my expectations. They are truly top-notch."</p>
                            <p className="testimonial-author">- Maria H.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Testinomial;
