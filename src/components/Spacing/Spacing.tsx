import { useMemo, useState } from 'react';
import { SPACING } from '@/data/spacing';
import type { Breakpoint } from '@/types';
import type { SearchMatcher } from '@/hooks/useSearch';
import { BreakpointTabs } from '@/components/BreakpointTabs/BreakpointTabs';
import styles from './Spacing.module.css';

interface Props {
  matches: SearchMatcher;
}

const GAP_SCALE_FACTOR = 1.8;
const PAD_SCALE_FACTOR = 1.5;

export const Spacing = ({ matches }: Props) => {
  const [active, setActive] = useState<Breakpoint>('desktop');

  const entries = useMemo(() => Object.entries(SPACING[active]), [active]);

  const gaps = useMemo(
    () =>
      entries
        .filter(([k]) => k.startsWith('Gap'))
        .filter(([k, v]) => matches(k, `${v}px`)),
    [entries, matches],
  );

  const positiveGaps = useMemo(() => gaps.filter(([, v]) => v > 0), [gaps]);

  const paddings = useMemo(
    () =>
      entries
        .filter(([k]) => k.startsWith('Padding'))
        .filter(([k, v]) => matches(k, `${v}px`)),
    [entries, matches],
  );

  return (
    <>
      <BreakpointTabs active={active} onChange={setActive} />

      <div className={styles.block}>
        <div className={styles.groupLabel}>Gap</div>
        {positiveGaps.length === 0 ? (
          <div className={styles.empty}>Sem resultados.</div>
        ) : (
          <div className={styles.gapVis}>
            {positiveGaps.map(([k, v]) => (
              <div key={k} className={styles.gapItem}>
                <div
                  className={styles.gapBar}
                  style={{ height: `${Math.round(v * GAP_SCALE_FACTOR)}px` }}
                />
                <div className={styles.gapValue}>{v}px</div>
                <div className={styles.gapLabel}>{k.replace('Gap ', '')}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <div className={styles.groupLabel}>Padding</div>
        {paddings.length === 0 ? (
          <div className={styles.empty}>Sem resultados.</div>
        ) : (
          <table className={styles.padTable}>
            <thead>
              <tr>
                <th>Token</th>
                <th>Valor</th>
                <th>Visual</th>
              </tr>
            </thead>
            <tbody>
              {paddings.map(([k, v]) => (
                <tr key={k}>
                  <td>
                    <code>{k}</code>
                  </td>
                  <td>{v}px</td>
                  <td>
                    <div
                      className={styles.padBar}
                      style={{ width: v > 0 ? `${Math.round(v * PAD_SCALE_FACTOR)}px` : '2px' }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};
