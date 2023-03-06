import React from "react";
import Aos from "aos";
import img1 from '../../images/dasturlash/webCode1.png'
import img2 from '../../images/dasturlash/webCode2.png'
import time from '../../images/dasturlash/time.png'
import pen from '../../images/dasturlash/pen.png'
import plus from '../../images/dasturlash/plus.png'


export default function Foundation() {

    Aos.init();

    return (
        <div className='container mb-5 mt-5' >
            <div className="dasturlashKurslar row p-5">
                <div  className="col-md-6" style={{ textAlign: 'left' }}>
                    <h1>Foundation</h1>
                    <h5>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has a more-or-less normal distribution </h5>
                    <button className="batafsilBtn">Kursga yozilish</button>
                </div>
                <div  className="col-md-6 foundationImages ">
                    <img src={img1} className='foundationImg1' />
                    <img src={img2} className='foundationImg2' />
                </div>
            </div>

            <div className="row mt-5 mb-5 text-center" style={{ fontSize: '200%',overflow:'hidden' }}>
                <div className="col-md-4 p-4">
                    <img src={time} />
                    6 oy
                </div>
                <div className="col-md-4 p-4">
                    <img src={pen} />
                    online/offline
                </div>
                <div className="col-md-4 p-4">
                    <img src={plus} />
                    1 oy praktika
                </div>
            </div>

            <div className="kimlarUchun"  style={{ fontSize: '200%',overflow:'hidden' }}>
                <h4><strong>Kurs kimlar uchun?</strong></h4>
                <div className="row mt-5">
                    <div data-aos="zoom-out" className="col-md-4">
                        <h5><strong>
                            Interyerning uslubiy kontsptsiyasini yaratishni
                        </strong></h5>
                        <h6 className="mb-5">Interyerlar dizayni asoslarini o‘rganasiz. Birinchi loyihangizni, noldan: mudborddan boshlab ishchi chizmalargacha yaratasiz.</h6>
                        <hr />
                    </div>
                    <div data-aos="zoom-out" className="col-md-4">
                        <h5><strong>
                            Interyerning uslubiy kontsptsiyasini yaratishni
                        </strong></h5>
                        <h6 className="mb-5">Interyerlar dizayni asoslarini o‘rganasiz. Birinchi loyihangizni, noldan: mudborddan boshlab ishchi chizmalargacha yaratasiz.</h6>
                        <hr />
                    </div>
                    <div data-aos="zoom-out" className="col-md-4">
                        <h5><strong>
                            Interyerning uslubiy kontsptsiyasini yaratishni
                        </strong></h5>
                        <h6 className="mb-5">Interyerlar dizayni asoslarini o‘rganasiz. Birinchi loyihangizni, noldan: mudborddan boshlab ishchi chizmalargacha yaratasiz.</h6>
                        <hr />
                    </div>
                    <div data-aos="zoom-out" className="col-md-4">
                        <h5><strong>
                            Interyerning uslubiy kontsptsiyasini yaratishni
                        </strong></h5>
                        <h6 className="mb-5">Interyerlar dizayni asoslarini o‘rganasiz. Birinchi loyihangizni, noldan: mudborddan boshlab ishchi chizmalargacha yaratasiz.</h6>
                        <hr />
                    </div>
                    <div data-aos="zoom-out" className="col-md-4">
                        <h5><strong>
                            Interyerning uslubiy kontsptsiyasini yaratishni
                        </strong></h5>
                        <h6 className="mb-5">Interyerlar dizayni asoslarini o‘rganasiz. Birinchi loyihangizni, noldan: mudborddan boshlab ishchi chizmalargacha yaratasiz.</h6>
                        <hr />
                    </div>
                    <div data-aos="zoom-out" className="col-md-4">
                        <h5><strong>
                            Interyerning uslubiy kontsptsiyasini yaratishni
                        </strong></h5>
                        <h6 className="mb-5">Interyerlar dizayni asoslarini o‘rganasiz. Birinchi loyihangizni, noldan: mudborddan boshlab ishchi chizmalargacha yaratasiz.</h6>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}