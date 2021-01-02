import axios from "../helper/axios"
import { getCollectionConstants } from "./constants"


export const getCollection = (city_id,lat,lon)=>{
    return async dispatch =>{
        const res = await axios.get(`/collections?city_id=${city_id}&lat=${lat}&lon=${lon}`)
        localStorage.setItem('collections',JSON.stringify({ collections: res.data.collections}))
        dispatch({type: getCollectionConstants.GET_COLLECTIONS_SUCCESS,payload:{collections: res.data.collections}})
        //console.log(res.data.collections);
    }
}