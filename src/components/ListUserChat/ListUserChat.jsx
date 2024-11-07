import styles from "./ListUserChat.module.css";
import { useNavigate } from "react-router-dom";

function ListUserChat() {
    let navigate = useNavigate();

    return (
        <div className={styles.listUserChat_container}>

            <div
                className={styles.btn_ReturnDashBoard}
                onClick={() => { navigate("/dashBoard"); }}
            >
                <span>Back to Dashboard</span>
            </div>

            <h2>Danh sách người từng nhắn :</h2>

            {/* Danh sách người dùng */}
            <div className={styles.userList}>
                <div className={styles.userItem}>User 1</div>
                <div className={styles.userItem}>User 2</div>
                <div className={styles.userItem}>User 3</div>
                {/* Thêm các người dùng khác ở đây */}
            </div>
        </div>
    );
}

export default ListUserChat;
