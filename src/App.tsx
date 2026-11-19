import { HashRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Menu from './pages/Menu';
import ComingSoon from './pages/ComingSoon';
import { NAV } from './layouts/nav';
import { useTheme } from './hooks/useTheme';

export default function App() {
  useTheme(); // terapkan tema saat aplikasi dimuat
  // HashRouter: refresh di GitHub Pages tidak menghasilkan 404.
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="menu" element={<Menu />} />
          <Route path="pengaturan" element={<Settings />} />
          {NAV.filter((n) => n.phase > 1).map((n) => (
            <Route key={n.path} path={n.path.slice(1)} element={<ComingSoon />} />
          ))}
          <Route path="*" element={<ComingSoon />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
