import React, { useState, useEffect } from 'react'
import '../style/NavOptions.css'
import NavCard from './NavCard.js'

function NavOptions(props) {

    const [miPhoneToggle, setmiPhoneToggle] = useState(false);
    const [redmiPhonesToggle, setredmiPhoneToggle] = useState(false);
    const [tvToggle, settvToggle] = useState(false);
    const [laptopToggle, setlaptopToggle] = useState(false);
    const [fitnessToggle, setfitnessToggle] = useState(false);
    const [homeToggle, sethomeToggle] = useState(false);
    const [audioToggle, setaudioToggle] = useState(false);
    const [accessoriesToggle, setaccessoriesToggle] = useState(false);

    useEffect(() => {
        if (window.location.pathname === "/miphones") {
            return setmiPhoneToggle(true)
        }
        if (window.location.pathname === "/redmiphones") {
            return setredmiPhoneToggle(true)
        }
        if (window.location.pathname === "/tv") {
            return settvToggle(true)
        }
        if (window.location.pathname === "/laptops") {
            return setlaptopToggle(true)
        }
        if (window.location.pathname === "/lifestyle") {
            return setfitnessToggle(true)
        }
        if (window.location.pathname === "/home") {
            return sethomeToggle(true)
        }
        if (window.location.pathname === "/audio") {
            return setaudioToggle(true)
        }
        if (window.location.pathname === "/accessories") {
            return setaccessoriesToggle(true)
        }

    }, [])

    return (
        <div className='navOptions'>

            {miPhoneToggle ? props.miphones.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {redmiPhonesToggle ? props.redmiPhones.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {tvToggle ? props.tv.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {laptopToggle ? props.laptop.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {fitnessToggle ? props.fitness.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {homeToggle ? props.home.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {audioToggle ? props.audio.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {accessoriesToggle ? props.accessories.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}

        </div>
    )
}

export default NavOptions
