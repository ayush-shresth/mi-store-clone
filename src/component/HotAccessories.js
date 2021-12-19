import React from 'react'
import '../style/HotAccessories.css'
import HotItemCard from './HotItemCard.js';


function HotAccessories(props) {
    return (
        
        <div className='hotAccessories'>
            <div className='hotAccessoriesCover'>
            <img src={props.musicCover } alt="pic" />
            </div>
            <div className='hotAccessoriesItem'>
                {props.music.map((item,index)=>(<HotItemCard key={index} index={index} image=
                {item.image} price={item.price} name={item.name}/>))}
                <HotItemCard image={"https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" }/>
            </div>
        </div>
    )
}

export default HotAccessories
