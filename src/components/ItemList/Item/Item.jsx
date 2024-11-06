import React from "react";
import style from "./Item.module.css"
import { useNavigate } from "react-router-dom";
import ProductDetail from "../../../pages/ProductDetail/Productdetail";

function Item(props) {
    const userData = JSON.parse(localStorage.getItem('userData'))
    const navigate = useNavigate()

    let dataItem = props?.dataItem || {
        itemId: 3,
        image: "https://lienquan.garena.vn/wp-content/uploads/2024/05/85bfb0396118e0b32f1e3f4b34911d235875f11c6208c1.png",
        name: "Charlotte",
        nickName: "Admin",
        desc: "Charlotte champion",
        price: "10$",
        avatarImg: "https://lienquan.garena.vn/wp-content/uploads/2024/05/Remove-bg.ai_1718860136853.png",
    }


    let { itemId, image, name, nickName, description, price, avatarImg } = dataItem

    return (
        <div className={style['card']}>
            <div className={style["card-inner"]}>
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
                    <p className={style['producer']}>Người bán: {nickName}</p>
                </div >
                <div className={style["back-side"]}>
                    <span>{description}</span>
                </div>
            </div>
        </div>
    )
}

export default Item;