import React from "react";
import { useNavigate } from "react-router-dom";



export default function English() {

    const navigate = useNavigate();

    return (
        <div className="container mb-5">
            <div className="dasturlashKurslar row ">
                <div className="col-md-6 pb-5">
                    <h1>IELTS</h1>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptates!</h5>

                    <button className="batafsilBtn" onClick={() => navigate('/aloqa')}>Batafsil</button>
                    <a href="https://forms.gle/o3JjMAxcQf1HyY3Z9">
                        <button className="batafsilBtn" style={{ marginLeft: '2%' }}>
                            Kursga yozilish
                        </button>
                    </a>
                </div>
            </div>
            <div className="dasturlashKurslar row text-center">
                <div className="col-md-6 pb-5">
                    <h1>CEFR</h1>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptates!</h5>

                    <button className="batafsilBtn" onClick={() => navigate('/aloqa')}>Batafsil</button>
                    <a href="https://forms.gle/o3JjMAxcQf1HyY3Z9">
                        <button className="batafsilBtn" style={{ marginLeft: '2%' }}>
                            Kursga yozilish
                        </button>
                    </a>
                </div>
            </div>
            <div className="dasturlashKurslar row ">
                <div className="col-md-6"></div>
                <div className="col-md-6 pb-5">
                    <h1>KIDS English</h1>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptates!</h5>

                    <button className="batafsilBtn" onClick={() => navigate('/aloqa')}>Batafsil</button>
                    <a href="https://forms.gle/o3JjMAxcQf1HyY3Z9">
                        <button className="batafsilBtn" style={{ marginLeft: '2%' }}>
                            Kursga yozilish
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}