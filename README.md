# My Health Organizer (PHASE 1)

PWA kesehatan pribadi. Tahap ini: setup proyek, design system, routing, layout responsif, dashboard.

## Menjalankan di localhost
```
npm install
npm run dev
```
Buka alamat yang tampil di terminal (biasanya http://localhost:5173).

## Build
```
npm run build
npm run preview
```
Routing memakai HashRouter dan `base: './'`, jadi aman di GitHub Pages (refresh tidak 404).

## Status
- Selesai (PHASE 1): layout sidebar/bottom-nav, tema terang/gelap, dashboard dengan empty state.
- Belum ada: database, enkripsi, modul pelacak, PWA/service worker (PHASE 2-6).
- Dashboard membaca data lewat `src/services/dashboardService.ts`; PHASE 2 tinggal mengisinya dari IndexedDB.
