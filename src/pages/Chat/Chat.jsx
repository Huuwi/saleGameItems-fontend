import styles from "./Chat.module.css"

import ListUserChat from "../../components/ListUserChat/ListUserChat"
import DisplayMessages from "../../components/DisplayMessages/DisplayMessages"
import SearchUser from "../../components/SearchUser/SearchUser"
import { createContext, useEffect, useState } from "react"

export let UserSelectedContext = createContext()


function Chat() {

    let [userSelected, setUserSelected] = useState({})


    useEffect(() => {

    })


    return (
        <UserSelectedContext.Provider value={{ setUserSelected, userSelected }} >
            <div className={styles.chat_Wrapper} >
                <ListUserChat />
                <DisplayMessages />
                <SearchUser />
            </div>
        </UserSelectedContext.Provider>

    )


}


export default Chat

