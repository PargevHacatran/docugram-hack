import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

import styles from '../styles/pages/auth.module.css';
import { useSelector } from "react-redux";
import { ChangeAuth } from "../components/blcoks";
import { Input } from "../components/ui";

export function Auth() {
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [passAgain, setPassAgain] = useState<string>('');

    const authType = useSelector((state:any) => state.authType);

    const auth = getAuth();

    const login = (email:string, pass:string) => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.error(error);
            });
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
                    <button onClick={() => login(email, pass)}>Зарегстрироваться</button>
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
                        onChange={(e:any) => setEmail(e.taregt.value)}
                    />
                    <Input 
                        type="text"
                        name="name"
                        placeholder="Введите имя"
                        onChange={(e:any) => setName(e.taregt.value)}
                    />
                    <Input 
                        type="password"
                        name="pass"
                        placeholder="Введите пароль"
                        onChange={(e:any) => setPass(e.taregt.value)}
                    />
                    <Input 
                        type="password"
                        name="pass"
                        placeholder="Повторите пароль"
                        onChange={(e:any) => setPassAgain(e.taregt.value)}
                    />
                    <button onClick={() => login(email, pass)}>Зарегстрироваться</button>
                </div>
            );
    }
}