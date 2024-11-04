import React, { useState } from 'react';
import styles from './MyAccount.module.css';
import NavbarDashboard from '../../components/Navbardashboard/Navbar.dashboard';

const MyAccount = () => {
    let userData = JSON.parse(localStorage.getItem("userData"))
    let { nickname, balance, avartar: avatar, gameId: linkedAccount } = userData
    // const [nickname, setNickname] = useState('User123');
    // const [balance, setBalance] = useState(100);
    // const [avatar, setAvatar] = useState('https://via.placeholder.com/150');
    // const [linkedAccount, setLinkedAccount] = useState('GameAccount1');

    // const handleNicknameChange = (e) => setNickname(e.target.value);
    // const handleBalanceChange = (e) => setBalance(e.target.value);
    // const handleAvatarChange = (e) => setAvatar(e.target.value);

    // const unlinkAccount = () => setLinkedAccount('');

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>My Account</h1>
                <div className={styles.avatarContainer}>
                    <img src={avatar} alt="Avatar" className={styles.avatar} />
                    <input
                        type="text"
                        value={avatar}

                        placeholder="Avatar URL"
                        className={styles.input}
                    />
                </div>
                <div className={styles.info}>
                    <label className={styles.label}>Nickname:</label>
                    <input
                        type="text"
                        value={nickname}

                        className={styles.input}
                    />
                </div>
                <div className={styles.info}>
                    <label className={styles.label}>Balance:</label>
                    <input
                        type="number"
                        value={balance}

                        className={styles.input}
                    />
                </div>
                <div className={styles.info}>
                    <label className={styles.label}>Linked Game Account:</label>
                    <p className={styles.linkedAccount}>{linkedAccount}</p>
                    {linkedAccount && (
                        <button className={styles.unlinkButton}>
                            Unlink Game Account
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default MyAccount;
