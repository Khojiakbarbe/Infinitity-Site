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


export default function Home() {
    return (
        <div className="container p-3">
            <div className="row">
                <div className="col-md-6 pt-5">
                    <Carousel />
                </div>
                <div className="col-md-6">
                    <img src={carouselImg} className='carouselImg' alt="" />
                </div>
            </div>

            {/* Yo'nalishlar */}

            <div className="asosiyYonalishlar">
                <h4><strong>Asosiy yo'nalishlar</strong></h4>
                <div className="row mt-4">
                    <div className="col-md-4 p-3">
                        <div>
                            <h2>Dasturlash</h2>
                            <p>Mre then 12 courses</p>
                            <Link to="/">view </Link>
                        </div>
                    </div>
                    <div className="col-md-4 p-3">
                        <div>
                            <h2>Ingliz tili</h2>
                            <p>Mre then 12 courses</p>
                            <Link to="/">view </Link>
                        </div>
                    </div>
                    <div className="col-md-4 p-3">
                        <div>
                            <h2>Matematika</h2>
                            <p>Mre then 12 courses</p>
                            <Link to="/">view </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Nega aynan biz */}

            <div className="negaAyanBiz">
                <h4>Nega aynan biz?</h4>

                <div className="row mt-5">
                    <div className="col-md-6 row">
                        <div className="col-md-6 negaAyanBizCol">
                            <img src={kubok} alt="" />
                            Trusted methods</div>
                        <div className="col-md-6 negaAyanBizCol">
                            <img src={location} alt="" />
                            Comfortable location</div>
                        <div className="col-md-6 negaAyanBizCol">
                            <img src={great} alt="" />
                            Experienced teachers</div>
                        <div className="col-md-6 negaAyanBizCol">
                            <img src={great} alt="" />
                            Experienced teachers</div>
                        <div className="col-md-6 negaAyanBizCol">
                            <img src={star} alt="" />
                            Extra lessons</div>
                        <div className="col-md-6 negaAyanBizCol">
                            <img src={star} alt="" />
                            Extra lessons</div>
                        <div className="col-md-4 mt-3"><button className="carouselBatafsilBtn">Batafsil</button></div>
                    </div>
                    <div className="col-md-6">
                        <img src={negaBizImg} className='negaBizImg' alt="" />
                    </div>
                </div>
            </div>

            {/* Bizning galereya */}

        <div className="bizningGalereya row ">
            <h4 className="mb-5"><strong>Bizning galereya</strong></h4>
            <div className="col-md-8 p-2">
                <img src={galereya1} alt="" />
            </div>
            <div className="col-md-4 p-2">
                <img src={galereya2}  alt="" />
            </div>
            <div className="col-md-4 p-2">
                <img src={galereya3} alt="" />
            </div>
            <div className="col-md-4 p-2">
                <img src={galereya4} alt="" />
            </div>
            <div className="col-md-4 p-2">
                <img src={galereya5} alt="" />
            </div>
        </div>

        </div>
    )
}