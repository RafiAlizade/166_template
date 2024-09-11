import React from 'react'
import { Link } from 'react-router-dom'
import { Truck, ArrowRight, Tools, Houses, People, Box, Laptop, ChevronRight} from 'react-bootstrap-icons'
import './HomeServices.css'
import Stroke from './../../assets/images/stroke2.svg'

function HomeServices() {
    const serviceList = [
        {
            label: "Logistika",
            src: Truck,
            description: "A videoconference was held with the participation of the acting chairman of the Customs Cooperation Council of the World..."
        },
        {
            label: "Usta Xidməti",
            src: Tools,
            description: "A videoconference was held with the participation of the acting chairman of the Customs Cooperation Council of the World..."
        },
        {
            label: "Anbar Xidməti",
            src: Houses,
            description: "A videoconference was held with the participation of the acting chairman of the Customs Cooperation Council of the World..."
        },
        {
            label: "İşci Qüvvəsi Xidməti",
            src: People,
            description: "A videoconference was held with the participation of the acting chairman of the Customs Cooperation Council of the World..."
        },
        {
            label: "Kargo",
            src: Box,
            description: "A videoconference was held with the participation of the acting chairman of the Customs Cooperation Council of the World..."
        },
        {
            label: "Texnoloji həllər",
            src: Laptop,
            description: "A videoconference was held with the participation of the acting chairman of the Customs Cooperation Council of the World..."
        }
    ]

  return (
    <section className="main__hservices">
        <div className="container">
            <div className="hservices__inner">
                <div className="hservices__top">
                    <h5 className="hservices__label">Xidmətlər</h5>
                    <Link to='/services'>Hamısına bax <ArrowRight /></Link>
                </div>

                <div className="hservices__bottom">
                        <div className="hservices__container">
                            {serviceList.map((service, index) => (
                                <div className="hservices__item" key={index}>
                                    <div className="hservices__item_icon">
                                        <service.src />
                                    </div>

                                    <div className="hservices__item_content">
                                        <h5 className="hservices__item_label">
                                            {service.label}
                                        </h5>

                                        <span className="hservices__item_desc">
                                            {service.description}
                                        </span>
                                    </div>

                                    <Link to='/' className='hservices__item_stroke'>
                                    <img src={Stroke} alt="" />
                                    <ChevronRight className='hservices__item_chevron'/>
                                    </Link>
                                </div>
                            ))}
                        </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeServices