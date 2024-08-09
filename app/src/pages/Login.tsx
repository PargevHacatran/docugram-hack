import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export function Login() {
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');

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

    return (
        <div>
            <input type="email" onChange={(e:any) => setEmail(e.target.value)} />
            <input type="password" onChange={(e:any) => setPass(e.target.value)} />
            <button onClick={() => login(email, pass)}>Зарегстрироваться</button>
        </div>
    );
}