import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { getMoviesApi } from "../../service/categry";
import moment from "moment";
import StarRating from "./StarRating";


const TradingMovies = () => {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(movieList, '---movieList111');
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data } = await getMoviesApi();
                setMovieList(data?.data);
            } catch (err) {
                console.log(err, "------------api1")
                if (!err.response?.data?.success) {
                    console.log(err.response.data.message, "-----");
                }
                let errMs = err?.response?.data?.message
                    ? err.response.data.message
                    : err.message;
                setError(errMs);
                console.log(1111, "------------api1")
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);


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

                        {movieList?.data?.length > 0 ? movieList.data.map((item) => {

                            return <SwiperSlide>
                                <div className="card action-trigger-hover border bg-transparent">
                                    {/* <!-- Image --> */}
                                    <img src={item.posterImage.replace("localhost", "192.168.0.29")} className="card-img-top" alt="course image" />
                                    {/* <!-- Card body --> */}
                                    <div className="card-body pb-0">
                                        {/* <!-- Badge and favorite --> */}
                                        <div className="d-flex justify-content-between mb-3">
                                            <span className="hstack gap-2">
                                                <a href="#" className="badge bg-primary bg-opacity-10 text-primary">{item?.generes?.map(item => `${item} `)}</a>
                                                <a href="#" className="badge bg-dark text-white">Rel. :{moment(item?.releaseDate).format('YYYY-MM-DD')}</a>
                                            </span>
                                            <a href="#" className="h6 fw-light mb-0"><i className="far fa-bookmark"></i></a>
                                        </div>
                                        {/* <!-- Title --> */}
                                        <h5 className="card-title"><a href="#">{item.title}</a></h5>
                                        {/* <!-- Rating --> */}
                                        <div className="d-flex justify-content-between mb-2">
                                            <div className="hstack gap-2">
                                                {StarRating(item)}
                                            </div>
                                            <div className="hstack gap-2">
                                                <p className="h6 fw-light mb-0 m-0">4500</p>
                                                <span className="small">(Student)</span>
                                            </div>
                                        </div>
                                        {/* <!-- Time --> */}

                                        <div className="card-footer pt-0 pb-3">
                                            <hr />
                                            <div className="d-flex justify-content-between">
                                                <span className="h6 fw-light mb-0"><i className="fas fa-language text-danger me-2"></i>language</span>
                                                <span className="h6 fw-light mb-0">{item.language}</span>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>{`${Math.floor(item.duration / 60)}h:${item.duration % 60}m`}</span>
                                                <a href={item?.trailerUrl}> <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>Trailer</span></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        }) : ''}
                    </Swiper>
                    {/* <!-- Slider END --> */}
                </div>
            </div>
        </section>
    );
};

export default TradingMovies;
