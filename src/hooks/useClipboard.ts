import { useState, useCallback } from 'react';
import confetti from 'canvas-confetti';

interface UseClipboardOptions {
  timeout?: number;
  triggerConfetti?: boolean;
}

export function useClipboard(options: UseClipboardOptions = {}) {
  const { timeout = 2500, triggerConfetti = true } = options;
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopiedText(text);

        if (triggerConfetti) {
          confetti({
            particleCount: 50,
            spread: 70,
            origin: { y: 0.8 },
            colors: ['#00F0FF', '#8B5CF6', '#FFFFFF'],
          });
        }

        setTimeout(() => {
          setCopiedText(null);
        }, timeout);
        return true;
      } catch {
        return false;
      }
    },
    [timeout, triggerConfetti]
  );

  return {
    copy,
    isCopied: (text: string) => copiedText === text,
  };
}

