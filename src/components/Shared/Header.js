import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const API_URL = "http://localhost:8086/menus";
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getMenus();
  }, []);

  const getMenus = () => {
    fetch(API_URL, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setMenuItems(data);
      });
  };

  return (
    <header>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <Link className='navbar-brand' to='./#'>
          Navbar
        </Link>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            {menuItems.map((menuItem, index) => (
              <li className='nav-item active' key={index}>
                <Link className='nav-link' to='./#'>
                  {menuItem.menu_name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
