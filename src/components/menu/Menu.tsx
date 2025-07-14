import React from 'react';
import "./Menu.css";

type MenuItem = {
  label: string;
  path: string;
};

type MenuProps = {
  items: MenuItem[];
  LinkComponent?: React.ComponentType<{ to: string; children: React.ReactNode; className?: string }>;
};

const MenuItens: React.FC<MenuProps> = ({ items, LinkComponent }) => {
  return (
    <ul className="itens-menu-lateral">
      {items.map((item, index) => {
        const LinkTag = LinkComponent ?? DefaultLink;
        return (
          <React.Fragment key={index}>
            <li>
              <LinkTag to={item.path} className="item">
                {item.label}
              </LinkTag>
            </li>
            {index < items.length - 1 && <hr />}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

const DefaultLink: React.FC<{ to: string; children: React.ReactNode; className?: string }> = ({ to, children, className }) => (
  <a href={to} className={className}>{children}</a>
);

const Menu: React.FC<MenuProps> = (props) => {
  return (
    <div className="lateral-diminuido">
      <MenuItens {...props} />
    </div>
  );
};

export default Menu;