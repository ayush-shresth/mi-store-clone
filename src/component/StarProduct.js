import React from 'react'
import '../style/StarProduct.css'
function StarProduct(props) {
    return (
        <div className='starProduct'>
            <div>
                <a href={props.item[0].url}><img src={props.item[0].image} alt="starProduct1" /></a>
            </div>
            <div>
                <a href={props.item[1].url}>
                    <img src={props.item[1].image} alt="starProduct2" />
                </a>
                <a href={props.item[2].url}>
                    <img src={props.item[2].image} alt="starProduct3" />
                </a>
                <a href={props.item[3].url}>
                    <img src={props.item[3].image} alt="starProduct4" />
                </a>
            </div>
        </div>
    )
}

export default StarProduct
