import { useMemo } from 'react';
import type { ColorToken } from '@/types';
import { useCopyToken } from '@/hooks/useCopyToken';
import type { SearchMatcher } from '@/hooks/useSearch';
import styles from './ColorSwatches.module.css';

interface Props {
  label: string;
  tokens: ColorToken[];
  matches: SearchMatcher;
}

export const ColorSwatches = ({ label, tokens, matches }: Props) => {
  const copy = useCopyToken();

  const filtered = useMemo(
    () => tokens.filter((t) => matches(t.name, t.hex)),
    [tokens, matches],
  );

  if (filtered.length === 0) return null;

  return (
    <div className={styles.group}>
      <div className={styles.groupLabel}>{label}</div>
      <div className={styles.row}>
        {filtered.map((token) => (
          <button
            key={`${token.name}-${token.hex}`}
            type="button"
            className={styles.card}
            onClick={() => copy(token.hex)}
            title={`${token.name} · ${token.hex}`}
          >
            <div className={styles.color} style={{ background: token.hex }}>
              <span className={styles.copyHint}>Copiar</span>
            </div>
            <div className={styles.info}>
              <div className={styles.name}>{token.name}</div>
              <div className={styles.hex}>{token.hex}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
