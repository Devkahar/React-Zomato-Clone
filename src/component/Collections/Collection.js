import React, { useEffect } from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import "./Collection.css"
import { useDispatch, useSelector } from 'react-redux';
import { getCollection } from '../../actions/actions';
import {Link, NavLink} from 'react-router-dom'
const Collection = (props) => {
    const collections = useSelector(state => state.collections.collections.slice(0,4));
    console.log(collections)
    return (
        <div className="collections">
            <div className="collection__title">
                <h2>Collections</h2>
            </div>
            <div className="collection__subtitle">
                <div>Explore curated lists of top restaurants, cafes, pubs, and bars in {props.city_name}, based on trends</div>
                <div className="collections__link"><Link to="/collections">All Collection in {props.city_name}</Link> <ArrowRightIcon/></div>
            </div>
            <div className="collections__lists">
                {collections.map((res,index) => 
                    <div className="collections__list--items" key={res.collection.collection_id}>
                        <Link to={`/collections/${res.collection.collection_id}`} className="link">
                        <div className="back"></div>
                        <div className="collection__image">
                            <img src={res.collection.image_url} alt=""/>
                        </div>
                        <div className="collection__content">
                            <div className="collection__content--name">{res.collection.title}</div>
                            <div className="collection__content--places"><span>{res.collection.res_count} Places</span> <ArrowRightIcon className="arrowIcon"/> </div>
                        </div>
                        </Link>
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default Collection
