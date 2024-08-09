import { ChatContent, ChatList } from "../components/blcoks";

import styles from '../styles/pages/chat.module.css';

export function Chat () {
    return (
        <div className={styles.chat}>
            <ChatList />
            <div>
                <ChatContent  />
                {/* <input type="text" onChange={(e:any) => setMessage(e.target.value)} />
                <button onClick={() => sendMessage()}>Отправить</button> */}
            </div>
        </div>
    )
}