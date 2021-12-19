import React from 'react'
import '../style/Banner.css'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

function Banner(props) {
    return (
        <div className='banner'>
            <Carousel fade prevLabel nextLabel interval={1500} keyboard={true}>
                {props.end.map((item, index) => (
                    <Carousel.Item key={index} id="bannerItem">
                        <img
                            className="d-block w-100"
                            src={item.image}
                            alt={`${index} img`}
                            id="bannerImage"
                        />
                        <Carousel.Caption id="bannerText">
                            <p id="bannerName">{item.name}</p>
                            <div id="bannerDiv"></div>
                            <p id="bannerDescription">{item.description}</p>
                            <p id="bannerSource">Source: {item.source}</p>
                        </Carousel.Caption>
                    </Carousel.Item>))}

            </Carousel>
        </div>
    )
}

export default Banner
