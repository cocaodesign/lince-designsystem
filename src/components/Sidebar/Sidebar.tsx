import { Fragment } from 'react';
import styles from './Sidebar.module.css';

interface NavItem {
  id: string;
  label: string;
  dotColor?: string;
  dotBorder?: string;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

interface Props {
  groups: NavGroup[];
  activeId: string;
}

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const Sidebar = ({ groups, activeId }: Props) => (
  <nav className={styles.sidebar} aria-label="Seções do design system">
    {groups.map((group) => (
      <Fragment key={group.label}>
        <div className={styles.section}>
          <div className={styles.label}>{group.label}</div>
          {group.items.map((item) => {
            const active = item.id === activeId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`${styles.link} ${active ? styles.linkActive : ''}`}
              >
                <span
                  className={styles.dot}
                  style={{
                    background: item.dotColor ?? 'var(--stroke)',
                    border: item.dotBorder ? `1px solid ${item.dotBorder}` : 'none',
                  }}
                  aria-hidden="true"
                />
                {item.label}
              </button>
            );
          })}
        </div>
      </Fragment>
    ))}
  </nav>
);

export type { NavGroup, NavItem };
