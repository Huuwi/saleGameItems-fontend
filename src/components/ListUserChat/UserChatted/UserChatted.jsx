import styles from "./UserChatted.module.css"

import { UserSelectedContext } from "../../../pages/Chat/Chat";
import { useContext } from "react";

function UserChatted({ userChattedData }) {

    let setUserSelected = useContext(UserSelectedContext).setUserSelected



    function handleOnclickSelectUser() {
        let selected = { nickName: userChattedData.nickName, avartar: userChattedData.avatar, userId: userChattedData.userId }
        setUserSelected(selected)
    }

    return (
        <div className={styles.userChattedContainer} onClick={handleOnclickSelectUser} >
            <div className={styles.avatar} style={{ backgroundImage: `url(${userChattedData.avatar})` }}></div>
            <div className={styles.userInfo}>
                <span className={styles.nickName}>{userChattedData.nickName}</span>
                <span className={styles.userId}>User ID: {userChattedData.userId}</span>
            </div>
        </div>
    );
}

export default UserChatted;
