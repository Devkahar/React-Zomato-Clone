import React from 'react'
import StarIcon from "@material-ui/icons/Star";
import "./RestaurantCard.css"
import { Link } from 'react-router-dom';
const RestaurantCard = (props) => {
    const url = "https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A";
    return (
        <div className="restaurantCard">
            <Link to={`/collections/restarant/${props.id}`}>
                <div className="restaurantCard__image">
                    <img src={props.img ===""?url:props.img} alt=""/>
                </div>
                <div className="restaurantCard__back"></div>
                <div className="restaurantCard__text">
                    <h4>
                        {props.name}
                    </h4>
                    
                    <div className="description">
                        <div className="rating">
                        <StarIcon className="starIcon" /> <strong>({props.votes})</strong>
                        </div>
                        <div className="text__locality">{props.locality}</div>
                        <div className="text__desc">
                            <span>{props.establishment}  -</span> <span>{props.cuisines}</span> </div>
                    </div>
                </div>
            </Link>
            
        </div>
    )
}

export default RestaurantCard
