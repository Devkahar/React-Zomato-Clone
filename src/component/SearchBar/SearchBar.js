import React from 'react'
import LocationSeach from '../LocationSearch/LocationSeach'
import RestaurantSeach from '../RestaurantSearch/RestaurantSeach'
import SearchIcon from '@material-ui/icons/Search';
import "./SearchBar.css"
const SearchBar = () => {
    return (
        <div className="searchBar">
            <LocationSeach/>
            <RestaurantSeach/>
            <SearchIcon className="SearchIcon"/>
        </div>
    )
}

export default SearchBar
