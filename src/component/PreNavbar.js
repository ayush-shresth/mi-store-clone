import React from 'react'
import '../style/PreNavbar.css';

function preNavbar() {
    return (
        <>
            <div className="preNav">
                <div>
                    <a href="https://www.mi.com/in/">XIAOMI INDIA</a><span>|</span>
                    <a href="https://in.event.mi.com/in/install-mi-store">GET MI STORE</a><span>|</span>
                    <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a><span>|</span>
                    <a href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE</a>

                    <i>
                        <i class="material-icons sym">email</i>
                        ayushshresth97@gmail.com
                    </i>
                    <i>
                        <i class="material-icons sym">call</i>
                        7667802742
                    </i>
                </div>

                <div>
                    <a href="https://store.mi.com/in/site/login">SIGN IN</a><span>|</span>
                    <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN OUT</a><span>|</span>
                    <a href="https://store.mi.com/in/cart"><i className="material-icons cart_icon">shopping_cart</i>CART(0)</a>
                </div>
            </div>
        </>
    )
}

export default preNavbar
