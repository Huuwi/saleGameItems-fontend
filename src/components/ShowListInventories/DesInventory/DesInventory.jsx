import { useState } from "react";
import styles from "./DesInventory.module.css"
import axios from "axios";

function DesInventory(props) {
    let inventoryData = props?.inventoryData || {
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwQ0nezaY4Db_kRm5rYrptD2_AYf93ZI5g7CD5nIo0_xhRd_VKsOc9hCp5k0UD4FEXtkFG1UuqvfBffWg_gMjQ4nvyu3gib_8S34FmPecqQ7Cj8MJl5oEta2QKkjpicoC49d3wYueMW42Rg-FcWAXgj_Zs5MuqA5ZDDqJVIgmjCYv6nlI53yIwdAM-DWdD/w320-h320/pandora's-box-png.png",
        description: "none",
        name: "none",
        price: 0,
        itemType: 1,
    };

    let { image, description, price, itemType, name, itemId } = inventoryData;

    let [addPrice, setAddPrice] = useState()

    let height
    switch (itemType) {
        case 1:
            height = "170px"
            break;
        case 2:
            height = "300px"
            break;
        default:
            height = '250px'
            break;
    }

    async function handleClickAddItemSalling() {
        try {
            await axios.post(import.meta.env.VITE_BACKEND_URL + "/auth/addItemSalling", { itemId, price: addPrice }, { withCredentials: true })
            alert("Đăng bán thành công!")
            window.location.reload()
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }
    }

    async function handleClickDropItem() {
        const isConfirmed = window.confirm("Bạn có chắc muốn đổi item này lấy 100 xu?");
        if (!isConfirmed) {
            return
        }
        try {
            await axios.post(import.meta.env.VITE_BACKEND_URL + "/auth/dropItem", { itemId }, { withCredentials: true })
            alert("Đổi thành công!")
            window.location.reload()
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }
    }

    function handleChangeAddPrice(e) {
        setAddPrice(e.target.value)
    }

    const backgroundStyle = {
        width: '50%',
        height: '20%',
        backgroundImage: `url(${image})`,
        backgroundSize: 'contain',
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        position: 'absolute',
        overflow: 'hidden',
        top: '50px',
        left: '70px'
    };

    return (
        <>
            <div className={styles.desWrapper}>
                <p style={{ color: "black", textAlign: "center", fontSize: '20px', position: 'absolute', top: '14px' }} >{name}</p>
                <div className={styles["card-wrapper"]}>
                    <div>
                        <span style={{ color: "black", fontSize: "18px", position: 'absolute', left: '40px', top: '180px' }}><span style={{ color: "black", fontSize: "20px" }}>Giá bạn đang bán : </span>  {price ? price + " xu" : "<Bạn chưa bán>"}</span>
                        <div className={styles.imageInventory} style={{ ...backgroundStyle, margin: "20px" }}></div>
                        <button className={styles.drop_item} onClick={handleClickDropItem}>Đổi đồ này lấy 100 xu?</button>
                    </div>
                </div>
                <span style={{ color: "black", fontSize: "15px", position: 'absolute', bottom: '46px', left: '130px' }}>Thông tin chi tiết</span>
                <div className={styles["desc"]}>
                    {description}
                </div>
                {
                    price ? <div />
                        : <>
                            <input value={addPrice} type="number" placeholder="Nhập giá nếu muốn bán..." className={styles.price_input} onChange={handleChangeAddPrice}
                                style={{ width: '52%', position: 'absolute', left: '40px', top: '220px' }}
                            />
                            <button onClick={handleClickAddItemSalling} className={styles.buy_btn} >Bán</button>
                        </>
                }

            </div>
        </>
    )
}


export default DesInventory
