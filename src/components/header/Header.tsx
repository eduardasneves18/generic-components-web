import React from 'react';
import { Link } from 'react-router-dom';
import "./Menu.css";

type MenuItem = {
  label: string;
  path: string;
};

type MenuProps = {
  items: MenuItem[];
};

const MenuItens: React.FC<MenuProps> = ({ items }) => {
  return (
    <ul className="itens-menu-lateral">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <li>
            <Link className="item" to={item.path}>{item.label}</Link>
          </li>
          {index < items.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </ul>
  );
};

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <div className="lateral-diminuido">
      <MenuItens items={items} />
    </div>
  );
};

export default Menu;