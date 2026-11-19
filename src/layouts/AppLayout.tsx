import { NavLink, Outlet } from 'react-router-dom';
import { BOTTOM, NAV } from './nav';
import { Icon } from './icons';

export default function AppLayout() {
  return (
    <div className="shell">
      <aside className="sidebar" aria-label="Navigasi utama">
        <div className="brand">
          <span className="brand-mark"><Icon name="home" size={18} /></span>
          <div>
            <strong>My Health Organizer</strong>
            <small>Your Health, Your Habit, Your Life.</small>
          </div>
        </div>
        <nav>
          {NAV.map((n) => (
            <NavLink key={n.path} to={n.path} end={n.path === '/'} className="nav-link">
              <Icon name={n.icon as never} /> {n.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="content" id="main">
        <Outlet />
      </main>

      <nav className="bottom-nav" aria-label="Navigasi bawah">
        {BOTTOM.map((p) => {
          const n = NAV.find((x) => x.path === p)!;
          return (
            <NavLink key={p} to={p} end={p === '/'} className="tab">
              <Icon name={n.icon as never} />
              <span>{n.label.split(' ')[0]}</span>
            </NavLink>
          );
        })}
        <NavLink to="/menu" className="tab">
          <Icon name="menu" />
          <span>Menu</span>
        </NavLink>
      </nav>
    </div>
  );
}
