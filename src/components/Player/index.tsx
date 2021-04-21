import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src='/logo.svg' alt='Podcastr logo' />
      <p>O melhor para você ouvir, sempre.</p>
      <span>a</span>
    </header>
  );
}
