import React from 'react'
import '../style/HotItemCard.css'

function HotItemCard(props) {
    return (
        <div className='hotItemCard'>
            <div>
                <img src={props.image} alt={`${props.index} item`} />
            </div>
            <p>{ props.name}</p>
            <span>{ props.price}</span>
        </div>
    )
}

export default HotItemCard
