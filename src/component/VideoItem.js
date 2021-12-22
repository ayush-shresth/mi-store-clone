import React from 'react'
import '../style/VideoItem.css'

function VideoItem(props) {
    return (
        <div className='videoItem'>
            <a href="#/">
                <img src={props.image} alt={`${props.index} index`} />
            </a>

            <div className="videoText">
                <a href="#/">
                    <i className='material-icons play-icon'>play_arrow</i>
                </a>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default VideoItem
