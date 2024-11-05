import React, { useState } from 'react';
import style from './Dashboard.module.css';
import NavbarDashboard from '../../components/Navbardashboard/Navbar.dashboard';
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import Footer from '../../components/Footer/Footer';
import lol from '../../assets/lol2.mp4';
import { IoSearchOutline } from "react-icons/io5";

const Dashboard = () => {
    const [hide, setHide] = useState(false);


    return (
        <div className={style["dashboard_container"]}>
            <video autoPlay muted loop src={lol} className={style["video"]}>
                Trình duyệt của bạn không hỗ trợ video.
            </video>
            <HeaderDashboard />
            <div className={style["nav"]} style={{ left: hide ? '-20%' : '0px' }}>
                <NavbarDashboard />
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
