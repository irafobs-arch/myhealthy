export interface NavItem {
  path: string;
  label: string;
  icon: string;
  phase: number;
}

export type ThemeMode = 'light' | 'dark' | 'system';

/** Ringkasan dashboard. null = belum ada data (tampilkan empty state). */
export interface DashboardSummary {
  water: { totalMl: number; targetMl: number } | null;
  medicine: { taken: number; missed: number; pending: number } | null;
  sleep: { hours: number; quality: number } | null;
  activity: { minutes: number; steps: number | null } | null;
  appointments: { id: string; title: string; at: string }[];
  reminders: { id: string; title: string; time: string }[];
  journal: { id: string; date: string; note: string }[];
  weekly: { label: string; value: number }[];
}
