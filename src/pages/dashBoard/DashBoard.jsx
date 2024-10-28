// Dashboard.js
import React, { useEffect, useState, useRef } from 'react';
import style from './Dashboard.module.css';
import { FaUserFriends, FaChartPie, FaStore, FaCommentDots, FaWallet, FaUserCircle } from 'react-icons/fa';
import axios from 'axios';
import NavbarDashboard from '../../components/Navbardashboard/Navbar.dashboard';
import HeaderDashboard from '../../components/HeaderDashboard/Header.dashboard';
import ContentSaling from '../../components/Content.Saling/Content.saling';
import { json } from 'react-router-dom';

const Dashboard = () => {
    const [listItems, setListItems] = useState([]);
    const curIndex = useRef(0);

    const handleLeftClick = () => {
        let listSaleItemsData = localStorage.getItem('listSaleItemsData');
        try {
            listSaleItemsData = JSON.parse(listSaleItemsData);
            console.log(listSaleItemsData);
            curIndex.current += 4;
            setListItems(listSaleItemsData.slice(curIndex.current, curIndex.current + 4));            
        }
        catch (err) {
            console.log(err);
        }
    }
    const handleRightClick = () => { }

    useEffect(() => {
        const fetchData = async () => {
            try {
                let responseSalingItemList = await axios.post(import.meta.env.VITE_BACKEND_URL + '/auth/getSalingItemList', {}, { withCredentials: true })
                console.log(responseSalingItemList.data);
                localStorage.setItem('listSaleItemsData', JSON.stringify(responseSalingItemList.data.salingItemListData));
                setListItems(responseSalingItemList.data.salingItemListData.slice(0, 4))
            }
            catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, [])

    return (
        <div className={style['dashboard-container']}>
            <NavbarDashboard />

            <div id={style["workplace"]}>
                <HeaderDashboard />
                <ContentSaling salingData={listItems} />
                <button onClick={handleLeftClick}>trai</button>
                <button>phai</button>
            </div>

        </div>
    );
};

export default Dashboard;
