import React from 'react'
import '../style/ReviewItem.css'

function ReviewItem(props) {
    return (
        <div className='reviewItem'>
            <img src={props.image} alt={`${props.index} review`} />
            <div className="text">
                <h5>{props.review}</h5>
                <span>{props.name}</span>
                <b>{props.price}</b>
            </div>
        </div>
    )
}

export default ReviewItem
