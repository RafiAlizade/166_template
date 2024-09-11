import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './BrandSlider.css'

function BrandCarousel() {
    const brands = [
        {
          "name": "Patırtı",
          "source": "src//assets/images/Patirti.svg" // Eğer böyle bir dosyanız varsa
        },
        {
          "name": "Trendyol",
          "source": "src//assets/images/trendyol.svg"
        },
        {
          "name": "Camper",
          "source": "src//assets/images/camper.svg"
        },
        {
          "name": "Karaca",
          "source": "src//assets/images/karaca.svg"
        },
        {
          "name": "Morhipo",
          "source": "src//assets/images/morhipo.svg"
        },
        {
          "name": "Markafoni",
          "source": "src//assets/images/markafoni.svg"
        }
      ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <section className="main__slider">
               <div className="slider__container">
               <Slider {...settings}>
                {brands.map((brand, index) => (
                    <div className="brand__box" key={index}>
                        <img src={brand.source} alt={brand.name} />
                    </div>
                ))}
            </Slider>
               </div>
        </section>
    );
}

export default BrandCarousel;
