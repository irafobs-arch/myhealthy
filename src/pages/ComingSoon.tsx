import { Link, useLocation } from 'react-router-dom';
import { NAV } from '../layouts/nav';

export default function ComingSoon() {
  const { pathname } = useLocation();
  const item = NAV.find((n) => n.path === pathname);
  return (
    <div className="empty big-empty">
      <h1>{item?.label ?? 'Halaman'}</h1>
      <p>Modul ini dibangun pada PHASE {item?.phase ?? '?'}. Belum ada fungsi di tahap ini.</p>
      <Link className="btn-soft" to="/">Kembali ke beranda</Link>
    </div>
  );
}
