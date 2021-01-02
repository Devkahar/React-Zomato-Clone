import React from 'react'
import RestaurantCard from './RestaurantCard/RestaurantCard'
import "./Restaurants.css"
const Restaurants = (props) => {
    return (
        <div className="restaurants">
            {props.restaurants.map(e =>
                <RestaurantCard 
                    key={e.restaurant.id}
                    id={e.restaurant.id}
                    img={e.restaurant.featured_image}
                    name={e.restaurant.name}
                    establishment={e.restaurant.establishment[0]}
                    cuisines={e.restaurant.cuisines}
                    locality={e.restaurant.location.locality}
                    votes={e.restaurant.user_rating.votes}
                />
            )}
        </div>
    )
}

export default Restaurants
