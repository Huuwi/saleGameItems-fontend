import React, { useEffect, useState, useRef } from 'react';
import style from './Products.module.css';
import { FaUserFriends, FaChartPie, FaStore, FaCommentDots, FaWallet, FaUserCircle } from 'react-icons/fa';
import axios from 'axios';
import { json } from 'react-router-dom';

function Products() {
    return (
        <>
            <div className={style["product-type"]}>
                <p>Danh Mục</p>

                <div className={`${style.product} ${type === "TrangPhuc" ? style.active : ""}`} id={style["product"]} onClick={
                    () => {
                        setType("TrangPhuc")
                    }
                }><p>Trang phục</p></div>

                <div className={`${style.product} ${type === "VatPham" ? style.active : ""}`} id={style["product"]} onClick={
                    () => {
                        setType("VatPham")
                    }
                }><p>Vật phẩm</p></div>

                <div className={`${style.product} ${type === "Emoji" ? style.active : ""}`} id={style["product"]} onClick={
                    () => {
                        setType("Emoji")
                    }
                }><p>Emoji</p></div>
            </div>
            <ItemList />
        </>
    )
}
export default Products;