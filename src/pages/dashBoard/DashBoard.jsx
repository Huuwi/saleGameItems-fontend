// Dashboard.js
import React, { useEffect, useState, useRef } from 'react';
import style from './Dashboard.module.css';
import { FaUserFriends, FaChartPie, FaStore, FaCommentDots, FaWallet, FaUserCircle } from 'react-icons/fa';
import axios from 'axios';
import NavbarDashboard from '../../components/Navbardashboard/Navbar.dashboard';
import HeaderDashboard from '../../components/HeaderDashboard/Header.dashboard';
import ContentSaling from '../../components/Content.Saling/Content.saling';
import { json } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import lolVideo from '../../assets/lol2.webm';
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import Footer from '../../components/Footer/Footer';


const Dashboard = () => {
    const [hide, setHide] = useState(true)

    const hanndleClickMenuIcon = () => {
        setHide(pre => !pre);
    }

    return (
        <>
            {/* <NavbarDashboard /> */}
            <div className={style["dashboard_container"]}>
                <div className={style["nav-horizional"]}>
                    <HiOutlineSquares2X2 className={style['menu']} onClick={hanndleClickMenuIcon} />
                    <p>DASHBOARD</p>
                </div>
                <NavbarDashboard hide={hide} />
                <Footer />
            </div>
        </>
    );
};

export default Dashboard;




