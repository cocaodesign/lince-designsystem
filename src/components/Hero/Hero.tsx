import styles from './Hero.module.css';

interface Stat {
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { value: '112', label: 'tokens de cor' },
  { value: '2', label: 'famílias tipográficas' },
  { value: '3', label: 'breakpoints' },
  { value: '43', label: 'tokens de layout' },
];

export const Hero = () => (
  <section className={styles.hero} id="hero">
    <div className={styles.eyebrow}>Lince · Design System · v1.0</div>
    <h1 className={styles.title}>
      Tokens que
      <br />
      <em>definem</em> a marca.
    </h1>
    <p className={styles.sub}>
      Referência oficial de cores, tipografia e espaçamento para toda a codebase do produto
      Lince. Clique em qualquer token para copiar.
    </p>
    <div className={styles.stats}>
      {STATS.map((s) => (
        <div key={s.label}>
          <div className={styles.statNumber}>{s.value}</div>
          <div className={styles.statLabel}>{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);
