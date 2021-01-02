import React, { useState } from "react";
import "./RestaurantSearch.css";
import axios from "../../helper/axios";
import { useSelector } from "react-redux";
import StarIcon from "@material-ui/icons/Star";
const RestaurantSeach = () => {
  const locationDetails = useSelector(
    (state) => state.locationDetails.location
  );
  const [restaurantSuggestion, setRestaurantSuggestion] = useState([]);
  const [query, setQuery] = useState("");

  const restaurantSearchHandler = (value) => {
    setQuery(value);
    axios
      .get(
        `/search?entity_id=${locationDetails.entity_id}&entity_type=${locationDetails.entity_type}&q=${value}&lat=${locationDetails.latitude}&lon=${locationDetails.longitude}`
      )
      .then((res) => {
        console.log(res.data.restaurants)
        setRestaurantSuggestion(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="RestaurantSearch">
      <div className="RestaurantSearch__input">
        <div className="dash" />
        <input
          type="text"
          className="inputFoc"
          value={query}
          placeholder="Restaurant Search"
          onChange={(e) => restaurantSearchHandler(e.target.value)}
        />
        {restaurantSuggestion.length >0 && <div className="restaurantSearch__suggestion">
          {restaurantSuggestion.map((res) => (
            <div className="restaurantSearch__suggestion--item">
              <div className="imgContainer">
                <img
                  src={res.restaurant.featured_image ?res.restaurant.featured_image : `https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A`}
                  alt=""
                />
              </div>
              <div className="restaurantContent">
                <h4>{res.restaurant.name}</h4>
                <div className="rating">
                  <StarIcon className="starIcon" /> <strong>{res.restaurant.user_rating.aggregate_rating}</strong>({res.restaurant.user_rating.votes})
                </div>
                <div className="restaurantLocation">{res.restaurant.location.locality_verbose}</div>
              </div>
            </div>
          ))}
        </div>}
      </div>
    </div>
  );
};

export default RestaurantSeach;
