import { useMemo } from 'react';
import type { FeedbackToken, FeedbackTokens } from '@/types';
import { useCopyToken } from '@/hooks/useCopyToken';
import type { SearchMatcher } from '@/hooks/useSearch';
import styles from './FeedbackGrid.module.css';

interface Props {
  tokens: FeedbackTokens;
  matches: SearchMatcher;
}

interface CardProps {
  feedback: FeedbackToken;
  matches: SearchMatcher;
}

const FeedbackCard = ({ feedback, matches }: CardProps) => {
  const copy = useCopyToken();

  const visibleStates = useMemo(
    () => feedback.states.filter((s) => matches(feedback.label, s.name, s.hex)),
    [feedback, matches],
  );

  if (visibleStates.length === 0) return null;

  return (
    <div className={styles.card}>
      <div
        className={styles.header}
        style={{ background: feedback.background, color: feedback.accent }}
      >
        {feedback.label}
      </div>
      <div className={styles.states}>
        {visibleStates.map((state) => (
          <div key={state.name} className={styles.row}>
            <button
              type="button"
              className={styles.dot}
              style={{ background: state.hex }}
              onClick={() => copy(state.hex)}
              title={`Copiar ${state.hex}`}
              aria-label={`Copiar ${state.name} ${state.hex}`}
            />
            <div className={styles.meta}>
              <div className={styles.stateName}>{state.name}</div>
              <button
                type="button"
                className={styles.stateHex}
                onClick={() => copy(state.hex)}
              >
                {state.hex}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const FeedbackGrid = ({ tokens, matches }: Props) => (
  <div className={styles.grid}>
    {Object.entries(tokens).map(([key, feedback]) => (
      <FeedbackCard key={key} feedback={feedback} matches={matches} />
    ))}
  </div>
);
