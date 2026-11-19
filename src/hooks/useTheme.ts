import { useCallback, useEffect, useState } from 'react';
import type { ThemeMode } from '../types';

// Preferensi tema bukan data kesehatan, aman disimpan di localStorage.
const KEY = 'mho-theme';

function load(): ThemeMode {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'light' || v === 'dark' || v === 'system' ? v : 'system';
  } catch {
    return 'system';
  }
}

export function applyTheme(mode: ThemeMode) {
  const dark =
    mode === 'dark' || (mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
}

export function useTheme() {
  const [mode, setModeState] = useState<ThemeMode>(load);

  useEffect(() => {
    applyTheme(mode);
    if (mode !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => applyTheme('system');
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [mode]);

  const setMode = useCallback((m: ThemeMode) => {
    try { localStorage.setItem(KEY, m); } catch { /* abaikan */ }
    setModeState(m);
  }, []);

  return { mode, setMode };
}
