import React from 'react'
import '../style/Video.css'
import VideoItem from './VideoItem.js'

function Video(props) {
    return (
        <div className='video'>
            {props.data.map((item, index) => (
                <VideoItem key={index} index={index} image={item.image} name={ item.name}/>
            ))}
        </div>
    )
}

export default Video
