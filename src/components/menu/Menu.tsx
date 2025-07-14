import React from 'react';
import "./Menu.css";
import { Link, LinkProps } from 'react-router-dom';

type MenuItem = {
  label: string;
  path: string;
};

type MenuProps = {
  items: MenuItem[];
  LinkComponent: React.ComponentType<LinkProps>;
};

const MenuItens: React.FC<MenuProps> = ({ items, LinkComponent }) => {
  return (
    <ul className="itens-menu-lateral">
      {items.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <li>
              <LinkComponent to={item.path}>
                <a className="item">{item.label}</a>
              </LinkComponent>
            </li>
            {index < items.length - 1 && <hr />}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

const Menu: React.FC<MenuProps> = (props) => {
  return (
    <div className="lateral-diminuido">
      <MenuItens {...props} />
    </div>
  );
};

export default Menu;
