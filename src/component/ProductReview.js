import React from 'react'
import ReviewItem from './ReviewItem.js';
import '../style/ProductReview.css'

function ProductReview(props) {
    return (
        <div className='productReview'>
            {props.data.map((item, index) => (
                <ReviewItem image={item.image} name={item.name} review={item.review} price={item.price} index={index}
                    key={index} />
            ))}
        </div>
    )
}

export default ProductReview
