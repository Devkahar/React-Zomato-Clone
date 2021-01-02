import { getCollectionConstants } from "../actions/actions";

const initState = localStorage.getItem('collections') !=undefined ? JSON.parse(localStorage.getItem('collections')) : {collections: []}


export default (state = initState,action)=>{
    switch (action.type) {
        case getCollectionConstants.GET_COLLECTIONS_SUCCESS:
            return state ={
                ...state,
                collections: action.payload.collections 
            }       
    
        default:
            break;
    }
    return state;
}