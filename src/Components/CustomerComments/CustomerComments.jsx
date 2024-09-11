import Slider from "react-slick";
import { StarFill, Star, ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import './CustomerComments.css'


function CustomerComments() {
    const customerComments = [
        {
            profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukbdwJwDMjFk0mQ_ZeXbHZyH2V7qlGXgzJkPPPY5jWuvCoaQkFxo-UBeJJxO42OtXllY&usqp=CAU",
            starCount: 5,
            name: "Lisa Smith",
            comment: 'Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.'
        },
        {
            profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukbdwJwDMjFk0mQ_ZeXbHZyH2V7qlGXgzJkPPPY5jWuvCoaQkFxo-UBeJJxO42OtXllY&usqp=CAU",
            starCount: 5,
            name: "Lisa Smith",
            comment: 'Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.'
        },
        {
            profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukbdwJwDMjFk0mQ_ZeXbHZyH2V7qlGXgzJkPPPY5jWuvCoaQkFxo-UBeJJxO42OtXllY&usqp=CAU",
            starCount: 5,
            name: "Lisa Smith",
            comment: 'Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.'
        },
        {
            profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukbdwJwDMjFk0mQ_ZeXbHZyH2V7qlGXgzJkPPPY5jWuvCoaQkFxo-UBeJJxO42OtXllY&usqp=CAU",
            starCount: 5,
            name: "Lisa Smith",
            comment: 'Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.'
        },
        {
            profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukbdwJwDMjFk0mQ_ZeXbHZyH2V7qlGXgzJkPPPY5jWuvCoaQkFxo-UBeJJxO42OtXllY&usqp=CAU",
            starCount: 5,
            name: "Lisa Smith",
            comment: 'Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.'
        },
        {
            profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukbdwJwDMjFk0mQ_ZeXbHZyH2V7qlGXgzJkPPPY5jWuvCoaQkFxo-UBeJJxO42OtXllY&usqp=CAU",
            starCount: 5,
            name: "Lisa Smith",
            comment: 'Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.'
        },
        {
            profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukbdwJwDMjFk0mQ_ZeXbHZyH2V7qlGXgzJkPPPY5jWuvCoaQkFxo-UBeJJxO42OtXllY&usqp=CAU",
            starCount: 5,
            name: "Lisa Smith",
            comment: 'Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.'
        },
    ]

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
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

    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <div className="c-comments__slider_previous">
                 <ChevronLeft onClick={onClick} />
            </div>
        );
    }

    function NextArrow(props) {
        const { onClick } = props;
        return (
            <div className="c-comments__slider_next">
                 <ChevronRight onClick={onClick} />
            </div>
        );
    }

    const renderStars = (count) => {
        const totalStars = 5;
        let stars = [];
        for (let i = 0; i < totalStars; i++) {
            stars.push(i < count ? <StarFill color="gold" /> : <Star color="gold" />);
        }
        return stars;
    };

    return (
        <section className="main__c-comments">
            <div className="container">
                <div className="c-comments__inner">
                    <div className="c-comments__top">
                        <div className="c-comments__top_left">
                            <h5 className="c-comments__label">Müştəri rəyləri</h5>
                            <span className="c-comments__label_desc">
                                Lorem Ipsum Dolor Sit Amet Consectetur. Magna Tellus Nibh Lectus Congue Amet.
                            </span>
                        </div>

                        <div className="c-comments__top_right">
                            <span className="c-comments__totalrev">Total Reviews</span>
                            <span className="c-comments__count">122 K</span>
                        </div>
                    </div>

                    <div className="c-comments__bottom">
                        <Slider {...settings}>
                            {customerComments.map((comment, index) => (
                                <div className="c-comments__container_item" key={index}>
                                    <div className="c-comments__user_detail">
                                            <div className="c-comments__user_detail_top">
                                            <div className="c-comments__user_photo" style={{width: '80px', height: '80px'}}>
                                                <img src={comment.profilePicture} alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                                            </div>

                                            <span className="c-comments__user_number">
                                                0{index +1}
                                            </span>
                                            </div>

                                            <div className="c-comments__user_detail_bottom">
                                                <div className="c-comments__user_detail_star">
                                                {renderStars(comment.starCount)}
                                                </div>

                                                <span className="c-comments__user_detail_desc">
                                                    {comment.comment}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="c-comments_linebreak">

                                        </div>

                                        <h6 className="c-comments__user_name">
                                            {comment.name}
                                        </h6>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CustomerComments;