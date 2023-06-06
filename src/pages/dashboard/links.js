import React, { useState } from 'react';
import {
  faBars,
  faChartSimple,
  faTimes,
  faTruck,
  faUser,

} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

function Links() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <button
        type="button"
        className="menu-btn"
        onClick={handleMenuClick}
        data-testid="menu-button"
      >
        {showMenu ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
      <ul
        className={`menu-list ${showMenu ? 'show' : ''}`}
        data-testid="menu-list"
      >
        <li>
          <NavLink to="/home">
            <FontAwesomeIcon icon={faChartSimple} /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/product">
            <FontAwesomeIcon icon={faTruck} /> Blogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/user">
            <FontAwesomeIcon icon={faUser} /> Users
          </NavLink>
        </li>

      </ul>
    </div>
  );
}

export default Links;