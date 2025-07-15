import React from 'react';

export type MenuItem = {
  label: string;
  path: string;
};

export type MenuProps = {
  items: MenuItem[];
  LinkComponent: React.ComponentType<{ to: string; children: React.ReactNode; className?: string }>;
};

const Menu: React.FC<MenuProps> = ({ items, LinkComponent }) => {
  return (
    <ul className="itens-menu-lateral">
      {items.map((item, index) => (
        <React.Fragment key={item.path}>
          <li>
            <LinkComponent to={item.path} className="item">
              {item.label}
            </LinkComponent>
          </li>
          {index < items.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Menu;