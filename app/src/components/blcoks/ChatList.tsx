import { ChatItem } from "../ui";

import styles from '../../styles/blocks/chat-list.module.css';
import { useEffect } from "react";

const chats = [
    {
        imgURL: './img/user-img.png',
        name: 'Иван',
        description: 'Hey there! Did you catch the latest episode of this series, it...'
    },
    {
        imgURL: './img/user-img.png',
        name: 'Иван',
        description: 'Hey there! Did you catch the latest episode of this series, it...'
    },
    {
        imgURL: './img/user-img.png',
        name: 'Иван',
        description: 'Hey there! Did you catch the latest episode of this series, it...'
    },
    {
        imgURL: './img/user-img.png',
        name: 'Иван',
        description: 'Hey there! Did you catch the latest episode of this series, it...'
    },
    {
        imgURL: './img/user-img.png',
        name: 'Иван',
        description: 'Hey there! Did you catch the latest episode of this series, it...'
    },
    {
        imgURL: './img/user-img.png',
        name: 'Иван',
        description: 'Hey there! Did you catch the latest episode of this series, it...'
    },
    {
        imgURL: './img/user-img.png',
        name: 'Иван',
        description: 'Hey there! Did you catch the latest episode of this series, it...'
    },
    {
        imgURL: './img/user-img.png',
        name: 'Иван',
        description: 'Hey there! Did you catch the latest episode of this series, it...'
    },
    {
        imgURL: './img/user-img.png',
        name: 'Иван',
        description: 'Hey there! Did you catch the latest episode of this series, it...'
    },
    {
        imgURL: './img/user-img.png',
        name: 'Иван',
        description: 'Hey there! Did you catch the latest episode of this series, it...'
    },
    {
        imgURL: './img/user-img.png',
        name: 'Иван',
        description: 'Hey there! Did you catch the latest episode of this series, it...'
    },
]

export const ChatList = () => {
    useEffect(() => {
        document.querySelectorAll('#chat-item')[0].classList.add(styles.active__chat);
    }, [])

    return (
        <div className={styles.chat__list}>
            {
                chats.map((chat) => (
                    <ChatItem 
                        imgURL={chat.imgURL}
                        name={chat.name}
                        description={chat.description}
                    />
                ))
            }
        </div>
    );
}