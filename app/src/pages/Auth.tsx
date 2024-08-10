import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

import styles from '../styles/pages/auth.module.css';
import { useSelector } from "react-redux";
import { ChangeAuth } from "../components/blcoks";
import { Button, Input } from "../components/ui";
import { app } from "../main";

import { set, ref, getDatabase } from 'firebase/database';
import { useNavigate } from "react-router-dom";
import { CHAT_PATH } from "../utils/consts";

export function Auth() {
    const navigate = useNavigate(); 

    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [passAgain, setPassAgain] = useState<string>('');

    const authType = useSelector((state:any) => state.authType);

    const auth = getAuth();

    const db = getDatabase(app)

    const login = (email:string, pass:string) => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.error(error);
            });

        set(ref(db, 'users/' + email.split('@')[0]), {
            name: name, 
            email: email,
            chats: ''
        });

        localStorage.setItem('email', email);
        localStorage.setItem('name', name);

        navigate(CHAT_PATH);
    }

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, pass)
            .then(()=> {
                localStorage.setItem('email', email)
            })

        navigate(CHAT_PATH);
    }

    switch (authType) {
        case 'Вход':
            return (
                <div className={styles.auth}>
                    <h1>{ authType }</h1>
                    <ChangeAuth />
                    <Input 
                        type="email"
                        name="email"
                        placeholder="Введите эл. почту"
                        onChange={(e:any) => setEmail(e.taregt.value)}
                    />
                    <Input 
                        type="password"
                        name="pass"
                        placeholder="Введите пароль"
                        onChange={(e:any) => setPass(e.taregt.value)}
                    />
                    <Button 
                        btnText={authType}
                        onClick={() => login(email, pass)}
                    />
                </div>
            );
        case 'Регистрация':
        default: 
            return (
                <div className={styles.auth}>
                    <h1>{ authType }</h1>
                    <ChangeAuth />
                    <Input 
                        type="email"
                        name="email"
                        placeholder="Введите эл. почту"
                        onChange={(e:any) => setEmail(e.target.value)}
                    />
                    <Input 
                        type="text"
                        name="name"
                        placeholder="Введите имя"
                        onChange={(e:any) => setName(e.target.value)}
                    />
                    <Input 
                        type="password"
                        name="pass"
                        placeholder="Введите пароль"
                        onChange={(e:any) => setPass(e.target.value)}
                    />
                    <Input 
                        type="password"
                        name="pass"
                        placeholder="Повторите пароль"
                        onChange={(e:any) => setPassAgain(e.target.value)}
                    />
                    <Button 
                        btnText={authType}
                        onClick={() => login(email, pass)}
                    />
                </div>
            );
    }
}