import { Activity, BarChart3, BookOpen, CalendarDays, Droplet, Home, Moon, Pill, Settings, Stethoscope, Menu } from 'lucide-react';

const MAP = {
  home: Home, droplet: Droplet, pill: Pill, moon: Moon, activity: Activity, book: BookOpen,
  stethoscope: Stethoscope, chart: BarChart3, calendar: CalendarDays, settings: Settings, menu: Menu,
} as const;

export function Icon({ name, size = 20 }: { name: keyof typeof MAP; size?: number }) {
  const C = MAP[name];
  return <C size={size} strokeWidth={1.75} aria-hidden="true" />;
}
