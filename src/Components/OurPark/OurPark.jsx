import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import './OurPark.css'

function OurPark() {
    const parkItems = [
        {
            label: "Soyuduculu",
            description: "5.1 metr / 5 ton",
            source: "src/assets/images/parkTruck.svg"
        },
        {
            label: "Soyuduculu",
            description: "5.1 metr / 5 ton",
            source: "src/assets/images/parkTruck.svg"
        },
        {
            label: "Soyuduculu",
            description: "5.1 metr / 5 ton",
            source: "src/assets/images/parkTruck.svg"
        },
        {
            label: "Soyuduculu",
            description: "5.1 metr / 5 ton",
            source: "src/assets/images/parkTruck.svg"
        },
        {
            label: "Soyuduculu",
            description: "5.1 metr / 5 ton",
            source: "src/assets/images/parkTruck.svg"
        },
        {
            label: "Soyuduculu",
            description: "5.1 metr / 5 ton",
            source: "src/assets/images/parkTruck.svg"
        }
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false, 
        responsive: [
            {
                breakpoint: 1424,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 743,
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
    <section className="main__ourpark">
        <div className="container">
            <div className="ourpark__inner">
                <div className="ourpark__top">
                    <h5 className="ourpark__label">
                        Bizim avtopark
                    </h5>
                </div>

                <div className="ourpark__bottom">
                    <div className="ourpark__container">
                    <Slider {...settings}>
                {parkItems.map((items, index) => (
                    <div className="ourpark__items" key={index}>
                       <div className="ourpark__items_labels">
                            <span className="ourpark__items_label">
                                {items.label}
                            </span>

                            <span className="ourpark__items_desc">
                            {items.description}
                            </span>
                       </div>

                       <div className="ourpark__items_img">
                       <img src={items.source} alt={items.label} />
                       </div>
                    </div>
                ))}
            </Slider>        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurPark