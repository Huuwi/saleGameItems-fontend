import { React, useRef, useState, useEffect } from "react";
import style from "./ItemList.module.css"
import Item from "./Item/Item";
import axios from "axios";

function ItemList() {
    const [listItems, setListItems] = useState([]);
    const curIndex = useRef(0);
    let listSaleItemsData = localStorage.getItem('listSaleItemsData');

    let dataItems = listItems || []
    let htmlContent = dataItems.map((e, i) => {
        return <Item dataItem={e} key={i} />
    })
    console.log(dataItems)

    const handleLeftClick = () => {
        try {
            listSaleItemsData = JSON.parse(listSaleItemsData);
            curIndex.current += 8;
            setListItems(listSaleItemsData.slice(curIndex.current, curIndex.current + 8));
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleRightClick = () => {
        try {
            listSaleItemsData = JSON.parse(listSaleItemsData);
            curIndex.current -= 8;
            setListItems(listSaleItemsData.slice(curIndex.current - 8, curIndex.current));
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                let responseSalingItemList = await axios.post(import.meta.env.VITE_BACKEND_URL + '/auth/getSalingItemList', {}, { withCredentials: true })
                console.log(responseSalingItemList.data);
                localStorage.setItem('listSaleItemsData', JSON.stringify(responseSalingItemList.data.salingItemListData));
                setListItems(responseSalingItemList.data.salingItemListData.slice(0, 8))
            }
            catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, [])


    return (
        <>
            <div className={style["item-list-container"]}>
                {htmlContent}
            </div>
            <div className={style["btn-container"]}>
                <button onClick={handleLeftClick}>Trước</button>
                <button onClick={handleRightClick}>Sau</button>
            </div>
        </>
    )
}

export default ItemList;