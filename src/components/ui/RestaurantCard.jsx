import './RestaurantCard.css'
import { IMG_CDN_URL } from '../../config'

const RestaurantCard = ({ name= "restaurantName", locality= "Area", avgRatingString= "4", cuisines, cloudinaryImageId = "bfcokymofrup2ykclotw"}) => {
  return (
    <div className="retro-card">
      <div className="retro-card-image">
        <img 
          src={IMG_CDN_URL + cloudinaryImageId} 
          alt={name} 
        />
      </div>
      <div className="retro-card-content">
        <h2 className="retro-card-title">{name}</h2>
        <h3 className="retro-card-cuisines" >{cuisines.join(", ")}</h3>
        <p className="retro-card-locality">{locality}</p>
        <div className="retro-card-rating">
        <span className="retro-card-rating-text">{avgRatingString}</span>
          <span className="retro-card-stars">{'★'.repeat(Math.round(parseFloat(avgRatingString)))}</span>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard;