import React from "react";
import style from './Header.dashboard.module.css'
import { FaBell, FaSearch, FaShoppingCart } from "react-icons/fa";

function HeaderDashboard() {

    let urlAvatar = JSON.parse(localStorage.getItem("userData")).avartar
    // console.log(urlAvatar);


    return (
        <>
            <div id={style["header-container"]}>
                <div id={style["tool-bar"]}>
                    <div className={style[""]}>
                        <input type="text" placeholder="Search..." className={style["input-search"]} />
                        <FaSearch className={style['search-icon']} />
                    </div>
                    <div className={style["tool-container"]}>
                        <p className={style["name"]}>Amin</p>
                        <div className={style["avatar"]} style={{ backgroundImage: `url(${urlAvatar})` }}></div>
                        <FaBell className={style["bell-icon"]}></FaBell>
                        <FaShoppingCart className={style["cart-icon"]}></FaShoppingCart>
                    </div>
                </div>
                <div id={style["banner"]}></div>
            </div>
        </>
    )
}

export default HeaderDashboard;