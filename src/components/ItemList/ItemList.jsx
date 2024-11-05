import { React, useRef, useState, useEffect } from "react";
import style from "./ItemList.module.css"
import Item from "./Item/Item";
import axios from "axios";

function ItemList() {
    const [listItems, setListItems] = useState([]);
    const [showLeft, setShowLeft] = useState([true]);
    const [showRight, setShowRight] = useState([true]);
    const curIndex = useRef(0);
    let listSaleItemsData = localStorage.getItem('listSaleItemsData');

    // console.log(listSaleItemsData);

    let dataItems = listItems || []
    let htmlContent = dataItems.map((e, i) => {
        return <Item dataItem={e} key={i} />
    })
    // console.log(dataItems)

    const handleLeftClick = () => {
        try {
            listSaleItemsData = JSON.parse(listSaleItemsData);
            curIndex.current -= 8;
            // console.log(curIndex);
            if (curIndex.current < -1) {
                setShowLeft(false);
            }
            else {
                setShowLeft(true)
            }
            if (curIndex.current > (listSaleItemsData.length - 1)) {
                setShowRight(false)
            }
            else {
                setShowRight(true)
            }
            setListItems(listSaleItemsData.slice(curIndex.current, curIndex.current + 8));
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleRightClick = () => {
        try {
            listSaleItemsData = JSON.parse(listSaleItemsData);
            curIndex.current += 8;
            console.log(curIndex);
            console.log(listSaleItemsData.length - 1);
            if (curIndex.current <= -1) {
                setShowLeft(false);
            }
            else {
                setShowLeft(true)
            }
            if (curIndex.current >= (listSaleItemsData.length - 1)) {
                setShowRight(false)
            }
            else {
                setShowRight(true)
            }
            setListItems(listSaleItemsData.slice(curIndex.current, curIndex.current + 8));
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
                <div className={style["btn-container"]} >
                    <button class={style["button-57"]} role="button" onClick={handleLeftClick}
                        style={{
                            display: showLeft ? "block" : "none"
                        }}
                    ><span class="text">&lt;</span><span>Trước</span></button>

                    <button class={style["button-57"]} role="button" onClick={handleRightClick}
                        style={{
                            display: showRight ? "block" : "none"
                        }}
                    ><span class="text">&gt;</span><span>Sau</span></button>
                </div>
            </div>
        </>
    )
}

export default ItemList;