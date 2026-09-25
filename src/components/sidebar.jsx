import React from 'react';
import { NavLink } from 'react-router-dom';
import { sidebarLinks } from '../data/vehicle-data.js';
import './sidebar.css';

export default function Sidebar({ open = false }) {
  return (
    <aside className={open ? 'sidebar sidebar--open' : 'sidebar'}>
      <ul className="sidebar__menu">
        {sidebarLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link'
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
