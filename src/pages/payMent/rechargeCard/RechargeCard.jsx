import React, { useState } from 'react';
import styles from './RechargeCard.module.css';
import axios from 'axios';
import HeaderDashboard from '../../../components/HeaderDashboard/Header.dashboard';
import sona from '../../../assets/sona.mp4'
import NavbarDashboard from '../../../components/Navbardashboard/Navbar.dashboard';

const RechargeCard = () => {

    let userData = JSON.parse(localStorage.getItem("userData"))

    let { nickName, userName, balance } = userData

    const [hide, setHide] = useState(false);

    function handleClickMenuIcon(hide) {
        setHide(preHide => !preHide);
    };


    const [selectedAmount, setSelectedAmount] = useState(null);

    const amounts = [10000, 20000, 50000, 100000, 200000];

    const handleSelect = (amount) => {
        setSelectedAmount(amount);
    };

    const handleSubmit = async () => {
        let dataPostCreatePaymentLink = {
            amount: selectedAmount,
            description: " amount : " + selectedAmount
        }
        try {
            let data = await axios.post(import.meta.env.VITE_BACKEND_URL + '/auth/createPaymentLink', dataPostCreatePaymentLink, { withCredentials: true })

            data = data.data.dataFromCreatePaymentLink

            if (data.data?.checkoutUrl) {
                localStorage.setItem("transId", data.data?.paymentLinkId)
                window.location.href = data.data?.checkoutUrl
            } else {
                alert("khởi tạo giao dịch chưa thành công! thử lại.")
            }
            return

        } catch (error) {
            alert("khởi tạo giao dịch chưa thành công! thử lại.")
            console.log(error);

        }
    };

    return (
        <>
            <HeaderDashboard handleClickMenuIcon={handleClickMenuIcon} title={"PAYMENT"} />
            <div className={styles.container}>
                {/* <video src={sona} autoPlay muted loop
                    style={{ position: 'absolute', zIndex: '-1' }}
                ></video> */}
                <div className={styles["nav"]} style={{ left: hide ? '-20%' : '0px' }}>
                    <NavbarDashboard />
                </div>
                <div className={styles.card}>
                    <div className={styles.header}>
                        <h2 className={styles.nickname}>Xin chào , {nickName}</h2>
                        {/* <p className={styles.username} style={{ color: "white", fontSize: "20px", display: 'inline-block' }}>Tài khoản: {userName}</p> */}
                        <p className={styles.balance} style={{ color: "#FFFF00", fontSize: "20px", display: 'inline-block' }}>Số dư: {balance} xu</p>
                    </div>

                    <div className={styles.content}>
                        <p style={{ color: "white", fontSize: "20px", margin: "20px", fontWeight: "bold" }} >Chọn mệnh giá thẻ nạp: 10k = 250 xu</p>
                        <div className={styles.amountOptions}>
                            {amounts.map((amount) => (
                                <div
                                    key={amount}
                                    className={`${styles.amount} ${selectedAmount === amount ? styles.selected : ''}`}
                                    onClick={() => handleSelect(amount)}
                                >
                                    {amount.toLocaleString()} VND
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className={styles.confirmButton}
                        onClick={handleSubmit}
                        disabled={!selectedAmount}
                    >
                        Xác nhận
                    </button>
                </div>
            </div>
        </>
    );
};

export default RechargeCard;
