import { Fragment } from 'react';
import styles from './Sidebar.module.css';

interface NavItem {
  id: string;
  label: string;
  dotColor?: string;
  dotBorder?: string;
  badge?: string;
}

interface NavGroup {
  label?: string;
  items: NavItem[];
}

interface NavPillar {
  label?: string;
  groups: NavGroup[];
}

interface Props {
  pillars: NavPillar[];
  activeId: string;
}

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const Sidebar = ({ pillars, activeId }: Props) => (
  <nav className={styles.sidebar} aria-label="Seções do design system">
    {pillars.map((pillar, pIdx) => (
      <Fragment key={pillar.label ?? `pillar-${pIdx}`}>
        {pIdx > 0 && <hr className={styles.pillarDivider} aria-hidden="true" />}
        {pillar.label && <div className={styles.pillarLabel}>{pillar.label}</div>}
        {pillar.groups.map((group, gIdx) => (
          <div key={group.label ?? `group-${gIdx}`} className={styles.section}>
            {group.label && <div className={styles.label}>{group.label}</div>}
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
                  <span className={styles.linkLabel}>{item.label}</span>
                  {item.badge && <span className={styles.badge}>{item.badge}</span>}
                </button>
              );
            })}
          </div>
        ))}
      </Fragment>
    ))}
  </nav>
);

export type { NavGroup, NavItem, NavPillar };
