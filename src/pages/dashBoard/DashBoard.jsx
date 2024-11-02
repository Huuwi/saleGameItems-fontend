// Dashboard.js
import React, { useEffect, useState, useRef } from 'react';
import style from './Dashboard.module.css';
import axios from 'axios';
import NavbarDashboard from '../../components/Navbardashboard/Navbar.dashboard';
import HeaderDashboard from '../../components/HeaderDashboard/Header.dashboard';
import ItemList from '../../components/ItemList/ItemList';
import lolVideo from '../../assets/lol2.webm';
import { HiOutlineSquares2X2 } from "react-icons/hi2";


const Dashboard = () => {
    const [type, setType] = useState("TrangPhuc")

    return (
        <>
            <div className={style["dashboard_container"]}>
                <div className={style["nav-horizional"]}>
                    <HiOutlineSquares2X2 className={style['menu']} />
                </div>
                <NavbarDashboard />
            </div>
        </>
    );
};

export default Dashboard;

