import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    // console.log(news);
    const { _id,title,image_url,details } = news;
    return (
        <section>
        <div className="card bg-base-100 shadow-xl mb-16 border-b-2">
        <figure><img src={image_url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {
     details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className='text-primary font-bold'>Read More...</Link> </p> 
            : <p>{details}</p>
          }
          
        </div>
      </div> 
        </section>
    );
};

export default NewsCard;

NewsCard.propTypes = {
    
    news: PropTypes.object,
}