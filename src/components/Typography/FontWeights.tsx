import { useMemo } from 'react';
import { FONT_WEIGHTS } from '@/data/scale';
import type { SearchMatcher } from '@/hooks/useSearch';
import styles from './Typography.module.css';

interface Props {
  matches: SearchMatcher;
}

export const FontWeights = ({ matches }: Props) => {
  const visible = useMemo(
    () => FONT_WEIGHTS.filter((w) => matches(w.name, w.value)),
    [matches],
  );

  if (visible.length === 0) {
    return <div className={styles.empty}>Nenhum peso corresponde à busca.</div>;
  }

  return (
    <div className={styles.weightGrid}>
      {visible.map((w) => (
        <div key={w.value} className={styles.weightCard}>
          <div className={styles.weightSample} style={{ fontWeight: w.value }}>
            Aa
          </div>
          <div className={styles.weightName}>{w.name}</div>
          <div className={styles.weightValue}>{w.value}</div>
        </div>
      ))}
    </div>
  );
};
