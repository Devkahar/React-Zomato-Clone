import React from 'react'
import LocationSeach from '../LocationSearch/LocationSeach'
import RestaurantSeach from '../RestaurantSearch/RestaurantSeach'
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css"
import { useSelector } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
const Header = (props) => {
    //const locationTitle = useSelector(state => state.locationDetails.location.city_name)
    const locationTitle = props.city_name
    return (
        <div className="header">
            <div className="header__nav">
                <div className="logoImage">
                    <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="zomatoLogo"/>
                </div>                
                <ul className="nav-list">
                    <li>LogIn</li>
                    <li>SignUp</li>
                </ul>

            </div>
            <div className="header__text">
                <h2>Discover the best food & drinks in {locationTitle}</h2>
                <SearchBar/>
            </div>
            
        </div>
    )
}

export default Header
