import React from 'react'
import { ArrowRight } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import Facebook from './../../assets/images/facebook.svg'
import Instagram from './../../assets/images/instagram.svg'
import Youtube from './../../assets/images/youtube.svg'
import Linkedin from './../../assets/images/linkedin.svg'
import './Footer.css'

function Footer() {
  return (
    <footer className="main__footer">
        <div className="container">
            <div className="footer__inner">
                <div className="footer__top">
                    <div className="footer__services">
                        <h5 className="footer__mainlabel">
                            Xidmətlər
                        </h5>

                        <ul className="footer__links">
                            <Link to='/transport'>Transport</Link>
                            <Link to='/logistics'>Logistika</Link>
                            <Link to='/carry'>Yükdaşıma</Link>
                            <Link to='/xalcayuma'>Xalça yuma</Link>
                            <Link to='/cargo'>Karqo xidməti</Link>
                            <Link to='/showall' className='footer__links_marked'>Hamısına bax <ArrowRight /></Link>
                        </ul>
                    </div>

                    <div className="footer__uselinks">
                    <h5 className="footer__mainlabel">
                            Faydalı linklər
                        </h5>

                        <ul className="footer__links">
                             <Link to='/aboutus'>Haqqımızda</Link>
                             <Link to='/ourteam'>Bizim komanda</Link>
                             <Link to='/wearemedia'>Mediada biz</Link>
                             <Link to='/blog'>Bloq</Link>
                             <Link to='/faq'>Tez-tez verilən suallar</Link>
                             <Link to='/galerry'>Qaleriya</Link>
                        </ul>
                    </div>

                    <div className="footer__contact">
                    <h5 className="footer__mainlabel">
                            Əlaqə
                        </h5>

                        <ul className="footer__links">
                            <Link to=''>Ünvan : Yeni Həyat plaza 55 Zərifə Əliyeva, Bakı, Azərbaycan</Link>
                            <Link to='tel:+994'>Əlaqə nömrəsi : +994 (50) 253 46 16</Link>
                            <Link to='mail:refielizade3@gmail.com'>Elektron poçt : info@166.az</Link>
                            <div className="footer__social_links">
                                <Link to='facebook'>
                                <img src={Facebook} alt="" /></Link>
                                <Link to='instagram'>
                                <img src={Instagram} alt="" /></Link>
                                <Link to='youtube'>
                                <img src={Youtube} alt="" /></Link>
                                <Link to='linkedin'>
                                <img src={Linkedin} alt="" /></Link>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className="footer__linebreak">

                </div>

                <div className="footer_bottom">
                    <span>
                    © 2022 | 166.az | Bütün hüquqlar qorunur <Link to='166.az'>166tech.az</Link>
                    </span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer