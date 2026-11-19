import type { DashboardSummary } from '../types';

/**
 * Satu-satunya pintu data untuk dashboard.
 * PHASE 1: database belum ada, jadi semua kosong (tanpa data dummy).
 * PHASE 2: isi fungsi ini dengan query IndexedDB; UI tidak perlu diubah.
 */
export async function getDashboardSummary(): Promise<DashboardSummary> {
  return {
    water: null,
    medicine: null,
    sleep: null,
    activity: null,
    appointments: [],
    reminders: [],
    journal: [],
    weekly: [],
  };
}
