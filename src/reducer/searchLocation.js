import { getCityLocationConstants, getGeoLocationConstants } from "../actions/actions";

const loc = ()=>{
    if(localStorage.getItem('location')){
        return JSON.parse(localStorage.getItem('location'))
    }else{
        return {
            city_id: 32,
            city_name: "Vadodara",
            country_id: 1,
            country_name: "India",
            entity_id: 83731,
            entity_type: "subzone",
            latitude: "22.2877930000",
            longitude: "73.2031120000",
            title: "Navapura"
        }
    }
}

const initialState ={
    location: loc(),
    loading: false,
}

export default (state = initialState,action)=>{
    switch (action.type) {
        case getGeoLocationConstants.GET_GEO_LOCATION_SUCCESS:
            return state ={
                ...state,
                location: {...action.payload.location}
            }
        case getCityLocationConstants.GET_CITY_LOCATION_SUCCESS:
            return state ={
                ...state,
                location:{ ...action.payload.location}
            }
        default:
            break;
    }
    return state;
}