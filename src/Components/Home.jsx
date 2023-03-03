import React from "react";
import Carousel from "./Carousel";
import carouselImg from '../images/navbar/carouselPhoto.png'


export default function Home(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 p-4">
                    <Carousel />
                </div>
                <div className="col-md-6">
                    <img src={carouselImg} className='img-fluid w-50' alt="" />
                </div>
            </div>
        </div>
    )
}