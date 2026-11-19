import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export function Card({ title, action, children, className = '' }: {
  title?: string; action?: ReactNode; children: ReactNode; className?: string;
}) {
  return (
    <section className={`card ${className}`}>
      {(title || action) && (
        <header className="card-head">
          {title && <h2>{title}</h2>}
          {action}
        </header>
      )}
      {children}
    </section>
  );
}

export function EmptyState({ message, to, cta }: { message: string; to?: string; cta?: string }) {
  return (
    <div className="empty">
      <p>{message}</p>
      {to && cta && <Link className="btn-soft" to={to}>{cta}</Link>}
    </div>
  );
}

export function ProgressBar({ value, max }: { value: number; max: number }) {
  const pct = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0;
  return (
    <div className="bar" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <span style={{ width: `${pct}%` }} />
    </div>
  );
}
