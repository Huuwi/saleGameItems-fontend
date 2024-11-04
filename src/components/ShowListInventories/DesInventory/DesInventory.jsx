import styles from "./DesInventory.module.css"

import TextRunning from "../../TextRunner/TextRunning";

function DesInventory(props) {
    let inventoryData = props?.inventoryData || {
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwQ0nezaY4Db_kRm5rYrptD2_AYf93ZI5g7CD5nIo0_xhRd_VKsOc9hCp5k0UD4FEXtkFG1UuqvfBffWg_gMjQ4nvyu3gib_8S34FmPecqQ7Cj8MJl5oEta2QKkjpicoC49d3wYueMW42Rg-FcWAXgj_Zs5MuqA5ZDDqJVIgmjCYv6nlI53yIwdAM-DWdD/w320-h320/pandora's-box-png.png",
        description: "none",
        name: "none",
        price: 0,
        itemType: 1,
    };



    let { image, description, price, itemType, name } = inventoryData;
    console.log({ image, description, price, itemType, name });

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



    const backgroundStyle = {
        width: '100%',
        height,
        backgroundImage: `url(${image})`,
        backgroundSize: 'contain',
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden',
    };

    return (
        <>
            <div className={styles.desWrapper}>
                <h1 style={{ color: "yellow", textAlign: "center" }} >Mô tả</h1>
                <div className={styles.imageInventory} style={{ ...backgroundStyle, margin: "20px" }}>
                </div>

                <TextRunning text={"Tên : " + name} ms={50} />

                <TextRunning text={"Thông tin : " + description} ms={50} />

                <span className={styles.priceInventory} >Giá bạn đang bán :  {price || "Sản phẩm này chưa được bạn bán"}</span>
            </div>
        </>
    )

}


export default DesInventory
