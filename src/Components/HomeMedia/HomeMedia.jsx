import axios from 'axios'
import { useState, useEffect } from 'react'
import { ArrowRight } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import './HomeMedia.css'

function HomeMedia() {
    const [news, setNews] = useState([])
    const [lastIndex, setlastIndex] = useState(0)

    useEffect(() => {
        const getNews = async () => {
            const response = await axios.get('http://localhost:3000/news')
            setNews(response.data)
            setlastIndex(response.data.length - 1) // Veriyi alırken son indeksi ayarla
        }
        getNews()
    }, [])


  return (
    <section className="main__onmedia">
        <div className="container">
            <div className="onmedia__inner">
            <div className="onmedia__top">
                    <h5>Mediada biz</h5>
                    <Link to='/news'>Hamısına bax <ArrowRight /></Link>
            </div>

            <div className="onmedia__bottom">
                <div className="onmedia__news">
                    {news.map((news, index) => (
                        <div className="onmedia__news_item" key={index}>
                            {index === lastIndex ?
                            <div className="onmedia__news_box">
                                <div className="onmedia__news_labels">
                                    <div className="onmedia__news_head">
                                        <span>{news.date}</span>
                                        <span>{news.label}</span>
                                    </div>

                                    <Link to={news.url}>Ətraflı oxu</Link>
                                </div>
                            </div>
                        : 
                        <div className="onmedia__news_box">
                            <div className="onmedia__news_image">
                                <img src={news.image} alt="" />
                            </div>

                            <div className="onmedia__news_labels">
                                <span>{news.date}</span>
                                <h6>{news.label}</h6>
                                <span>{news.description}</span>
                            </div>
                        </div>
                        }
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default HomeMedia