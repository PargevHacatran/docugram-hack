import styles from '../../styles/blocks/chat-list.module.css';

interface IChatItem {
    imgURL: string;
    name: string;
    description: string;
}

export const ChatItem = ({ imgURL, name, description }:IChatItem) => {
    return (
        <div className={styles.chat__list__item} id="chat-item">
            <img src={imgURL} alt="" />
            <div>
                <p>{ name }</p>
                <p>{ description }</p>
            </div>
        </div>
    );
}