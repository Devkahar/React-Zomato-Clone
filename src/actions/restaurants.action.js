import axios from '../helper/axios';
import { getRestaurantsListConstants } from './constants';


export const  getRestaurantList = (entity_id,entity_type,id)=>{
    return async dispatch =>{
        try {
            const res = await axios.get(`/search?entity_id=${entity_id}&entity_type=${entity_type}&collection_id=${id}`);
            console.log(res)
            dispatch({type: getRestaurantsListConstants.GET_RESTAURANTS_SUCCESS,payload: {
                restaurants: res.data.restaurants}});
            
        } catch (error) {
            console.log(error)
        }
    }
}
export const getRestaurant = (restaurantId)=>{

    return async dispatch =>{
        try {
            const res = await axios.get(`/restaurant?res_id=${restaurantId}`);
            console.log(res);
        } catch (error) {
            
        }
    }
}