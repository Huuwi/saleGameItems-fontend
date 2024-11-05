import React from "react";
import style from "./Item.module.css"
import { useNavigate } from "react-router-dom";
import ProductDetail from "../../../pages/ProductDetail/Productdetail";

function Item(props) {
    const userData = JSON.parse(localStorage.getItem('userData'))
    const navigate = useNavigate()

    let dataItem = props?.dataItem || {
        image: "https://lienquan.garena.vn/wp-content/uploads/2024/05/85bfb0396118e0b32f1e3f4b34911d235875f11c6208c1.png",
        name: "Charlotte",
        nickName: "Admin",
        desc: "Charlotte champion",
        price: "10$",
        avatarImg: "https://lienquan.garena.vn/wp-content/uploads/2024/05/Remove-bg.ai_1718860136853.png"
    }

    let { image, name, nickName, description, price, avatarImg } = dataItem

    const handleDesc = () => {
        window.open('http://localhost:5173/detail', '_blank');
    }

    return (
        <>
            <div className={style["item"]}>
                <div className={style["item-img"]} style={{
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    width: "25%",
                    height: "35%",
                    transition: "1.5s",
                    cursor: "pointer",
                    position: 'absolute',
                    left: '120px',
                    top: '40px'
                }}></div>
                <p className={style['name']}>Tên sản phẩm: {name}</p>
                <p className={style['price']}>Giá sản phẩm: {price} xu</p>
                <p className={style["desc"]} onClick={handleDesc}>Chi tiết sản phẩm</p>
                <p className={style['producer']}>Người bán: {nickName}</p>

            </div >
        </>
    )
}

export default Item;