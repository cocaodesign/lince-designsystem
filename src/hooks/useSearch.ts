import { useCallback, useMemo, useState } from 'react';

export const useSearch = () => {
  const [query, setQuery] = useState('');

  const normalized = useMemo(() => query.toLowerCase().trim(), [query]);

  const matches = useCallback(
    (...fields: Array<string | number | undefined | null>) => {
      if (!normalized) return true;
      return fields.some(
        (f) => f !== undefined && f !== null && String(f).toLowerCase().includes(normalized),
      );
    },
    [normalized],
  );

  return { query, setQuery, matches, isActive: normalized.length > 0 };
};

export type SearchMatcher = ReturnType<typeof useSearch>['matches'];
