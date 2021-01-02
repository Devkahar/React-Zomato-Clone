import React, { useEffect, useState } from "react";
import "./LocationSearch.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import { useDispatch, useSelector } from "react-redux";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { getCityLocation, getGeoLocation } from "../../actions/actions";
import axios from "../../helper/axios";
const LocationSeach = () => {
  const dispatch = useDispatch();
  const locationTitle = useSelector(state => state.locationDetails.location.title)
  
  const [query, setQuery] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [displaySuggestion, setDisplaySuggestion] = useState(false);
  const [citySuggestion, setCitySuggestion] = useState([]);
  const cityChangeHandler = (value) => {
    setQuery(value);
    axios
      .get(`/cities?q=${query}`)
      .then((res) => {
        setCitySuggestion(res.data.location_suggestions);
        //console.log(res.data.location_suggestions);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const geoLocation = (position) => {
    setDisplaySuggestion(false)
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  };
  const geoLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(geoLocation);
    console.log(lat, long);
    dispatch(getGeoLocation(lat, long));
  };
  const cityHandler = (query) => {
      setQuery("")
    setDisplaySuggestion(false)
    console.log("CityHandler");
    dispatch(getCityLocation(query));
  };
  return (
    <>
      <div className="LocationSearch">
        <div className="LocationSearch__input">
          <LocationOnIcon className="LoactionIcon" />
          <input
          className="inputFoc"
            type="text"
            value={query}
            placeholder={locationTitle}
            onFocus={() => setDisplaySuggestion(true)}
            onChange={(e) => cityChangeHandler(e.target.value)}
          />
        <div className="arrowIcon"><ArrowDropDownIcon /></div>
          {displaySuggestion && <div className="suggestions">
          <div
            className="suggestions__geoLocation"
            onClick={geoLocationHandler}
          >
            <MyLocationIcon className="myLocationIcon" />
            <div>Detect current location</div>
          </div>
          <div className="popular__location">Popular Locations</div>
          <div className="suggestions__city">
            {citySuggestion.map((data) => (
              <div key={data.name} onClick={() => cityHandler(data.name)}>{data.name}</div>
            ))}

          </div>
        </div>}
        </div>
      </div>

      
        
    </>
  );
};

export default LocationSeach;
