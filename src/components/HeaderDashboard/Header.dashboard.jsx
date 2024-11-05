import style from './Header.dashboard.module.css'
import React, { useState } from 'react';
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

function HeaderDashboard({ handleClickMenuIcon, title }) {

    let navigate = useNavigate()
    let userData = JSON.parse(localStorage.getItem("userData"))
    let urlAvatar = userData.avartar
    let nickName = userData.nickName

    return (
        <>
            <div className={style["nav-horizional"]}>
                <div className={style.infor}>
                    <div onClick={() => { navigate("/myAccount") }} style={{ backgroundImage: `url(${urlAvatar})`, backgroundSize: "cover", height: "80px", width: "80px", borderRadius: "50%", opacity: 1 }} className={style.avartar} > </div>
                    <span style={{ color: "white", fontWeight: "bold", whiteSpace: "nowrap" }} > Xin chào : {nickName}</span>
                </div>
                <HiOutlineSquares2X2 className={style['menu']} onClick={handleClickMenuIcon} />
                <p className={style['main-title']}>{title}</p>
                <div className={style["decoration"]}></div>
                <p className={style["web-name"]}>GAMMI<a className={style['last-letter']}>E</a></p>
                <button class={style["button-50"]} role="button" onClick={() => { navigate("/login") }} >ĐĂNG XUẤT</button>
            </div>
        </>
    )
}

export default HeaderDashboard;