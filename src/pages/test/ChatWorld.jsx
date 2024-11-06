import React, { useEffect, useRef, useState } from 'react';
import styles from './ChatWorld.module.css';
import SocketClient from '../../socket.io/socket';
import axios from 'axios';



const ChatWorld = () => {


    const [messages, setMessages] = useState([]);
    const inputValue = useRef('');


    useEffect(() => {
        let clientSocket = new SocketClient()
        let socket = clientSocket.connect()


        socket.on("message", (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg])
        })


        socket.on("chat_world", (data) => {
            data = JSON.parse(data)
            let msg = data.message
            let { nickName } = data.userInfor
            let message = nickName + " : " + msg

            setMessages((prevMessages) => [...prevMessages, message])
        })

        socket.on("connect_error", (err) => {
            alert(err.message)
        });
    }, [])


    const handleSend = async () => {
        if (inputValue.current.trim()) {
            await axios.post(import.meta.env.VITE_BACKEND_URL + "/auth/chatWorld", { message: inputValue.current }, { withCredentials: true })
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    const handleOnchange = (e) => {
        inputValue.current = e.target.value
    }

    return (
        <div className={styles.messengerContainer}>
            <div className={styles.header}>
                <h2>Kênh chat thế giới</h2>
            </div>
            <div className={styles.messages}>
                {messages.map((msg, index) => (
                    <div key={index} className={styles.message}>
                        {msg}
                    </div>
                ))}
            </div>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    onChange={handleOnchange}
                    onKeyPress={handleKeyPress}
                    className={styles.input}
                    placeholder="Type a message..."
                />
                <button onClick={handleSend} className={styles.sendButton}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatWorld;
