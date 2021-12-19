import React from 'react'
import OfferItem from './OfferItem.js'
import '../style/Offers.css'

function Offers(props) {
    return (
        <div className='offerSection'>
            {props.offer.map((item, index) => (
                <OfferItem key={item.image} index={index} scr={item.image} link={item.url} />
            ))}
        </div>
    )
}

export default Offers
