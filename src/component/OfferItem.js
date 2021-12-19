import React from 'react'

function OfferItem(props) {
    return <a href={props.link}>
        <img src={props.scr} alt={`${props.index} offer`} />
    </a>
}

export default OfferItem
