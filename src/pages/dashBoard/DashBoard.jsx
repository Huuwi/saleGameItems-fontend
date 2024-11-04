import React, { useState } from 'react';
import style from './Dashboard.module.css';
import NavbarDashboard from '../../components/Navbardashboard/Navbar.dashboard';
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import Footer from '../../components/Footer/Footer';
import lol from '../../assets/lol2.mp4';
import { IoSearchOutline } from "react-icons/io5";

const Dashboard = () => {
    const [hide, setHide] = useState(false);

    const handleClickMenuIcon = () => {
        setHide(!hide);
    };

    return (
        <div className={style["dashboard_container"]}>
            <video autoPlay muted loop src={lol} className={style["video"]}>
                Trình duyệt của bạn không hỗ trợ video.
            </video>
            <div className={style["nav-horizional"]}>
                <HiOutlineSquares2X2 className={style['menu']} onClick={handleClickMenuIcon} />
                <p>DASHBOARD</p>
                <div className={style["decoration"]}></div>
                <input className={style["input"]} placeholder='Search...'></input>
                <IoSearchOutline className={style['search-icon']} />
                <p className={style["web-name"]}>GAMMI<a className={style['last-letter']}>E</a></p>
                <button class={style["button-50"]} role="button">ĐĂNG XUẤT</button>
            </div>
            <div className={style["nav"]} style={{ left: hide ? '-20%' : '0px' }}>
                <NavbarDashboard />
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
