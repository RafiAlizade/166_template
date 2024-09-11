import './CustomerComments.css'
import CommentsBox from './../CommentsBox/CommentsBox'


function CustomerComments() {

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
                        <CommentsBox />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CustomerComments;