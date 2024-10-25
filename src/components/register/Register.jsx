import React, { useEffect, useState } from "react";
import style from './register.module.css';
import axios from "axios";
import { Link, Router, useNavigate } from "react-router-dom";
import Login from "../login/Login";

function Register() {
    const [base64Captcha, setBase64Captcha] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                let responseCaptchaData = await axios.post(import.meta.env.VITE_BACKEND_URL + "/getNewCaptcha", {}, { withCredentials: true });
                let captchaData = responseCaptchaData.data;
                // console.log(captchaData);
                setBase64Captcha(captchaData.base64);
            }
            catch (err) {
                console.log(`Error when loading captcha: ${err}`);
                alert("Loi khi tai captcha")
            }
        }
        fetchData();
    }, []);

    const handleGetNewCaptcha = async () => {
        // console.log("Click");
        try {
            let responseCaptchaData = await axios.post(import.meta.env.VITE_BACKEND_URL + "/getNewCaptcha", {}, { withCredentials: true });
            let captchaData = responseCaptchaData.data;
            // console.log(captchaData);
            setBase64Captcha(captchaData.base64);
        }
        catch (err) {
            console.log(`Error when loading captcha: ${err}`);
            alert("Loi khi tai captcha");
        }
    }

    return (
        <>
            {base64Captcha ?
                <div className={style["login-container"]}>
                    <div className={style["login-form"]}>
                        <div className={style["logo"]}></div>
                        <p className={style["title"]}>ĐĂNG KÝ TÀI KHOẢN</p>
                        <label htmlFor="username">Nhập tài khoản</label>
                        <input type="text" className={style["username"]} id={style["login-input"]} name="username" />
                        <label htmlFor="password">Nhập mật khẩu</label>
                        <input type="password" className={style["password"]} id={style["login-input"]} name="password" />
                        <label htmlFor="nickname">Nhập nickname</label>
                        <input type="text" className={style["nickname"]} id={style["login-input"]} name="nickname" />
                        <label htmlFor="captcha">Nhập captcha</label>
                        <div className={style["captcha-container"]}>
                            <input type="text" className={style["captcha"]} name="captcha" placeholder="Nhập captcha" />
                            <img className={style["captcha-img"]} src={base64Captcha}></img>
                            <button className={style["captcha-btn"]} onClick={handleGetNewCaptcha}></button>
                        </div>
                        <button className={style["login-btn"]} >Login</button>
                        <p className={style["hadAccount"]}>Đã có tài khoản? <Link to="/login" >Click here</Link> </p>
                    </div>
                </div>
                :
                <div className="loading-captcha">
                    <h1>Captcha is loading...</h1>
                </div>
            }
        </>
    )
}

export default Register;

