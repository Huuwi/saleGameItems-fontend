import React from "react";
import style from "./Item.module.css"

function Item(props) {

    let dataItem = props?.dataItem || {
        image: "https://lienquan.garena.vn/wp-content/uploads/2024/05/85bfb0396118e0b32f1e3f4b34911d235875f11c6208c1.png",
        name: "Charlotte",
        nickName: "Admin",
        desc: "Charlotte champion",
        price: "10$",
        avatarImg: "https://lienquan.garena.vn/wp-content/uploads/2024/05/Remove-bg.ai_1718860136853.png"
    }

    let { image, name, nickName, description, price, avatarImg } = dataItem



    return (
        <>
            <div className={style["item"]}>
                <div className={style["item-img"]} style={{
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    marginTop: "7px",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "40%",
                    transition: "1.5s",
                    cursor: "pointer"
                }}></div>
                <p>Tên sản phẩm: {name}</p>
                <p>Giá sản phẩm: {price}</p>
                <div className={style["desc"]}>
                    <p>Giới thiệu sản phẩm: {description}</p>
                </div>
                <p>Chủ sản phẩm: {nickName}</p>
            </div >
        </>
    )
}

export default Item;