import React from 'react'
import '../style/Slider.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

function Slider(props) {
    return (
        <div>
            <Carousel fade prevLabel nextLabel interval={2000}>
                {props.start.map((item) => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={item}
                            alt="img"
                        />
                    </Carousel.Item>))}

            </Carousel>
        </div>
    )
}

export default Slider
