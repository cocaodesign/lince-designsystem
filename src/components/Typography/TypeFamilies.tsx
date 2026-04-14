import styles from './Typography.module.css';

export const TypeFamilies = () => (
  <div className={styles.families}>
    <div className={styles.card}>
      <div className={styles.role}>Títulos & Display</div>
      <div className={styles.fname}>Newsreader</div>
      <div className={styles.tag}>Font Family Titles</div>
      <div className={styles.sampleSerif}>"Visão que outros não têm."</div>
      <div className={styles.hint}>PP Acma para hero / Newsreader para editorial</div>
    </div>
    <div className={styles.card}>
      <div className={styles.role}>Interface & Parágrafo</div>
      <div className={styles.fname}>DM Sans</div>
      <div className={styles.tag}>Font Family Paragraph</div>
      <div className={styles.sampleSans}>
        Clareza acima do estilo. Legibilidade em qualquer tamanho de tela — do label de 12px
        ao body de 18px.
      </div>
      <div className={styles.hint}>Usada em toda UI, labels, inputs e menus</div>
    </div>
  </div>
);
