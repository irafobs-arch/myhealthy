import { Link } from 'react-router-dom';
import { NAV } from '../layouts/nav';
import { Icon } from '../layouts/icons';

export default function Menu() {
  return (
    <>
      <header className="page-head"><h1>Menu</h1></header>
      <div className="menu-list">
        {NAV.map((n) => (
          <Link key={n.path} to={n.path} className="menu-item"><Icon name={n.icon as never} /> {n.label}</Link>
        ))}
      </div>
    </>
  );
}
