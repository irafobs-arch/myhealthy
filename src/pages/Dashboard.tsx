import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDashboardSummary } from '../services/dashboardService';
import type { DashboardSummary } from '../types';
import { Card, EmptyState, ProgressBar } from '../components/ui';
import { Icon } from '../layouts/icons';

function greeting(d: Date) {
  const h = d.getHours();
  if (h < 11) return 'Selamat pagi';
  if (h < 15) return 'Selamat siang';
  if (h < 18) return 'Selamat sore';
  return 'Selamat malam';
}

const QUICK = [
  { to: '/air', label: 'Catat air', icon: 'droplet' },
  { to: '/obat', label: 'Obat', icon: 'pill' },
  { to: '/tidur', label: 'Catat tidur', icon: 'moon' },
  { to: '/aktivitas', label: 'Aktivitas', icon: 'activity' },
  { to: '/jurnal', label: 'Tulis jurnal', icon: 'book' },
] as const;

export default function Dashboard() {
  const [data, setData] = useState<DashboardSummary | null>(null);
  const [error, setError] = useState(false);
  const now = new Date();

  useEffect(() => {
    getDashboardSummary().then(setData).catch(() => setError(true));
  }, []);

  if (error) return <EmptyState message="Data dashboard gagal dimuat. Muat ulang halaman untuk mencoba lagi." />;
  if (!data) return <p className="muted" role="status">Memuat dashboard…</p>;

  const habitDone = [data.water, data.medicine, data.sleep, data.activity].filter(Boolean).length;

  return (
    <>
      <header className="page-head">
        <h1>{greeting(now)}</h1>
        <p className="muted">
          {now.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      </header>

      <div className="quick">
        {QUICK.map((q) => (
          <Link key={q.to} to={q.to} className="quick-btn">
            <Icon name={q.icon} /> {q.label}
          </Link>
        ))}
      </div>

      <div className="grid">
        <Card title="Ringkasan hari ini" className="span-2">
          <p className="big">{habitDone}<small>/4 kebiasaan tercatat</small></p>
          <p className="muted small">
            Menggambarkan konsistensi pencatatan kebiasaanmu, bukan penilaian kondisi medis.
          </p>
        </Card>

        <Card title="Air minum">
          {data.water ? (
            <>
              <p className="big">{data.water.totalMl}<small> / {data.water.targetMl} ml</small></p>
              <ProgressBar value={data.water.totalMl} max={data.water.targetMl} />
            </>
          ) : <EmptyState message="Belum ada catatan minum hari ini." to="/air" cta="Catat air" />}
        </Card>

        <Card title="Obat hari ini">
          {data.medicine ? (
            <p className="big">{data.medicine.taken}<small> diminum · {data.medicine.pending} menunggu · {data.medicine.missed} terlewat</small></p>
          ) : <EmptyState message="Belum ada jadwal obat." to="/obat" cta="Tambah obat" />}
        </Card>

        <Card title="Tidur">
          {data.sleep ? (
            <p className="big">{data.sleep.hours.toFixed(1)}<small> jam · kualitas {data.sleep.quality}/5</small></p>
          ) : <EmptyState message="Belum ada catatan tidur semalam." to="/tidur" cta="Catat tidur" />}
        </Card>

        <Card title="Aktivitas">
          {data.activity ? (
            <p className="big">{data.activity.minutes}<small> menit{data.activity.steps != null ? ` · ${data.activity.steps} langkah` : ''}</small></p>
          ) : <EmptyState message="Belum ada aktivitas hari ini." to="/aktivitas" cta="Tambah aktivitas" />}
        </Card>

        <Card title="Janji medis mendatang">
          {data.appointments.length ? (
            <ul className="list">{data.appointments.map((a) => <li key={a.id}><span>{a.title}</span><span className="muted">{a.at}</span></li>)}</ul>
          ) : <EmptyState message="Tidak ada janji medis terjadwal." to="/medis" cta="Tambah janji" />}
        </Card>

        <Card title="Pengingat hari ini">
          {data.reminders.length ? (
            <ul className="list">{data.reminders.map((r) => <li key={r.id}><span>{r.title}</span><span className="muted">{r.time}</span></li>)}</ul>
          ) : <EmptyState message="Belum ada pengingat aktif." />}
        </Card>

        <Card title="Jurnal terbaru">
          {data.journal.length ? (
            <ul className="list">{data.journal.map((j) => <li key={j.id}><span>{j.note}</span><span className="muted">{j.date}</span></li>)}</ul>
          ) : <EmptyState message="Belum ada catatan jurnal." to="/jurnal" cta="Tulis jurnal" />}
        </Card>

        <Card title="Tren mingguan" className="span-2">
          {data.weekly.length >= 3 ? (
            <div className="spark" aria-label="Tren mingguan">
              {data.weekly.map((w) => (
                <div key={w.label} className="spark-col">
                  <span style={{ height: `${Math.max(6, w.value)}%` }} />
                  <small>{w.label}</small>
                </div>
              ))}
            </div>
          ) : <EmptyState message="Statistik belum tersedia. Catat beberapa hari dulu untuk melihat tren." />}
        </Card>
      </div>
    </>
  );
}
