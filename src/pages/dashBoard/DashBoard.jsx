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


const Dashboard = () => {
    const [type, setType] = useState("TrangPhuc")

    return (
        <>
            {/* <NavbarDashboard /> */}
            <div className={style["dashboard_container"]}>
                <div className={style["nav-horizional"]}>
                    <HiOutlineSquares2X2 className={style['menu']}/>
                </div>
                <NavbarDashboard />
            </div>
        </>
    );
};

export default Dashboard;



// {/* <div className={style['dashboard-container']}>
// <div id={style["workplace"]}>
//     <HeaderDashboard />
//     <div className={style["news"]}>
//         <p className={style["title"]}>TIN TỨC VÀ SỰ KIỆN</p>
//         <div className={style["recommend-product"]}>
//             <div className={style["product"]}>
//                 <div className={style["banner-wrapper"]}>
//                     <div className={style["product-banner"]}></div>
//                 </div>
//                 <button className={style["link-btn"]}></button>
//                 <p className={style["product-desc"]}>

//                 </p>
//             </div>
//             <div className={style["product"]}>
//                 <div className={style["banner-wrapper"]}>
//                     <div className={style["product-banner1"]}></div>
//                 </div>
//                 <p className={style["product-desc"]}></p>
//             </div>
//             <div className={style["product"]}>
//                 <div className={style["banner-wrapper"]}>
//                     <div className={style["product-banner2"]}></div>
//                 </div>
//                 <p className={style["product-desc"]}></p>
//             </div>
//             {/* <div className={style["decorate-shape2"]}></div> */}
//             <div className={style["video-decoration"]}>
//                 <video className={style["decorate-shape3"]} autoPlay muted controls loop>
//                     <source src={lolVideo} type="video/mp4" />
//                     Trình duyệt của bạn không hỗ trợ thẻ video.
//                 </video>
//             </div>
//         </div>
//     </div>
//     <div className={style["demo-product"]}>
//         <div className={style["user-desc"]}></div>
//         <div className={style["decorate-shape"]}>
//             <div className={style["img"]}></div>
//         </div>
//     </div>
//     <div className={style["footer"]}></div>
// </div>
// </div> */}
