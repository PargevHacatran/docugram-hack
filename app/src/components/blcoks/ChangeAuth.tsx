import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui";

import styles from '../../styles/pages/auth.module.css';
import { useEffect } from "react";

export const ChangeAuth = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        document.querySelectorAll(`.${styles.change__auth__organization} button`)[0].classList.add(styles.active__organization);
    }, []);

    const handleClick = (e:any) => {
        document.querySelectorAll(`.${styles.change__auth__organization} button`).forEach((item) => {
            item.classList.remove(styles.active__organization);
        })

        e.target.classList.add(styles.active__organization);
    }

    return (
        <div className={styles.change__auth__organization}>
            <Button 
                btnText="Регистрация"
                onClick={(e:any) => {
                    handleClick(e);                   
                    dispatch({ type: 'SET_AUTH_TYPE', payload: 'Регистрация' });
                }}
            />
            <Button 
                btnText="Вход"
                onClick={(e:any) => {
                    handleClick(e);
                    dispatch({ type: 'SET_AUTH_TYPE', payload: 'Вход' });
                }}
            />
        </div>
    );
}