import type { NavItem } from '../types';

export const NAV: NavItem[] = [
  { path: '/', label: 'Beranda', icon: 'home', phase: 1 },
  { path: '/air', label: 'Air Minum', icon: 'droplet', phase: 3 },
  { path: '/obat', label: 'Obat & Suplemen', icon: 'pill', phase: 3 },
  { path: '/tidur', label: 'Tidur', icon: 'moon', phase: 3 },
  { path: '/aktivitas', label: 'Aktivitas', icon: 'activity', phase: 3 },
  { path: '/jurnal', label: 'Jurnal Kesehatan', icon: 'book', phase: 4 },
  { path: '/medis', label: 'Manajemen Medis', icon: 'stethoscope', phase: 4 },
  { path: '/analitik', label: 'Analitik', icon: 'chart', phase: 5 },
  { path: '/kalender', label: 'Kalender', icon: 'calendar', phase: 5 },
  { path: '/pengaturan', label: 'Pengaturan', icon: 'settings', phase: 1 },
];

// Empat tab utama di mobile; sisanya lewat halaman "Menu".
export const BOTTOM = ['/', '/air', '/obat', '/tidur'];
