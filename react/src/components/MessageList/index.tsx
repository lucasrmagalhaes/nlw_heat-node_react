import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import logoImg from '../../assets/logo.svg';

import styles from './styles.module.scss';

type Message = {
    id: string;
    text: string;
    user: {
        name: string;
        avatar_url: string;
    }
}

function MessageList() {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        api.get<Message[]>('messages/last3').then(response => {
            setMessages(response.data);
        })
    }, [])

    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                {messages.map(message => {
                    return (
                        <li key={message.id} className={styles.message}>
                            <p className={styles.messageContent}>{message.text}</p>
                            <div className={styles.messageUser}>
                                <div className={styles.userImage}>
                                    <img src={message.user.avatar_url} alt={message.user.name} />
                                </div>
                                <span>{message.user.name}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export { MessageList }