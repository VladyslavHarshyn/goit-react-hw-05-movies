import { NavLink } from 'react-router-dom';
import NavMenuItems from './NavMenuItems';

import s from './NavMenu.module.css';

const activeLink = ({ isActive }) => {
  return isActive ? `${s.link} ${s.active}` : s.link;
};

const NavMenu = () => {
  const naviLinks = NavMenuItems.map(({ to, text }, idx) => (
    <li key={idx} className={s.item}>
      <NavLink className={activeLink} to={to}>
        {text}
      </NavLink>
    </li>
  ));
  return <ul className={s.list}>{naviLinks}</ul>;
};

export default NavMenu;
