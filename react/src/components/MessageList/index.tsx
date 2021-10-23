import styles from './styles.module.scss';
import logoImg from '../../assets/logo.svg';

function MessageList() {
    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento.</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/lucasrmagalhaes.png" alt="Lucas Magalhães" />
                        </div>
                        <span>Lucas Magalhães</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento.</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/lucasrmagalhaes.png" alt="Lucas Magalhães" />
                        </div>
                        <span>Lucas Magalhães</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export { MessageList }