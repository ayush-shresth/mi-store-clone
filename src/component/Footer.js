import React from 'react'
import '../style/Footer.css'
import '../style/FooterMain.css'
function Footer(props) {
    return (
        <>
            <div className='footer'>
                <div className='footerItem'>
                    <i className="material-icons">loop </i>
                    <p><b>Hassle-free replacement</b><br />
                        <span> 10-day easy replacement policy on mi.com</span></p>
                </div>
                <div className='footerItem'>
                    <i className="material-icons">paid </i>
                    <p><b>100% secure payments</b><br />
                        <span>We support Cards, Wallets, EMI and COD</span></p>
                </div>
                <div className='footerItem'>
                    <i className="material-icons">groups </i>
                    <p><b>Vast service network</b><br />
                        <span>1000 Mi service-centers across 600 cities</span></p>
                </div>
            </div>
            <div className='footer2'>
                <div className='footer2-part1'>
                    <p>LET'S STAY IN TOUCH</p>
                    <span>Get updates on sales specials and more</span>
                </div>
                <div className='footer2-part2'>
                    <input type="email" name="email" placeholder="Enter your Email" id="email" />
                    <button> &gt; </button>
                </div>
                <div className='footer2-part3'>
                    <p><b>FOLLOW MI</b><br />
                        We want to hear from you!</p>
                </div>

            </div>
            <div className="footerMain">
                <div>
                    <p>Support</p>
                    {props.data.support.map((item, index) => (
                        <a key={item.url} href={item.url} >{item.name}</a>
                    ))}
                </div>
                <div>
                    <p>Shop And Learn</p>
                    {props.data.shopAndLearn.map((item, index) => (
                        <a key={item.url} href={item.url} >{item.name}</a>
                    ))}
                </div>
                <div>
                    <p>Retail Store</p>
                    {props.data.retailStore.map((item, index) => (
                        <a key={item.url} href={item.url} >{item.name}</a>
                    ))}
                </div>
                <div>
                    <p>About</p>
                    {props.data.aboutUS.map((item, index) => (
                        <a key={item.url} href={item.url} >{item.name}</a>
                    ))}
                </div>
                <div><p>Contact Us</p>
                    {props.data.contactUs.map((item, index) => (
                        <a key={item.url} href={item.url} >{item.name}</a>
                    ))}
                </div>
                <div>
                    <div>Chat with our Virtual AI Bot
                        <div>(24/7 Live Agent Support)</div>
                    </div>
                    <button>CHAT NOW</button>
                </div>
            </div>
            <div className="footerBorder">
                <div>Copyright © 2010 - 2021 Xiaomi. All Rights Reserved</div>
            </div>
        </>
    )
}

export default Footer
