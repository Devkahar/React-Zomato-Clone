import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurant } from '../../actions/restaurants.action';
import Gallery from '../../component/Gallery/Gallery'
import "./RestaurantPage.css"
const RestaurantPage = (props) => {
    const data = useSelector(state => state)
    const dispatch = useDispatch();
    console.log(props.match.params.id);
    useEffect(()=>{
        dispatch(getRestaurant(props.match.params.id));
    },[]);
    return (
        <div>
            Hey Restaurant Here
            <Gallery/>
        </div>
    )
}

export default RestaurantPage;
