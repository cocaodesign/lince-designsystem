import { useCallback } from 'react';
import { useToast } from '@/context/ToastContext';

export const useCopyToken = () => {
  const { show } = useToast();

  return useCallback(
    async (value: string) => {
      try {
        await navigator.clipboard.writeText(value);
        show(`Copiado: ${value}`);
      } catch {
        show('Falha ao copiar');
      }
    },
    [show],
  );
};
