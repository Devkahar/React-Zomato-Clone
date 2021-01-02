import axios from "../helper/axios";
import { getCityLocationConstants, getGeoLocationConstants } from "./constants";

export const getGeoLocation = (lat,log)=>{
    return async dispatch =>{

        const res = await axios.get(`/geocode?lat=${lat}&lon=${log}`);
        if(res.status === 200){
            localStorage.setItem('location',JSON.stringify(res.data.location))
            dispatch({type: getGeoLocationConstants.GET_GEO_LOCATION_SUCCESS,payload:{
                location: res.data.location
            }})
        }
        console.log(res);

    }
}

export const getCityLocation = (query)=>{
    return async dispatch =>{

        const res = await axios.get(`/locations?query=${query}`);
        if(res.status ===200){
            localStorage.setItem('location',JSON.stringify(res.data.location_suggestions[0]));
            dispatch({type: getCityLocationConstants.GET_CITY_LOCATION_SUCCESS,payload:{
                location: res.data.location_suggestions[0]
            }})
            console.log("Dispatch Data",res.data.location_suggestions[0]);
        }
        
        
        
    }
}