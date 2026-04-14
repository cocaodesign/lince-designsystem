import styles from './Placeholder.module.css';

interface Props {
  label?: string;
  title: string;
  children: React.ReactNode;
}

export const Placeholder = ({ label = 'Em breve', title, children }: Props) => (
  <div className={styles.placeholder}>
    <div className={styles.label}>{label}</div>
    <div className={styles.title}>{title}</div>
    <p className={styles.text}>{children}</p>
  </div>
);
