import styles from "./DisplayMessages.module.css";
import { UserSelectedContext } from "../../pages/Chat/Chat";
import { useContext } from "react";
import { IoSend } from "react-icons/io5";

function DisplayMessages() {
    let userSelected = useContext(UserSelectedContext).userSelected;

    let avatarStyles = {
        backgroundImage: `url(${userSelected.avartar})`,
        height: "80px",
        width: "80px",
        borderRadius: "50%",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };

    return (
        <div className={styles.displayMessages_container}>
            <h2 style={{ textAlign: "center" }}>Chat riêng</h2>
            <hr />
            {/* Header với avatar và tên người dùng */}
            <div className={styles.infor_header}>
                <div className={styles.avatar} style={avatarStyles}></div>
                <span className={styles.nickName}>{userSelected.nickName}</span>
            </div>

            {/* Nội dung tin nhắn */}
            <div className={styles.content_messages}>
                {/* Các tin nhắn sẽ được hiển thị ở đây */}
            </div>

            {/* Input và nút gửi tin nhắn */}
            <div className={styles.inputAndSenbtn}>
                <input
                    type="text"
                    className={styles.input_message}
                    placeholder="Type a message..."
                />
                <div className={styles.send_button}>Send <IoSend style={{ margin: "10px" }} /> </div>
            </div>
        </div>
    );
}

export default DisplayMessages;
