import React from 'react'
import "./Gallery.css"
const Gallery = () => {
    return (
        <div className="gallary">
            <div className="gallary__left">
                <div className="gallary__left--item">
                    <img src="https://b.zmtcdn.com/data/pictures/3/18409523/54f5f0decc4cfc3e4916096ec9f1af66.jpg" alt=""/>
                </div>
            </div>
            <div className="gallary__right">
                <div className="gallary__right--item"><img src="https://b.zmtcdn.com/data/pictures/7/3200387/9d05f79de83cc25ea9e617fc5b6791cd.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*" alt=""/></div>
                <div className="gallary__right--item"><img src="https://b.zmtcdn.com/data/reviews_photos/9ee/293a9eccb6313f154aebfe6cf81f59ee_1573307306.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*" alt=""/></div>
            </div>
        </div>
    )
}

export default Gallery
