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

const Dashboard = () => {


    return (
        <>
            <NavbarDashboard />
            <div className={style['dashboard-container']}>
                <div id={style["workplace"]}>
                    <HeaderDashboard />
                    <div className={style["product-type"]}>
                        <p>Danh Mục</p>
                        <div className={style["product"]}><p>Trang phục</p></div>
                        <div className={style["product"]}><p>Vật phẩm</p></div>
                        <div className={style["product"]}><p>Emoji</p></div>
                    </div>
                    <ItemList />
                </div>

            </div>
        </>
    );
};

export default Dashboard;
