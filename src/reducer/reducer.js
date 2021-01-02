import { combineReducers } from "redux";
import locationDetails from "./searchLocation";
import collections from "./collection.reducer"
import restaurantList from './restaurants.reducer'
const rootReducer = combineReducers({
    locationDetails,
    collections,
    restaurantList,
});

export default rootReducer