import { useToast } from '@/context/ToastContext';
import styles from './Toast.module.css';

export const Toast = () => {
  const { message } = useToast();
  const visible = message !== null;

  return (
    <div
      className={`${styles.toast} ${visible ? styles.toastVisible : ''}`}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
};
