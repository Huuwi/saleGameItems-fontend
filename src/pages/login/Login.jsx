import React, { useEffect, useState } from "react";
import style from './login.module.css';
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
    const [base64Captcha, setBase64Captcha] = useState('');
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetchCaptcha();
    }, []);

    const fetchCaptcha = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/getNewCaptcha`, {}, { withCredentials: true });
            setBase64Captcha(response.data.base64);
        } catch (err) {
            console.error(`Error when loading captcha: ${err}`);
            setErrorMessage("Lỗi khi tải captcha");
        }
    };

    const handleLogin = async () => {
        try {
            let responseLogin = await axios.post(import.meta.env.VITE_BACKEND_URL + "/login", { userName, passWord, text: captcha }, { withCredentials: true })
            console.log(responseLogin.data);


        } catch (error) {
            console.log(error);

            alert(err.response.data.message);
        }
    };

    return (
        <div className={style["login-container"]}>
            {base64Captcha ? (
                <div className={style["login-form"]}>
                    <div className={style["logo"]}></div>
                    <p className={style["title"]}>ĐĂNG NHẬP</p>
                    {errorMessage && <p className={style["error-message"]}>{errorMessage}</p>}
                    <input
                        type="text"
                        className={style["input-field"]}
                        id="username"
                        placeholder="Nhập tài khoản"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input
                        type="password"
                        className={style["input-field"]}
                        id="password"
                        value={passWord}
                        placeholder="Nhập mật khẩu"
                        onChange={(e) => setPassWord(e.target.value)}
                    />
                    <div className={style["captcha-container"]}>
                        <input
                            type="text"
                            className={style["captcha"]}
                            value={captcha}
                            placeholder="Nhập captcha"
                            onChange={(e) => setCaptcha(e.target.value)}
                        />
                        <img className={style["captcha-img"]} src={base64Captcha} alt="Captcha" />
                        <button className={style["captcha-btn"]} onClick={fetchCaptcha}></button>
                    </div>
                    <button className={style["login-btn"]} onClick={handleLogin}>Đăng Nhập</button>
                    <p className={style["forget-password"]}>Chưa có tài khoản? <Link to="/register" style={{ color: "red" }} >Click vào đây</Link></p>
                </div>
            ) : (
                <div className={style["loading-captcha"]}>
                    <h1>Đang tải captcha...</h1>
                </div>
            )}
        </div>
    );
}

export default Login;
