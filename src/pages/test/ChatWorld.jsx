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
            console.log(msg);
            setMessages((prevMessages) => [...prevMessages, msg])
        })
        socket.on("connect_error", (err) => {
            console.log(err.message); // prints the message associated with the error
            alert(err.message)
        });
    }, [])


    const handleSend = async () => {
        if (inputValue.current.trim()) {
            let response = await axios.post(import.meta.env.VITE_BACKEND_URL + "/testSocket", { message: inputValue.current }, { withCredentials: true })
            console.log(response.data);
            // inputValue.current = ""
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    const handleOnchange = (e) => {
        inputValue.current = e.target.value
        console.log(inputValue.current);
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
