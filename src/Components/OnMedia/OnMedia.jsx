import { useState, useEffect } from "react";
import PageHeader from "./../OurCompanyHeader/OurCompanyHeader";
import "./OnMedia.css";
import ReactPaginate from 'react-paginate';
import axios from "axios";
import NewsCard from './../NewsCard/NewsCard'; 
import { ArrowLeft , ArrowRight } from "react-bootstrap-icons";
import Advertisement from './../Advertisement/Advertisement'
import NavigateComp from './../NavigateComp/NavigateComp';

function OnMedia() {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const getNews = async () => {
      const resp = await axios.get("http://localhost:3000/media");
      setNews(resp.data);
    };

    getNews();
  }, []);

  const itemsPerPage = 15;

  const offset = currentPage * itemsPerPage;
  const currentItems = news.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(news.length / itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <section className="waomedia__main">
      <div className="container">
      <NavigateComp 
        Parent="Şirkətimiz" 
        Child="Mediada biz" 
      />
        <PageHeader />
        <div className="waomedia__inner">
          <div className="waomedia__top">
            <div className="waomedia__line"></div>

            <h5 className="waomedia__top_label">Mediada biz</h5>
          </div>

          <div className="waomedia__bottom">
      <div className="waomedia__bottom_container">
        {currentItems.map((news) => (
          <NewsCard
            key={news.id}
            image={news.image}
            date={new Date(news.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
            title={news.title}
            description={news.description}
            id={news.id}
          />
        ))}
      </div>
      
      <div className="waomedia__pagination">
      <ReactPaginate
        previousLabel={<ArrowLeft />}
        nextLabel={<ArrowRight />}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
        className={'media__paginate'}
      />
      </div>
          </div>
        </div>
        <Advertisement />
      </div>
    </section>
  );
}

export default OnMedia;
