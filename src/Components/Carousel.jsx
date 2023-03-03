import React from "react";











export default function Carousel() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide h-100 " data-bs-ride="carousel">
            <div className="carousel-indicators carouselButtons" style={{ marginTop: '20%', zIndex: '5' }}>
                <button className="carouselBatafsilBtn">Batafsil</button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active border" style={{ borderRadius: '50%', height: '20px', width: '20px' }} aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="border" style={{ borderRadius: '50%', height: '20px', width: '20px' }} aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className="border" style={{ borderRadius: '50%', height: '20px', width: '20px' }} aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner mb-5" >
                <div className="carousel-item active">
                    <h1>Zamonaviy kasblarni biz <br /> bilan o’rganing - 1</h1>
                </div>
                <div className="carousel-item">
                    <h1>Zamonaviy kasblarni biz <br /> bilan o’rganing - 2</h1>
                </div>
                <div className="carousel-item">
                    <h1>Zamonaviy kasblarni biz <br /> bilan o’rganing - 3</h1>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}