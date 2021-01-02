import { getRestaurantsListConstants } from "../actions/actions";

const initState = {
    restaurants: []
};


export default (state = initState,action)=>{
    switch (action.type) {
        case getRestaurantsListConstants.GET_RESTAURANTS_SUCCESS:
            
            return state = {
                ...state,
                restaurants: action.payload.restaurants,
            }
    }
    return state;
}