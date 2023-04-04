import React from "react";
import { useNavigate } from "react-router-dom";


export default function Math() {
    
    const navigate = useNavigate();
    
    return (
        <div className="container mt-5 mb-5">
            <div className="dasturlashKurslar row text-center">
                <div className="col-md-12 pb-5">
                    <h1>Matematika</h1>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque deleniti quidem sapiente aliquam magnam molestiae.</h5>
                    <button className="batafsilBtn" onClick={() => navigate('/aloqa')}>Batafsil</button>
                    <a href="https://t.me/InfinityFergana">
                        <button className="batafsilBtn" style={{ marginLeft: '2%' }}>
                            Kursga yozilish
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}