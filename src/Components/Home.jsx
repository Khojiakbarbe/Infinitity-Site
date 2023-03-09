import React from "react";
import { Link } from 'react-router-dom'
import Carousel from "./Carousel";
import carouselImg from '../images/navbar/carouselPhoto.png'
import kubok from '../images/home/kubok.png'
import location from '../images/home/location.png'
import great from '../images/home/great.png'
import star from '../images/home/star.png'
import negaBizImg from '../images/home/negaBiz.png'
import galereya1 from '../images/home/galereya1.jpg'
import galereya2 from '../images/home/galereya2.jpg'
import galereya3 from '../images/home/galereya3.jpg'
import galereya4 from '../images/home/galereya4.jpg'
import galereya5 from '../images/home/galereya5.jpg'

import Aos from "aos";

export default function Home() {
    Aos.init({
        duration: 1200
    });

    return (
        <div className="homeBigDiv">

            <div className="container p-3 mt-5">
                <div className="row">
                    <div className="col-md-6 pt-5">
                        <Carousel />
                    </div>
                    <div className="col-md-6">
                        <img src={carouselImg} className='carouselImg' alt="" />
                    </div>
                </div>

                {/* Yo'nalishlar */}

                <div className="asosiyYonalishlar" >
                    <h4><strong>Asosiy yo'nalishlar</strong></h4>
                    <div className="row mt-4">
                        <div data-aos="fade-right" className="col-md-4 p-3">
                            <div>
                                <h2>Dasturlash</h2>
                                <p>Foundation, Frontend, Backend</p>
                                <Link to="/dasturlash">ko'rish </Link>
                            </div>
                        </div>
                        <div data-aos="flip-up" className="col-md-4 p-3">
                            <div>
                                <h2>Ingliz tili</h2>
                                <p>Kids, General, IELTS</p>
                                <Link to="/english">ko'rish </Link>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="col-md-4 p-3">
                            <div>
                                <h2>Matematika</h2>
                                <p>Kichik va Katta yoshdagilar uchun</p>
                                <Link to="/matematika">ko'rish </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Nega aynan biz */}

                <div className="negaAyanBiz">
                    <h4>Nega aynan biz?</h4>

                    <div className="row mt-5" style={{ overflow: 'hidden' }}>
                        <div className="col-md-7 row mt-5" >
                            <div className="col-md-6">
                                <div data-aos="fade-right" className="negaAyanBizCol">
                                    <img src={kubok} alt="" />
                                    Trusted methods
                                </div>

                                <div data-aos="fade-right" className="negaAyanBizCol">
                                    <img src={great} alt="" />
                                    Experienced teachers
                                </div>
                                <div data-aos="fade-right" className="negaAyanBizCol">
                                    <img src={star} alt="" />
                                    Extra lessons
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div data-aos="fade-left" className="negaAyanBizCol">
                                    <img src={location} alt="" />
                                    Comfortable location
                                </div>
                                <div data-aos="fade-left" className="negaAyanBizCol">
                                    <img src={great} alt="" />
                                    Experienced teachers
                                </div>
                                <div data-aos="fade-left" className="negaAyanBizCol">
                                    <img src={star} alt="" />
                                    Extra lessons
                                </div>
                            </div>
                            <div data-aos="fade-left" className="col-md-4 mt-3"><button className="batafsilBtn">Batafsil</button></div>
                        </div>
                        <div data-aos="fade-left" className="col-md-5" style={{ textAlign: 'end' }}>
                            <img src={negaBizImg} className='negaBizImg' alt="" />
                        </div>
                    </div>
                </div>

                {/* Bizning galereya */}

                <div className="bizningGalereya row ">
                    <h4 className="mb-5"><strong>Bizning galereya</strong></h4>
                    <div data-aos="fade-right" className="col-md-8 p-2">
                        <div className="gallery">
                            <img src={galereya1} />
                            <p className="galleryTexts pt-" style={{ width:'98%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus expedita quam minima, aperiam voluptate quas quae neque excepturi qui!</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="col-md-4 p-2">
                        <div className="gallery">
                            <img src={galereya2} />
                            <p className="galleryTexts">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, laboriosam!</p>
                        </div>
                    </div>
                    <div data-aos="fade-right" className="col-md-4 p-2">
                        <div className="gallery">
                            <img src={galereya3} />
                            <p className="galleryTexts">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quibusdam excepturi laborum?</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-md-4 p-2">
                        <div className="gallery">
                            <img src={galereya4} />
                            <p className="galleryTexts">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente.</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="col-md-4 p-2">
                        <div className="gallery">
                            <img src={galereya5} />
                            <p className="galleryTexts">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium placeat dignissimos architecto non!</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}