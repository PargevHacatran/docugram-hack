import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database"; // Correct import for Realtime Database
import { app } from "../../main";
import { ChatItem } from "../ui";
import styles from '../../styles/blocks/chat-list.module.css';

const chatList:any = [];

const chats = [
    {
        name: 'Антон',
        imgURL: './img/user-img.png', // у всех одинаковы,
        description: 'Отправил вам документ', // у всх одинаковый
    }
]

export const ChatList = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    const db = getDatabase(app);

    useEffect(() => {
        document.querySelectorAll('#chat-item')[0].classList.add(styles.active__chat)
    }, [])

    // const tokens = JSON.parse(localStorage.getItem('tokens'));
    // const emailPath = localStorage.getItem('email')?.split('@')[0];

    // console.log(typeof tokens);

    // useEffect(() => {
    //     onValue(ref(db, 'chats/' + emailPath), (snapshot) => {
    //         tokens?.map((token, index) => {
    //             chats.push({
    //                 name: snapshot.val()[token].name,
    //                 imgURL: './img/user-img.png',
    //                 description: 'Файл'
    //             })

    //             if (index === tokens.length - 1) {
    //                 setIsLoaded(true)
    //             }
    //         })
    //     })
    // }, [isLoaded, chats])

    return (
        <div className={styles.chat__list}>
            {
                    chats.map((item:any, index:any) => (
                        <ChatItem 
                            key={index}
                            imgURL={item.imgURL}
                            name={item.name}
                            description={item.description}
                        />
                    ))
                }
        </div>
    );
};