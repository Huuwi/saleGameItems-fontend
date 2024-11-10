import styles from "./ShowListInventories.module.css"
import { useState } from "react"
import Inventory from "./Inventory/Inventory"
import DesInventory from "./DesInventory/DesInventory"


function ShowListInventories(props) {
    let displayData = props?.displayData || []
    let [inventoryData, setInventoryData] = useState(displayData[0])
    console.log(displayData);


    function handleClick(e, data) {
        setInventoryData(data)
    }

    let htmlDisplayData = displayData.map((e, i) => {
        return <Inventory key={i} inventoryData={e} handleClick={handleClick} />
    })

    return (
        <>
            <div className={styles.wrapper_listInventories}>
                <div className={styles["data-container"]}>
                    <div className={styles.listInventories}>
                        {htmlDisplayData}
                    </div>
                </div>
                <div className={styles.descriptionInventory}
                    style={{ marginLeft: '30px' }}
                >
                    <DesInventory inventoryData={inventoryData} />
                </div>
            </div>

        </>
    )



}

export default ShowListInventories