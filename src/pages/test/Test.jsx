import { useState, useEffect } from "react";
import { socket } from "../../socket.io/socket";

function Test() {
    const [text, setText] = useState("hello");  // Sử dụng const thay vì let cho state
    const [txtInput, setTxtInput] = useState("");

    const handleMessage = (message) => {
        console.log("Message from server socket:", message);
        setText(message);
    };

    useEffect(() => {
        // Định nghĩa hàm callback một lần


        // Lắng nghe sự kiện từ socket
        socket.on("message", handleMessage);

        // Dọn dẹp khi component unmount
        return () => {
            socket.off("message", handleMessage);  // Xóa callback cụ thể
        };
    }, []);  // Chạy một lần khi component mount

    function handleClick() {
        socket.emit("message", txtInput);  // Gửi dữ liệu tới server
        setTxtInput("");  // Xóa nội dung input sau khi gửi
    }

    function handleOnChange(e) {
        setTxtInput(e.target.value);  // Cập nhật state khi nhập dữ liệu
    }

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h2>{text}</h2>
            <input
                value={txtInput}
                onChange={handleOnChange}
                type="text"
                style={{ minWidth: "300px", minHeight: "40px" }}
            />
            <button onClick={handleClick} style={{ height: "40px", width: "150px" }}>
                Submit
            </button>
        </div>
    );
}

export default Test;
