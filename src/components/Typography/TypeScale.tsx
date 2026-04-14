import { useMemo, useState } from 'react';
import { SCALE } from '@/data/scale';
import type { Breakpoint } from '@/types';
import type { SearchMatcher } from '@/hooks/useSearch';
import { BreakpointTabs } from '@/components/BreakpointTabs/BreakpointTabs';
import styles from './Typography.module.css';

interface Props {
  matches: SearchMatcher;
}

const BREAKPOINT_LABELS: Record<Breakpoint, string> = {
  desktop: '1216px',
  tablet: '916px',
  mobile: '375px',
};

const renderPreview = (size: number) => {
  if (size > 32) return <span style={{ fontSize: 12, color: 'var(--ink4)' }}>{size}px</span>;
  const glyph = size <= 24 ? 'Aa' : 'A';
  return (
    <span className={styles.sizePreview} style={{ fontSize: `${size}px` }}>
      {glyph}
    </span>
  );
};

export const TypeScale = ({ matches }: Props) => {
  const [active, setActive] = useState<Breakpoint>('desktop');

  const rows = useMemo(
    () => Object.entries(SCALE[active]).filter(([k, v]) => matches(k, `${v}px`)),
    [active, matches],
  );

  return (
    <>
      <BreakpointTabs
        active={active}
        onChange={setActive}
        suffix={(bp) => BREAKPOINT_LABELS[bp]}
      />
      {rows.length === 0 ? (
        <div className={styles.empty}>Nenhum token corresponde à busca.</div>
      ) : (
        <table className={styles.scaleTable}>
          <thead>
            <tr>
              <th>Token</th>
              <th>Valor</th>
              <th>Preview</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([name, value]) => (
              <tr key={name}>
                <td>
                  <code>{name}</code>
                </td>
                <td>{value}px</td>
                <td>{renderPreview(value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
