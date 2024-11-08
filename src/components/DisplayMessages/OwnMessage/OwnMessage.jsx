import styles from "./OwnMessage.module.css"


function OwnMessage(props) {

    let inforMessage = props.inforMessage

    return (
        <div className={styles.ownMessage_container}>
            <span className={styles.messageContent} >{inforMessage.messageContent}</span>
        </div>
    )

}

export default OwnMessage