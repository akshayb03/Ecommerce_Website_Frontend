import GreenStarIcon from "../assets/green-star-icon.png";
import "../styles/RatingComponent.css";

export const RatingComponent = ({ rating, ratingTotal }) => {
  return (
    <div>
      <div className="inner-container">
        <div className="rating-container">
          <span className="rating">{rating}</span>
          <img
            width={18}
            height={18}
            src={GreenStarIcon}
            alt="star-icon"
            className="star-icon"
          />
        </div>
        <div className="rating-separator" />
        <div className="total-rating-container">
          <span className="total-ratings">{ratingTotal}</span>
          <span className="ratings-text">{"Ratings"}</span>
        </div>
      </div>
    </div>
  );
};
