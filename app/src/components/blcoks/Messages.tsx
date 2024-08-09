import { getAuth } from "firebase/auth";
import { collection, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

import { app } from "../../main";

import styles from '../../styles/blocks/messages.module.css';

interface Message {
    text: string;
}

export const Messages = () => {
    const [message, setMessage] = useState<string>('');
    const [messages, setMessages] = useState<Message[] | undefined>();
    const [user, setUser] = useState<any>();

    const name = localStorage.getItem('name');

    const auth = getAuth();
    const firestore = getFirestore(app);

    const token = 'token';

    const getMessages = async () => {
        const querySnapshot = await getDocs(collection(firestore, 'messages'));

        let fetchedMessages: Message[] = [];

        if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                if (doc.id === token) {
                    const data = doc.data();
                    fetchedMessages.push(data);
                }
            });
        }

        setMessages(fetchedMessages);
    }

    const sendMessage = async () => {
        setDoc(doc(firestore, 'messages', token), { messages: [...messages[0].messages, { name: name, text: message }] })
    };

    useEffect(() => console.log(), [user, messages]);

    getMessages();

    return (
        <div className={styles.messages}>
            {
                messages ?
                    messages[0].messages.map((item) => (
                        <div className={`${styles.message} ${item.name === name ? styles.my__message : styles.other__message}`}>
                            <img src="./img/user-img.png" alt="" />
                            <p>{item.text}</p>
                        </div>
                    ))
                    : null
            }
        </div>
    );
}