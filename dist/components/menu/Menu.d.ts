import React from 'react';
export type MenuItem = {
    label: string;
    path: string;
};
export type MenuProps = {
    items: MenuItem[];
};
declare const Menu: React.FC<MenuProps>;
export default Menu;
