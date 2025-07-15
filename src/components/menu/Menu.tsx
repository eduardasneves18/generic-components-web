import React from 'react';

export type MenuItem = {
  label: string;
  path: string;
};

export type MenuProps = {
  items: MenuItem[];
  LinkComponent: React.ComponentType<{ href: string; children: React.ReactNode; className?: string }>;
};

const Menu: React.FC<MenuProps> = ({ items, LinkComponent }) => (
  <ul className="itens-menu-lateral">
    {items.map((item) => (
      <React.Fragment key={item.path}>
        <li>
          <LinkComponent href={item.path} className="item">
            {item.label}
          </LinkComponent>
        </li>
        {item !== items[items.length - 1] && <hr />}
      </React.Fragment>
    ))}
  </ul>
);

export default Menu;
