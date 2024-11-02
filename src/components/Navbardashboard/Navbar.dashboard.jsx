import React, { useState } from "react";
import style from './Navbar.dashboard.module.css'
import { useNavigate } from "react-router-dom";

function NavbarDashboard() {
    let navigate = useNavigate()

    let [currentLiSelected, setCurrentLiSelected] = useState("Dashboard")
    let arrayPages = [
        //"Dashboard", "Tài khoản của tôi", "Kho đồ của tôi", "Sàn giao dịch", "Nạp tiền", "Thống kê giao dịch", "Vòng quay may mắn", "Tin nhắn"
        { name: "DashBoard", path: "/dashBoard" },
        { name: "Tài khoản của tôi", path: "/myAccount" },
        { name: "Kho đồ của tôi", path: "/myInventories" },
        { name: "Sàn giao dịch", path: "/products" },
        { name: "Nạp tiền", path: "/payMent" },
        { name: "Thống kê giao dịch", path: "/statisticsTransaction" },
        { name: "Vòng quay may mắn", path: "/gacha" },
        { name: "Tin nhắn", path: "/messages" },
    ]

    const styleLiSelected = {
        padding: '10px 20px',
        width: '70%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'greenyellow',
        borderRadius: "20px"
    };

    const handleClick = (e) => {
        // setCurrentLiSelected(e.name);
        navigate(e.path)
    };

    const htmlContent = arrayPages.map((e) => {
        return (
            <li
                key={e.name}
                style={e.path == location.pathname ? styleLiSelected : {}}
                onClick={() => handleClick(e)}
            >
                <p>{e.name}</p>
            </li>
        );
    });

    // liSelected.style = { styleLiSelected }




    return (
        <>
            <div id={style["nav-container"]}>
                <p className={style["menu-Title"]}>MENU</p>
                <ul className={style["nav-vertical"]}>
                    {htmlContent}
                </ul>
            </div>
        </>
    )
}

export default NavbarDashboard