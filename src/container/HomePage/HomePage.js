import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCollection } from '../../actions/actions';
import Collection from '../../component/Collections/Collection'
import Header from '../../component/Header/Header'

const HomePage = () => {
    const locationDetails = useSelector(state => state.locationDetails.location);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCollection(locationDetails.city_id,locationDetails.latitude,locationDetails.longitude));
    },[locationDetails])
    return (
        <div className="HomePage">
            <Header city_name={locationDetails.city_name}/>
            <Collection city_name={locationDetails.city_name}/>
        </div>
    )
}

export default HomePage
