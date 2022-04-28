import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? style.activeLink : style.unActiveLink
          }
        >
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) =>
            isActive ? style.activeLink : style.unActiveLink
          }
        >
          Messages
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive ? style.activeLink : style.unActiveLink
          }
        >
          News
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/music"
          className={({ isActive }) =>
            isActive ? style.activeLink : style.unActiveLink
          }
        >
          Music
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? style.activeLink : style.unActiveLink
          }
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
