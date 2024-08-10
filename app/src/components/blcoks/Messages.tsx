import { getAuth } from "firebase/auth";
import { collection, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

import { app } from "../../main";

import styles from '../../styles/blocks/messages.module.css';

import { getDownloadURL, getStorage, ref } from "firebase/storage";

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

    const storage = getStorage();

    const download = (text:string) => {
        getDownloadURL(ref(storage, 'token/' + text))
            .then((url) => {
                var element = document.createElement('a');
                element.setAttribute('href', url);
                element.setAttribute('download', url);
                element.style.display = 'none';
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
            })
            .catch((error) => {
                // Handle any errors
            });
    }

    // Переделать в хук

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

    useEffect(() => {
        getMessages()
    }, [user, messages]);

    return (
        <div className={styles.messages}>
            {
                messages ?
                    messages[0].messages?.map((item: any) => (
                        <div className={`${styles.message} ${item.name === name ? styles.my__message : styles.other__message}`}>
                            <img src="./img/user-img.png" alt="" />
                            <p onClick={() => download(item.text)}>{item.text}</p>
                        </div>
                    ))
                    : null
            }
        </div>
    );
}