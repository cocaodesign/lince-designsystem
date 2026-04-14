import { useTheme } from '@/context/ThemeContext';
import type { ThemeMode } from '@/types';
import { SearchIcon } from '@/components/Icons/SearchIcon';
import styles from './Header.module.css';

interface Props {
  query: string;
  onQueryChange: (value: string) => void;
}

const MODES: { label: string; value: ThemeMode }[] = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
];

export const Header = ({ query, onQueryChange }: Props) => {
  const { mode, setMode } = useTheme();

  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#hero">
        <span className={styles.brandDot} aria-hidden="true" />
        Lince
        <span className={styles.brandSub}>Design System</span>
      </a>

      <div className={styles.search}>
        <span className={styles.searchIcon}>
          <SearchIcon />
        </span>
        <input
          type="search"
          placeholder="Buscar tokens..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          autoComplete="off"
          aria-label="Buscar tokens"
          className={styles.searchInput}
        />
      </div>

      <div className={styles.actions}>
        <span className={styles.versionBadge}>v1.0.0</span>
        <div className={styles.modeToggle} role="tablist" aria-label="Tema">
          {MODES.map((m) => {
            const active = m.value === mode;
            return (
              <button
                key={m.value}
                type="button"
                role="tab"
                aria-selected={active}
                className={`${styles.modeBtn} ${active ? styles.modeBtnActive : ''}`}
                onClick={() => setMode(m.value)}
              >
                {m.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
