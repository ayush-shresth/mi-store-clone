import React from 'react'
import '../style/NavCard.css'
function NavCard(props) {
    return (
        <div className='NavCard'>
            <img src={props.image} alt={`${props.index} index` } />
            <p>{ props.name}</p>
            <span>{ props.price }</span>
            
        </div>
    )
}

export default NavCard
