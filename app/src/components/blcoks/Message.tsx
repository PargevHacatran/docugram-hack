import { useEffect, useState } from "react";
import { Button, Input } from "../ui";

import { getStorage, ref, uploadBytes } from "firebase/storage";
import { doc, setDoc, getFirestore, getDocs, collection } from "firebase/firestore";
import { app } from "../../main";

import styles from '../../styles/pages/chat.module.css'

interface Message {
    text: string;
}

export const Message = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [file, setFile] = useState<any>(); 

    const storage = getStorage();

    const firestore = getFirestore(app);

    const getMessages = async () => {
        const querySnapshot = await getDocs(collection(firestore, 'messages'));

        let fetchedMessages: Message[] = [];

        if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                if (doc.id === 'token') {
                    const data = doc.data();
                    fetchedMessages.push(data);
                }
            });
        }

        setMessages(fetchedMessages);
    }

    const sendMessage = async() => {
        const fileName = file.target.value.split('\\')[file.target.value.split('\\').length - 1];
        const filesRef = ref(storage,'/token/' + fileName);

        // Assuming you want to add a new message to the messages array
        const newMessage = { name: localStorage.getItem('name'), text: fileName };

        if (messages) {
            setDoc(doc(firestore, 'messages', 'token'), { messages: [...messages[0].messages, { name: localStorage.getItem('name'), text: fileName }] })
        }

        await uploadBytes(filesRef, file.target.files[0]);
    }

    useEffect(() => console.log(''), [messages]);

    getMessages();

    return (
        <div>
            <label htmlFor="file">Выберите файл</label>
            <Input
                type="file"
                name="file"
                placeholder="Выберите файл"
                onChange={(e:any) => setFile(e)}
                id="file"
            />
            <Button 
                btnText="+"
                onClick={() => sendMessage()}
            />
        </div>
    );
}