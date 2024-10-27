// Dashboard.js
import React from 'react';
import styles from './Dashboard.module.css';
import { FaUserFriends, FaChartPie, FaStore, FaCommentDots, FaWallet, FaUserCircle } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className={styles.dashboardContainer}>
            <header className={styles.header}>
                <h1>Dashboard</h1>
            </header>

            <div className={styles.mainContent}>
                <nav className={styles.sidebar}>
                    <ul>
                        <li className={styles.menuItem}>
                            <FaWallet className={styles.icon} />
                            <span>Kho đồ</span>
                        </li>
                        <li className={styles.menuItem}>
                            <FaUserFriends className={styles.icon} />
                            <span>Tìm bạn bè</span>
                        </li>
                        <li className={styles.menuItem}>
                            <FaCommentDots className={styles.icon} />
                            <span>Đoạn chat</span>
                        </li>
                        <li className={styles.menuItem}>
                            <FaStore className={styles.icon} />
                            <span>Mua bán</span>
                        </li>
                        <li className={styles.menuItem}>
                            <FaChartPie className={styles.icon} />
                            <span>Thống kê cá nhân</span>
                        </li>
                        <li className={styles.menuItem}>
                            <FaUserCircle className={styles.icon} />
                            <span>Thông tin tài khoản</span>
                        </li>
                    </ul>
                </nav>

                <div className={styles.contentArea}>
                    <h2>Chào mừng đến với Dashboard!</h2>
                    <p>Chọn một chức năng từ menu bên trái để bắt đầu.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
