import axios from 'axios'
import { useState, useEffect } from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'react-bootstrap-icons'

function Hero() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const getCountries = async () => {
            const resp = await axios.get('http://localhost:3000/countries')
            setCountries(resp.data)
        }

        getCountries();
    })

  return (
    <section className="hero">
        <div className="container">
            <div className="hero_inner">
                <h2 className="hero__h2">
                Lorem ipsum dolor sit amet consectetur. <span>Magna</span> tellus nibh lectus congue amet. 
                </h2>

                <div className="hero__countries">
                    {countries.map((country, index) => (
                        <button key={index}>
                            <img src={country.image} alt="" />
                            <span>{country.name}</span>
                        </button>
                    ))}
                </div>

                <div className="hero__services">
                    <div className="hero__service_box">
                        <span>Xidmətlərimiz</span>
                        <Link to='/services'><ArrowUpRight /></Link>
                    </div>
                    <div className="hero__service_box">
                        <span>Partnyorlar</span>
                        <Link to='/partners'><ArrowUpRight /></Link>
                    </div>
                    <div className="hero__service_box">
                        <span>Haqqımızda</span>
                        <Link to='/aboutus'><ArrowUpRight /></Link>
                    </div>
                    <div className="hero__service_box">
                        <span>Müştəri rəyləri</span>
                        <Link to='/comments'><ArrowUpRight /></Link>
                    </div>
                </div>   
            </div>
        </div>
    </section>
  )
}

export default Hero