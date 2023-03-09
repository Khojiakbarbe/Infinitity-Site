import React from "react";







export default function Carousel() {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators carouselButtons">
                <button className="batafsilBtn">Batafsil</button>
                <li>
                    <button type="button" data-bs-target="#carouselExampleDark" style={{ height: '15px', width: '15px' }} data-bs-slide-to="0" className="active carouselDot" aria-current="true" aria-label="Slide 1"></button>
                </li>
                <li>
                    <button type="button" data-bs-target="#carouselExampleDark" style={{ height: '15px', width: '15px' }} data-bs-slide-to="1" className="carouselDot" aria-label="Slide 2"></button>
                </li>
                <li>
                    <button type="button" data-bs-target="#carouselExampleDark" style={{ height: '15px', width: '15px' }} data-bs-slide-to="2" className="carouselDot" aria-label="Slide 3"></button>
                </li>
                <li>
                    <button type="button" data-bs-target="#carouselExampleDark" style={{ height: '15px', width: '15px' }} data-bs-slide-to="3" className="carouselDot" aria-label="Slide 4"></button>
                </li>
            </div>
            <div className="carousel-inner p-5">
                <div className="carousel-item active" data-bs-interval="10000">
                    <h1>Zamonaviy kasblarni biz bilan o'rganing</h1>

                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <h1>We change lives through education</h1>
                </div>
                <div className="carousel-item">
                    <h1>Hayotingizni ta'lim orqali o'zgartiramiz</h1>
                </div>
                <div className="carousel-item">
                    <h1>Study modern subjects
                        with us</h1>
                </div>
            </div>
        </div>
    )
}