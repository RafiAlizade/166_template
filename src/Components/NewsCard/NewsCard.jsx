import './NewsCard.css';
import { Link } from 'react-router-dom';

function NewsCard({ image, date, title, description, id }) {
  return (
    <Link className='newscard__container_link' to={`/news/${id}`}>
      <div className="newscard__container_item">
        <div className="nescard__container_item_img">
          <img src={image} alt={title} />
        </div>

        <div className="newscard__item_labels">
          <span className="newscard__item_labels_date">
            {date}
          </span>

          <h6 className="newscard__item_labels_head">
            {title}
          </h6>

          <span className="newscard__item_labels_desc">
            {description}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default NewsCard;
