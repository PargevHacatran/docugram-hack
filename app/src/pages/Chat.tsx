import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

import { app } from "../main";

interface Message {
    text: string;
}

export function Chat () {
    const [message, setMessage] = useState<string>('');
    const [messages, setMessages] = useState<Message[] | undefined>();
    const [user, setUser] = useState<any>();

    const name = localStorage.getItem('name');

    const auth = getAuth();
    const firestore = getFirestore(app);

    const token = 'token';

    const getMessages = async() => {
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
        <div>
            <div>
                {
                    messages ?
                        messages[0].messages.map((item) => <p style={{ textAlign: item.name === name ? 'end' : 'start' }}>{ item.text }</p>)
                        : null
                }
            </div>
            <input type="text" onChange={(e:any) => setMessage(e.target.value)} />
            <button onClick={() => sendMessage()}>Отправить</button>
        </div>
    )
}