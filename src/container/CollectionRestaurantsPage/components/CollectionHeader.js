import React from 'react'
import "./CollectionHeader.css"
const CollectionHeader = (props) => {
    return (
        <div className="collectionHeader">
            <h1>
                {props.title}
            </h1>
            <h3>{props.description}</h3>
        </div>
    )
}

export default CollectionHeader
