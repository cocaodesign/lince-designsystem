import type { ReactNode } from 'react';
import styles from './Section.module.css';

interface Props {
  id: string;
  tag: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export const Section = ({ id, tag, title, description, children }: Props) => (
  <section className={styles.section} id={id} aria-labelledby={`${id}-title`}>
    <div className={styles.tag}>
      <span className={styles.tagLine} aria-hidden="true" />
      {tag}
    </div>
    <h2 id={`${id}-title`} className={styles.title}>
      {title}
    </h2>
    {description && <p className={styles.description}>{description}</p>}
    {children}
  </section>
);
