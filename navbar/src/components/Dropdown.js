import React, { useState } from 'react';  //32:36
import { MenuItems } from './MenuItems';  //File MenuItems.js
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown() { //32:36
  const [click, setClick] = useState(false);  //36:36

  const handleClick = () => setClick(!click); //36:36

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
