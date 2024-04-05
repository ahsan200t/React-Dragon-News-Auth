import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const NewsCard = ({ news }) => {
  const { title, image_url, details, rating, total_view, _id } = news;
  return (
    <div className="card card-compact bg-base-100 border mb-8">
      <p className="card-title p-4">{title}</p>
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="">
        {
        
         details.length>200
         ? <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className="link link-error no-underline">Read More....</Link></p>
         : <p>{details}</p>
        
        }
        </h2>
       
        <div>
          <hr />
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
            <div>{rating.number}</div>
          </div>
          <div className="flex items-center gap-2">
            <p>
              <FaEye></FaEye>
            </p>
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
