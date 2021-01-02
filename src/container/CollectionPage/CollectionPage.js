import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import "./CollectionPage.css"
const CollectionPage = () => {
    const collections = useSelector(state => state.collections.collections);

    return (
        <div className="collectionPage">
            <h1 className="collectionPage__heading">Explore Top collections</h1>
            <div className="collectionPage__list">
            {collections.map((res,index) => 
                    <div className="collectionPage__list--items" key={res.collection.collection_id}>
                        <Link to={`/collections/${res.collection.collection_id}`} className="collectionPage__link">
                            <div className="collectionPage__back"></div>
                            <div className="collectionPage__image">
                                <img src={res.collection.image_url} alt=""/>
                            </div>
                            <div className="collectionPage__content">
                                <div className="collectionPage__content--name">{res.collection.title}</div>
                                <div className="collectionPage__content--places"><span>{res.collection.res_count} Places</span> <ArrowRightIcon className="arrowIcon"/> </div>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CollectionPage
