import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CollectionHeader from './components/CollectionHeader';
import Restaurants from '../../component/Restaurants/Restaurants';
import { getRestaurantList } from '../../actions/restaurants.action';

const CollectionRestaurantsPage = (props) => {
    const locationDetails = useSelector(state => state.locationDetails.location);
    const collection = useSelector(state => state.collections.collections.filter(e => e.collection.collection_id === parseInt(props.match.params.id))[0]?.collection);
    const restaurantsList = useSelector(state => state.restaurantList.restaurants);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getRestaurantList(locationDetails.entity_id,locationDetails.entity_type,props.match.params.id));
    },[collection,locationDetails]);
    return (
        <div className="CollectionRestaurantPage">
            <CollectionHeader 
                title={collection?.title} 
                description={collection?.description}
            />
            <Restaurants restaurants={restaurantsList} />
        </div>
    )
}

export default CollectionRestaurantsPage
