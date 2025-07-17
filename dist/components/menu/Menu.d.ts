import React from 'react';
export type MenuItem = {
    label: string;
    path: string;
};
export type MenuProps = {
    items: MenuItem[];
    LinkComponent: React.ComponentType<{
        href: string;
        children: React.ReactNode;
        className?: string;
    }>;
};
declare const Menu: React.FC<MenuProps>;
export default Menu;
