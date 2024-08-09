import styles  from '../../styles/blocks/people-info.module.css';

export const PeopleInfo = () => {
    return (
        <div className={styles.people__info}>
            <img src="./img/user-img.png" alt="" />
            <p>Иван</p>
        </div>
    );
} 