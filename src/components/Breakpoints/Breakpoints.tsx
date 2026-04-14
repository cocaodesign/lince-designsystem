import { useMemo } from 'react';
import { BREAKPOINT_SIZES } from '@/data/spacing';
import type { SearchMatcher } from '@/hooks/useSearch';
import styles from './Breakpoints.module.css';

interface Props {
  matches: SearchMatcher;
}

const BASE_VIS_WIDTH = 60;
const MAX_VIS_HEIGHT = 120;

export const Breakpoints = ({ matches }: Props) => {
  const visible = useMemo(
    () =>
      BREAKPOINT_SIZES.filter((b) => matches(b.name, `${b.width}px`, `${b.height}px`)),
    [matches],
  );

  if (visible.length === 0) return null;

  return (
    <div className={styles.grid}>
      {visible.map((b) => {
        const visHeight = Math.min(
          MAX_VIS_HEIGHT,
          Math.round(BASE_VIS_WIDTH * (b.height / b.width)),
        );
        return (
          <div key={b.name} className={styles.card}>
            <div className={styles.eyebrow}>{b.name}</div>
            <div className={styles.value}>{b.width}px</div>
            <div className={styles.meta}>
              Largura: <strong>{b.width}px</strong>
            </div>
            <div className={styles.meta}>
              Altura ref.: <strong>{b.height}px</strong>
            </div>
            <div className={styles.vis} style={{ height: `${visHeight}px` }} />
          </div>
        );
      })}
    </div>
  );
};
