import { NavLink } from 'react-router-dom';

function linkClass({ isActive }) {
  return isActive
    ? 'block rounded-lg bg-primary px-3 py-2 font-bold text-background'
    : 'block rounded-lg px-3 py-2 hover:bg-background hover:text-primary';
}

export default function Menu({ closeMenu = () => {} }) {
  return (
    <nav aria-label="Menu principal" className="flex flex-col gap-2">
      <ul id="menu-links" className="flex flex-col gap-1">
        <li>
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={linkClass}
          >
            Resumo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/lista"
            onClick={closeMenu}
            className={linkClass}
          >
            Extrato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
