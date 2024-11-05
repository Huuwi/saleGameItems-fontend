import React, { useState, useEffect } from 'react';
import style from './MyAccount.module.css';
import NavbarDashboard from '../../components/Navbardashboard/Navbar.dashboard';
import HeaderDashboard from '../../components/HeaderDashboard/Header.dashboard';

const MyAccount = () => {
    let userData = JSON.parse(localStorage.getItem("userData"))

    const [hide, setHide] = useState(false);

    function handleClickMenuIcon(hide) {
        setHide(preHide => !preHide);
    };

    useEffect(() => {
        const workplace = document.getElementsByClassName(style.input)[0];
        if (workplace) {
            setTimeout(() => {
                workplace.style.marginLeft = '0';
            }, 500)
        }
    }, [])

    return (
        <>
            <div className={style["account-container"]}>
                {/* nickname, avatar, tài khoản, đổi mk, un link acc, số dư */}
                <HeaderDashboard handleClickMenuIcon={handleClickMenuIcon} title={"ACCOUNT"} />
                <div className={style["nav"]} style={{ left: hide ? '-20%' : '0px' }}>
                    <NavbarDashboard />
                </div>
                <div className={style["workplace"]}>
                    <div className={style["status-container"]}>
                        <div className={style["account-status"]}>
                            <div className={style["input"]}>
                                <div className={style["other-container"]}>
                                    <p>Mật Khẩu Mới <a>*</a></p>
                                    <input type="text" placeholder='Nhập mật khẩu mới' />
                                    <input type="text" placeholder='Nhập mật khẩu mới' />
                                    <p
                                        style={{ marginBottom: '20px', fontFamily: "Roboto" }}
                                    >Số Dư: 0 xu</p>
                                    <div className={style["btn-container"]}>
                                        <button className={style['save']}>Lưu thông tin</button>
                                        <button className={style['link']}
                                            style={userData.gameId > 0 ? { display: 'none' } : { display: 'block' }}
                                        >Liên kết tài khoản game</button>
                                    </div>
                                </div>

                                <div className={style["nickname-container"]}>
                                    <p>NickName <a>*</a></p>
                                    <input type="text" placeholder='Nhập nickname mới' />
                                    <button className={style['update-nickname']}>Cập nhật</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyAccount;
