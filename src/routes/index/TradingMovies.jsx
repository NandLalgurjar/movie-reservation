import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';


const TradingMovies = () => {

    return (
        <section className="pb-5 pt-0 pt-lg-5">
            <div className="container">
                {/* <!-- Title --> */}
                <div className="row mb-4">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="fs-1">Our Trending Courses</h2>
                        <p className="mb-0">Check out most 🔥 courses in the market</p>
                    </div>
                </div>
                <div className="row">
                    {/* <!-- Slider START --> */}
                    <Swiper
                        slidesPerView={3}      // Show 3 slides at a time
                        spaceBetween={30}      // Space between slides (optional)
                        loop={true}         // Enable loop mode (optional)
                        autoplay={{
                            delay: 2500,         // Delay between slides in ms
                            disableOnInteraction: false, // Keep autoplay active even after interaction
                        }}
                        pagination={{ clickable: true }}  // Enable pagination
                        modules={[Pagination, Autoplay]}  // Import Pagination and Autoplay modules
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="card action-trigger-hover border bg-transparent">
                                {/* <!-- Image --> */}
                                <img src="assets/images/courses/4by3/15.jpg" className="card-img-top" alt="course image" />
                                {/* <!-- Card body --> */}
                                <div className="card-body pb-0">
                                    {/* <!-- Badge and favorite --> */}
                                    <div className="d-flex justify-content-between mb-3">
                                        <span className="hstack gap-2">
                                            <a href="#" className="badge bg-primary bg-opacity-10 text-primary">Development</a>
                                            <a href="#" className="badge bg-dark text-white">All level</a>
                                        </span>
                                        <a href="#" className="h6 fw-light mb-0"><i className="far fa-bookmark"></i></a>
                                    </div>
                                    {/* <!-- Title --> */}
                                    <h5 className="card-title"><a href="#">Angular – The Complete Guide (2021 Edition)</a></h5>
                                    {/* <!-- Rating --> */}
                                    <div className="d-flex justify-content-between mb-2">
                                        <div className="hstack gap-2">
                                            <p className="text-warning m-0">4.0<i className="fas fa-star text-warning ms-1"></i></p>
                                            <span className="small">(3500)</span>
                                        </div>
                                        <div className="hstack gap-2">
                                            <p className="h6 fw-light mb-0 m-0">4500</p>
                                            <span className="small">(Student)</span>
                                        </div>
                                    </div>
                                    {/* <!-- Time --> */}
                                    <div className="hstack gap-3">
                                        <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>12h 45m</span>
                                        <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>65 lectures</span>
                                    </div>
                                </div>
                                {/* <!-- Card footer --> */}
                                <div className="card-footer pt-0 bg-transparent">
                                    <hr />
                                    {/* <!-- Avatar and Price --> */}
                                    <div className="d-flex justify-content-between align-items-center">
                                        {/* <!-- Avatar --> */}
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-sm">
                                                <img className="avatar-img rounded-1" src="assets/images/avatar/04.jpg" alt="avatar" />
                                            </div>
                                            <p className="mb-0 ms-2"><a href="#" className="h6 fw-light mb-0">Billy Vasquez</a></p>
                                        </div>
                                        {/* <!-- Price --> */}
                                        <div>
                                            <h4 className="text-success mb-0 item-show">$255</h4>
                                            <a href="#" className="btn-sm btn-success-soft item-show-hover"><i className="fas fa-shopping-cart me-2"></i>Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card action-trigger-hover border bg-transparent">
                                {/* <!-- Image --> */}
                                <img src="assets/images/courses/4by3/15.jpg" className="card-img-top" alt="course image" />
                                {/* <!-- Card body --> */}
                                <div className="card-body pb-0">
                                    {/* <!-- Badge and favorite --> */}
                                    <div className="d-flex justify-content-between mb-3">
                                        <span className="hstack gap-2">
                                            <a href="#" className="badge bg-primary bg-opacity-10 text-primary">Development</a>
                                            <a href="#" className="badge bg-dark text-white">All level</a>
                                        </span>
                                        <a href="#" className="h6 fw-light mb-0"><i className="far fa-bookmark"></i></a>
                                    </div>
                                    {/* <!-- Title --> */}
                                    <h5 className="card-title"><a href="#">Angular – The Complete Guide (2021 Edition)</a></h5>
                                    {/* <!-- Rating --> */}
                                    <div className="d-flex justify-content-between mb-2">
                                        <div className="hstack gap-2">
                                            <p className="text-warning m-0">4.0<i className="fas fa-star text-warning ms-1"></i></p>
                                            <span className="small">(3500)</span>
                                        </div>
                                        <div className="hstack gap-2">
                                            <p className="h6 fw-light mb-0 m-0">4500</p>
                                            <span className="small">(Student)</span>
                                        </div>
                                    </div>
                                    {/* <!-- Time --> */}
                                    <div className="hstack gap-3">
                                        <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>12h 45m</span>
                                        <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>65 lectures</span>
                                    </div>
                                </div>
                                {/* <!-- Card footer --> */}
                                <div className="card-footer pt-0 bg-transparent">
                                    <hr />
                                    {/* <!-- Avatar and Price --> */}
                                    <div className="d-flex justify-content-between align-items-center">
                                        {/* <!-- Avatar --> */}
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-sm">
                                                <img className="avatar-img rounded-1" src="assets/images/avatar/04.jpg" alt="avatar" />
                                            </div>
                                            <p className="mb-0 ms-2"><a href="#" className="h6 fw-light mb-0">Billy Vasquez</a></p>
                                        </div>
                                        {/* <!-- Price --> */}
                                        <div>
                                            <h4 className="text-success mb-0 item-show">$255</h4>
                                            <a href="#" className="btn-sm btn-success-soft item-show-hover"><i className="fas fa-shopping-cart me-2"></i>Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card action-trigger-hover border bg-transparent">
                                {/* <!-- Image --> */}
                                <img src="assets/images/courses/4by3/15.jpg" className="card-img-top" alt="course image" />
                                {/* <!-- Card body --> */}
                                <div className="card-body pb-0">
                                    {/* <!-- Badge and favorite --> */}
                                    <div className="d-flex justify-content-between mb-3">
                                        <span className="hstack gap-2">
                                            <a href="#" className="badge bg-primary bg-opacity-10 text-primary">Development</a>
                                            <a href="#" className="badge bg-dark text-white">All level</a>
                                        </span>
                                        <a href="#" className="h6 fw-light mb-0"><i className="far fa-bookmark"></i></a>
                                    </div>
                                    {/* <!-- Title --> */}
                                    <h5 className="card-title"><a href="#">Angular – The Complete Guide (2021 Edition)</a></h5>
                                    {/* <!-- Rating --> */}
                                    <div className="d-flex justify-content-between mb-2">
                                        <div className="hstack gap-2">
                                            <p className="text-warning m-0">4.0<i className="fas fa-star text-warning ms-1"></i></p>
                                            <span className="small">(3500)</span>
                                        </div>
                                        <div className="hstack gap-2">
                                            <p className="h6 fw-light mb-0 m-0">4500</p>
                                            <span className="small">(Student)</span>
                                        </div>
                                    </div>
                                    {/* <!-- Time --> */}
                                    <div className="hstack gap-3">
                                        <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>12h 45m</span>
                                        <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>65 lectures</span>
                                    </div>
                                </div>
                                {/* <!-- Card footer --> */}
                                <div className="card-footer pt-0 bg-transparent">
                                    <hr />
                                    {/* <!-- Avatar and Price --> */}
                                    <div className="d-flex justify-content-between align-items-center">
                                        {/* <!-- Avatar --> */}
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-sm">
                                                <img className="avatar-img rounded-1" src="assets/images/avatar/04.jpg" alt="avatar" />
                                            </div>
                                            <p className="mb-0 ms-2"><a href="#" className="h6 fw-light mb-0">Billy Vasquez</a></p>
                                        </div>
                                        {/* <!-- Price --> */}
                                        <div>
                                            <h4 className="text-success mb-0 item-show">$255</h4>
                                            <a href="#" className="btn-sm btn-success-soft item-show-hover"><i className="fas fa-shopping-cart me-2"></i>Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide> <SwiperSlide>
                            <div className="card action-trigger-hover border bg-transparent">
                                {/* <!-- Image --> */}
                                <img src="assets/images/courses/4by3/15.jpg" className="card-img-top" alt="course image" />
                                {/* <!-- Card body --> */}
                                <div className="card-body pb-0">
                                    {/* <!-- Badge and favorite --> */}
                                    <div className="d-flex justify-content-between mb-3">
                                        <span className="hstack gap-2">
                                            <a href="#" className="badge bg-primary bg-opacity-10 text-primary">Development</a>
                                            <a href="#" className="badge bg-dark text-white">All level</a>
                                        </span>
                                        <a href="#" className="h6 fw-light mb-0"><i className="far fa-bookmark"></i></a>
                                    </div>
                                    {/* <!-- Title --> */}
                                    <h5 className="card-title"><a href="#">Angular – The Complete Guide (2021 Edition)</a></h5>
                                    {/* <!-- Rating --> */}
                                    <div className="d-flex justify-content-between mb-2">
                                        <div className="hstack gap-2">
                                            <p className="text-warning m-0">4.0<i className="fas fa-star text-warning ms-1"></i></p>
                                            <span className="small">(3500)</span>
                                        </div>
                                        <div className="hstack gap-2">
                                            <p className="h6 fw-light mb-0 m-0">4500</p>
                                            <span className="small">(Student)</span>
                                        </div>
                                    </div>
                                    {/* <!-- Time --> */}
                                    <div className="hstack gap-3">
                                        <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>12h 45m</span>
                                        <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>65 lectures</span>
                                    </div>
                                </div>
                                {/* <!-- Card footer --> */}
                                <div className="card-footer pt-0 bg-transparent">
                                    <hr />
                                    {/* <!-- Avatar and Price --> */}
                                    <div className="d-flex justify-content-between align-items-center">
                                        {/* <!-- Avatar --> */}
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-sm">
                                                <img className="avatar-img rounded-1" src="assets/images/avatar/04.jpg" alt="avatar" />
                                            </div>
                                            <p className="mb-0 ms-2"><a href="#" className="h6 fw-light mb-0">Billy Vasquez</a></p>
                                        </div>
                                        {/* <!-- Price --> */}
                                        <div>
                                            <h4 className="text-success mb-0 item-show">$255</h4>
                                            <a href="#" className="btn-sm btn-success-soft item-show-hover"><i className="fas fa-shopping-cart me-2"></i>Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                    {/* <!-- Slider END --> */}
                </div>
            </div>
        </section>
    );
};

export default TradingMovies;
