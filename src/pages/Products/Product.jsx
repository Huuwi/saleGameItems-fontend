import { React, useEffect, useState } from "react";
import style from './Product.module.css';
import NavbarDashboard from "../../components/Navbardashboard/Navbar.dashboard";
import HeaderDashboard from "../../components/HeaderDashboard/Header.dashboard";
import ItemList from "../../components/ItemList/ItemList";

function Products(params) {
    const [hide, setHide] = useState(false);

    function handleClickMenuIcon(hide) {
        setHide(preHide => !preHide);
    };

    return (
        <div className={style['product-container']}>
            <HeaderDashboard handleClickMenuIcon={handleClickMenuIcon} title={"DASHBOARD"} />
            <div className={style["nav"]} style={{ left: hide ? '-20%' : '0px', }}            >
                <NavbarDashboard />
            </div>
            <div className={style["workplace"]}>
                <ItemList />
            </div>
        </div>
    )
}

export default Products;