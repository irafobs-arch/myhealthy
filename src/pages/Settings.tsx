import { useTheme } from '../hooks/useTheme';
import { Card } from '../components/ui';
import type { ThemeMode } from '../types';

const OPTS: { v: ThemeMode; l: string }[] = [
  { v: 'light', l: 'Terang' }, { v: 'dark', l: 'Gelap' }, { v: 'system', l: 'Ikuti perangkat' },
];

export default function Settings() {
  const { mode, setMode } = useTheme();
  return (
    <>
      <header className="page-head"><h1>Pengaturan</h1></header>
      <Card title="Tema">
        <div className="seg" role="radiogroup" aria-label="Tema">
          {OPTS.map((o) => (
            <button key={o.v} role="radio" aria-checked={mode === o.v}
              className={mode === o.v ? 'on' : ''} onClick={() => setMode(o.v)}>{o.l}</button>
          ))}
        </div>
        <p className="muted small">Pengaturan profil, keamanan, pengingat, dan backup ditambahkan pada fase berikutnya.</p>
      </Card>
    </>
  );
}
