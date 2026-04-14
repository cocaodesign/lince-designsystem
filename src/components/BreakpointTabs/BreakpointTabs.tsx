import type { Breakpoint } from '@/types';
import styles from './BreakpointTabs.module.css';

interface Props {
  active: Breakpoint;
  onChange: (bp: Breakpoint) => void;
  suffix?: (bp: Breakpoint) => string | undefined;
}

const BREAKPOINTS: { value: Breakpoint; label: string }[] = [
  { value: 'desktop', label: 'Desktop' },
  { value: 'tablet', label: 'Tablet' },
  { value: 'mobile', label: 'Mobile' },
];

export const BreakpointTabs = ({ active, onChange, suffix }: Props) => (
  <div className={styles.tabs} role="tablist">
    {BREAKPOINTS.map((bp) => {
      const isActive = bp.value === active;
      return (
        <button
          key={bp.value}
          type="button"
          role="tab"
          aria-selected={isActive}
          className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
          onClick={() => onChange(bp.value)}
        >
          {bp.label}
          {suffix?.(bp.value) && <span className={styles.suffix}>{suffix(bp.value)}</span>}
        </button>
      );
    })}
  </div>
);
