import React from "react";
import style from './Navbar.dashboard.module.css'
import { HiOutlineSquares2X2 } from "react-icons/hi2";

function NavbarDashboard({ hide }) {


    return (
        <>
            <div id={style["nav-container"]}
                style={{ left: hide ? '-20%' : '0px' }}
            >
                <p className={style["menu-Title"]}>MENU</p>
                <ul className={style["nav-vertical"]}>
                    <li>
                        <p>Dashboard</p>
                    </li>
                    <li>
                        <p>Sàn giao dịch</p>
                    </li>
                    <li>
                        <p>Kho đồ</p>
                    </li>
                    <li>
                        <p>Nạp tiền</p>
                    </li>
                    <li>
                        <p>Thống kê giao dịch</p>
                    </li>
                    <li>
                        <p>Gacha</p>
                    </li>
                    <li>
                        <p>Tin nhắn</p>
                    </li>
                    <li>
                        <p>Tài khoản của tôi</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavbarDashboard