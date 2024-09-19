import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { getGenereApi, getMoviesApi } from "../../service/categry";
import moment from "moment";

const Header = () => {
    const [data, setData] = useState([]);
    const [movieList, setMovieList] = useState([]);
    console.log(movieList, '----movieList')
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [active, setActive] = useState('');
    // console.log(data, "------------api1", active);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const api1 = await getGenereApi()
                setActive(api1?.data?.data[0]?._id);
                setData(api1?.data?.data);
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


    const changeSelecedItem = async (event, userId) => {
        setActive(userId);
    };

    return (
        <section>
            <div className="container">

                <div className="row mb-4">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="fs-1">Most Popular Courses</h2>
                        <p className="mb-0">Choose from hundreds of courses from specialist organizations</p>
                    </div>
                </div>

                <ul className="nav nav-pills nav-pills-bg-soft justify-content-sm-center mb-4 px-3" id="course-pills-tab" role="tablist">
                    {data?.length > 0 ? data?.map((item, index) => {
                        if (item._id === active) {
                            return <li className="nav-item me-2 me-sm-5">
                                <button className="nav-link mb-2 mb-md-0 active" id="course-pills-tab-3" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-3" type="button" role="tab" aria-controls="course-pills-tabs-3" aria-selected="false" onClick={(e) => changeSelecedItem(e, item._id)}>
                                    {item.title}
                                </button>
                            </li>
                        } else {
                            return <li className="nav-item me-2 me-sm-5">
                                <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-3" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-3" type="button" role="tab" aria-controls="course-pills-tabs-3" aria-selected="false" onClick={(e) => changeSelecedItem(e, item._id)}>
                                    {item.title}
                                </button>
                            </li>
                        }
                    }) : ''}
                </ul>

                <div className="tab-content" id="course-pills-tabContent">

                    <div className="tab-pane fade show active" id="course-pills-tabs-1" role="tabpanel" aria-labelledby="course-pills-tab-1">
                        <div className="row g-4">

                            {movieList?.data?.length > 0 ? movieList?.data?.map((item, index) => {

                                return <div className="col-sm-6 col-lg-4 col-xl-3">
                                    <div className="card shadow h-100">
                                        <img src={item.posterImage.replace("localhost", "192.168.0.29")} className="card-img-top" alt="course image" />

                                        <div className="card-body pb-0">
                                            <div className="d-flex justify-content-between mb-2">
                                                <a href="#" className="badge bg-purple bg-opacity-10 text-purple">{item?.generes?.map(item => `${item} `)}</a>
                                                <span className="badge bg-purple bg-opacity-10 text-purple">Rel. :{moment(item?.releaseDate).format('YYYY-MM-DD')}</span>
                                                <a href="#" className="h6 mb-0"><i className="far fa-heart"></i></a>
                                            </div>

                                            <h5 className="card-title fw-normal"><a href="#">{item?.title}</a></h5>
                                            <p className="mb-2 text-truncate-2">{item?.description}</p>

                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="far fa-star text-warning"></i></li>
                                                <li className="list-inline-item ms-2 h6 fw-light mb-0">4.0/5.0</li>
                                            </ul>
                                        </div>

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

                            }) : ''}
                        </div>
                    </div>



                    <div className="tab-pane fade" id="course-pills-tabs-2" role="tabpanel" aria-labelledby="course-pills-tab-2">
                        <div className="row g-4">
                            {movieList?.data?.length > 0 ? movieList?.data?.map((item, index) => {
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                    <div className="card shadow h-100">

                                        <img src="assets/images/courses/4by3/05.jpg" className="card-img-top" alt="course image" />
                                        <div className="card-body pb-0">

                                            <div className="d-flex justify-content-between mb-2">
                                                <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                                                <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart"></i></a>
                                            </div>

                                            <h5 className="card-title fw-normal"><a href="#">The Complete Web Development in python</a></h5>
                                            <p className="text-truncate-2 mb-2">Mention Mr manners opinion if garrets enabled.</p>

                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning"></i></li>
                                                <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                                            </ul>
                                        </div>

                                        <div className="card-footer pt-0 pb-3">
                                            <hr />
                                            <div className="d-flex justify-content-between mt-2">
                                                <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>10h 00m</span>
                                                <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>26 lectures</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }) : ''}


                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="card shadow h-100">

                                    <img src="assets/images/courses/4by3/06.jpg" className="card-img-top" alt="course image" />
                                    <div className="card-body pb-0">

                                        <div className="d-flex justify-content-between mb-2">
                                            <a href="#" className="badge bg-info bg-opacity-10 text-info">Intermediate</a>
                                            <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart"></i></a>
                                        </div>

                                        <h5 className="card-title fw-normal"><a href="#">Angular – The Complete Guider</a></h5>
                                        <p className="text-truncate-2 mb-2">Rooms oh fully taken by worse do. Points afraid but may end.</p>

                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning"></i></li>
                                            <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                                        </ul>
                                    </div>

                                    <div className="card-footer pt-0 pb-3">
                                        <hr />
                                        <div className="d-flex justify-content-between mt-2">
                                            <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>9h 32m</span>
                                            <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>42 lectures</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="card shadow">

                                    <img src="assets/images/courses/4by3/07.jpg" className="card-img-top" alt="course image" />
                                    <div className="card-body pb-0">

                                        <div className="d-flex justify-content-between mb-2">
                                            <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                                            <a href="#" className="text-danger"><i className="fas fa-heart"></i></a>
                                        </div>

                                        <h5 className="card-title fw-normal"><a href="#">Deep Learning with React-Native</a></h5>
                                        <p className="text-truncate-2 mb-2">Far advanced settling say finished raillery. Offered chiefly farther</p>

                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="far fa-star text-warning"></i></li>
                                            <li className="list-inline-item ms-2 h6 fw-light mb-0">4.0/5.0</li>
                                        </ul>
                                    </div>

                                    <div className="card-footer pt-0 pb-3">
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>18h 56m</span>
                                            <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>99 lectures</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="card shadow h-100">

                                    <img src="assets/images/courses/4by3/09.jpg" className="card-img-top" alt="course image" />
                                    <div className="card-body pb-0">

                                        <div className="d-flex justify-content-between mb-2">
                                            <a href="#" className="badge bg-purple bg-opacity-10 text-purple">All level</a>
                                            <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart"></i></a>
                                        </div>

                                        <h5 className="card-title fw-normal"><a href="#">JavaScript: Full Understanding</a></h5>
                                        <p className="text-truncate-2 mb-2">Far advanced settling say finished raillery. Offered chiefly farther</p>

                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item ms-2 h6 fw-light mb-0">5.0/5.0</li>
                                        </ul>
                                    </div>

                                    <div className="card-footer pt-0 pb-3">
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>35h 20m</span>
                                            <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>89 lectures</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="card shadow h-100">

                                    <img src="assets/images/courses/4by3/10.jpg" className="card-img-top" alt="course image" />
                                    <div className="card-body pb-0">

                                        <div className="d-flex justify-content-between mb-2">
                                            <a href="#" className="badge bg-info bg-opacity-10 text-info">Intermediate</a>
                                            <a href="#" className="text-danger"><i className="fas fa-heart"></i></a>
                                        </div>

                                        <h5 className="card-title fw-normal"><a href="#">Bootstrap 5 From Scratch</a></h5>
                                        <p className="text-truncate-2 mb-2">Far advanced settling say finished raillery. Offered chiefly farther</p>

                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning"></i></li>
                                            <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                                        </ul>
                                    </div>

                                    <div className="card-footer pt-0 pb-3">
                                        <hr />
                                        <div className="d-flex justify-content-between mt-2">
                                            <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>25h 56m</span>
                                            <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>38 lectures</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="card shadow h-100">

                                    <img src="assets/images/courses/4by3/13.jpg" className="card-img-top" alt="course image" />
                                    <div className="card-body pb-0">

                                        <div className="d-flex justify-content-between mb-2">
                                            <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                                            <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart"></i></a>
                                        </div>

                                        <h5 className="card-title fw-normal"><a href="#">PHP with - CMS Project</a></h5>
                                        <p className="text-truncate-2 mb-2">Far advanced settling say finished raillery. Offered chiefly farther</p>

                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="far fa-star text-warning"></i></li>
                                            <li className="list-inline-item ms-2 h6 fw-light mb-0">4.0/5.0</li>
                                        </ul>
                                    </div>

                                    <div className="card-footer pt-0 pb-3">
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>21h 22m</span>
                                            <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>30 lectures</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                    <div className="tab-pane fade" id="course-pills-tabs-3" role="tabpanel" aria-labelledby="course-pills-tab-3">
                        <div className="row g-4">

                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="card shadow h-100">

                                    <img src="assets/images/courses/4by3/08.jpg" className="card-img-top" alt="course image" />
                                    <div className="card-body pb-0">

                                        <div className="d-flex justify-content-between mb-2">
                                            <a href="#" className="badge bg-purple bg-opacity-10 text-purple">All level</a>
                                            <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart"></i></a>
                                        </div>

                                        <h5 className="card-title fw-normal"><a href="#">Sketch from A to Z: for app designer</a></h5>
                                        <p className="text-truncate-2 mb-2">Proposal indulged no do sociable he throwing settling</p>

                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="far fa-star text-warning"></i></li>
                                            <li className="list-inline-item ms-2 h6 fw-light mb-0">4.0/5.0</li>
                                        </ul>
                                    </div>

                                    <div className="card-footer pt-0 pb-3">
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>12h 56m</span>
                                            <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>15 lectures</span>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="card shadow h-100">

                                    <img src="assets/images/courses/4by3/04.jpg" className="card-img-top" alt="course image" />
                                    <div className="card-body pb-0">

                                        <div className="d-flex justify-content-between mb-2">
                                            <a href="#" className="badge bg-purple bg-opacity-10 text-purple">All level</a>
                                            <a href="#" className="text-danger"><i className="fas fa-heart"></i></a>
                                        </div>

                                        <h5 className="card-title fw-normal"><a href="#">Learn Invision</a></h5>
                                        <p className="mb-2">Arrived off she elderly beloved him Course regard to up he hardly.</p>

                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="far fa-star text-warning"></i></li>
                                            <li className="list-inline-item ms-2 h6 fw-light mb-0">3.5/5.0</li>
                                        </ul>
                                    </div>

                                    <div className="card-footer pt-0 pb-3">
                                        <hr />
                                        <div className="d-flex justify-content-between mt-2">
                                            <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>6h 56m</span>
                                            <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>82 lectures</span>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="card shadow h-100">

                                    <img src="assets/images/courses/4by3/02.jpg" className="card-img-top" alt="course image" />
                                    <div className="card-body pb-0">

                                        <div className="d-flex justify-content-between mb-2">
                                            <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                                            <a href="#" className="text-danger"><i className="fas fa-heart"></i></a>
                                        </div>

                                        <h5 className="card-title fw-normal"><a href="#">Graphic Design Masterclass</a></h5>
                                        <p className="text-truncate-2 mb-2">Rooms oh fully taken by worse do. Points afraid but may end.</p>

                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning"></i></li>
                                            <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                                        </ul>
                                    </div>

                                    <div className="card-footer pt-0 pb-3">
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>9h 56m</span>
                                            <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>65 lectures</span>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="card shadow h-100">

                                    <img src="assets/images/courses/4by3/03.jpg" className="card-img-top" alt="course image" />
                                    <div className="card-body pb-0">

                                        <div className="d-flex justify-content-between mb-2">
                                            <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                                            <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart"></i></a>
                                        </div>

                                        <h5 className="card-title fw-normal"><a href="#">Create a Design System in Figma</a></h5>
                                        <p className="text-truncate-2 mb-2">Rooms oh fully taken by worse do. Points afraid but may end.</p>

                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning"></i></li>
                                            <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                                        </ul>
                                    </div>

                                    <div className="card-footer pt-0 pb-3">
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>5h 56m</span>
                                            <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>32 lectures</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                    <div className="tab-pane fade" id="course-pills-tabs-4" role="tabpanel" aria-labelledby="course-pills-tab-4">
                        <div className="row g-4">

                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="card shadow h-100">

                                    <img src="assets/images/courses/4by3/01.jpg" className="card-img-top" alt="course image" />
                                    <div className="card-body pb-0">

                                        <div className="d-flex justify-content-between mb-2">
                                            <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                                            <a href="#" className="text-danger"><i className="fas fa-heart"></i></a>
                                        </div>

                                        <h5 className="card-title fw-normal"><a href="#">Digital Marketing Masterclass</a></h5>
                                        <p className="text-truncate-2 mb-2">Delivered dejection necessary objection do Mr prevailed.</p>

                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning"></i></li>
                                            <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                                        </ul>
                                    </div>

                                    <div className="card-footer pt-0 pb-3">
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>6h 56m</span>
                                            <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>82 lectures</span>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="card shadow h-100">

                                    <img src="assets/images/courses/4by3/08.jpg" className="card-img-top" alt="course image" />
                                    <div className="card-body pb-0">

                                        <div className="d-flex justify-content-between mb-2">
                                            <a href="#" className="badge bg-purple bg-opacity-10 text-purple">All level</a>
                                            <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart"></i></a>
                                        </div>

                                        <h5 className="card-title fw-normal"><a href="#">Sketch from A to Z: for app designer</a></h5>
                                        <p className="text-truncate-2 mb-2">Proposal indulged no do sociable he throwing settling.</p>

                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="far fa-star text-warning"></i></li>
                                            <li className="list-inline-item ms-2 h6 fw-light mb-0">4.0/5.0</li>
                                        </ul>
                                    </div>

                                    <div className="card-footer pt-0 pb-3">
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>12h 56m</span>
                                            <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>15 lectures</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                    <div className="tab-pane fade" id="course-pills-tabs-5" role="tabpanel" aria-labelledby="course-pills-tab-5">
                        <div className="row g-4">

                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="card shadow h-100">

                                    <img src="assets/images/courses/4by3/04.jpg" className="card-img-top" alt="course image" />
                                    <div className="card-body pb-0">

                                        <div className="d-flex justify-content-between mb-2">
                                            <a href="#" className="badge bg-purple bg-opacity-10 text-purple">All level</a>
                                            <a href="#" className="text-danger"><i className="fas fa-heart"></i></a>
                                        </div>

                                        <h5 className="card-title fw-normal"><a href="#">Learn Invision</a></h5>
                                        <p className="text-truncate-2 mb-2">Arrived off she elderly beloved him Course regard to up he hardly.</p>

                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="far fa-star text-warning"></i></li>
                                            <li className="list-inline-item ms-2 h6 fw-light mb-0">3.5/5.0</li>
                                        </ul>
                                    </div>

                                    <div className="card-footer pt-0 pb-3">
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>6h 56m</span>
                                            <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>82 lectures</span>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="card shadow h-100">

                                    <img src="assets/images/courses/4by3/09.jpg" className="card-img-top" alt="course image" />
                                    <div className="card-body pb-0">

                                        <div className="d-flex justify-content-between mb-2">
                                            <a href="#" className="badge bg-purple bg-opacity-10 text-purple">All level</a>
                                            <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart"></i></a>
                                        </div>

                                        <h5 className="card-title fw-normal"><a href="#">JavaScript: Full Understanding</a></h5>
                                        <p className="text-truncate-2 mb-2">Far advanced settling say finished raillery. Offered chiefly farther.</p>

                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item ms-2 h6 fw-light mb-0">5.0/5.0</li>
                                        </ul>
                                    </div>

                                    <div className="card-footer pt-0 pb-3">
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>35h 20m</span>
                                            <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>89 lectures</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Header;
