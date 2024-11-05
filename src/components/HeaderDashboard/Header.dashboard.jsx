import style from './Header.dashboard.module.css'
import React, { useState } from 'react';
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
function HeaderDashboard() {

    let urlAvatar = JSON.parse(localStorage.getItem("userData")).avartar
    const [hide, setHide] = useState(false);

    const handleClickMenuIcon = () => {
        setHide(!hide);
    };

    return (
        <>
            <div className={style["nav-horizional"]}>
                <HiOutlineSquares2X2 className={style['menu']} onClick={handleClickMenuIcon} />
                <p>DASHBOARD</p>
                <div className={style["decoration"]}></div>
                <input className={style["input"]} placeholder='Search...'></input>
                <IoSearchOutline className={style['search-icon']} />
                <p className={style["web-name"]}>GAMMI<a className={style['last-letter']}>E</a></p>
                <button class={style["button-50"]} role="button">ĐĂNG XUẤT</button>
            </div>
        </>
    )
}

export default HeaderDashboard;