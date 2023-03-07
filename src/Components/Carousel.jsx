import React from "react";











export default function Carousel() {
    return (
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators carouselButtons">
                <button className="batafsilBtn">Batafsil</button>
                <li>
                    <button type="button" data-bs-target="#carouselExampleDark" style={{ height: '15px', width: '15px' }} data-bs-slide-to="0" class="dot active carouselDot" aria-current="true" aria-label="Slide 1"></button>
                </li>
                <li>
                    <button type="button" data-bs-target="#carouselExampleDark" style={{ height: '15px', width: '15px' }} data-bs-slide-to="1" className="dot carouselDot" aria-label="Slide 2"></button>
                </li>
                <li>
                    <button type="button" data-bs-target="#carouselExampleDark" style={{ height: '15px', width: '15px' }} data-bs-slide-to="2" className="dot carouselDot" aria-label="Slide 3"></button>
                </li>
                <li>
                    <button type="button" data-bs-target="#carouselExampleDark" style={{ height: '15px', width: '15px' }} data-bs-slide-to="3" className="dot carouselDot" aria-label="Slide 4"></button>
                </li>
            </div>
            <div class="carousel-inner p-5">
                <div class="carousel-item active" data-bs-interval="10000">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
                <div class="carousel-item">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
                <div class="carousel-item">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
        </div>
    )
}