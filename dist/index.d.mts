import React$1 from 'react';
import { LinkProps } from 'next/link';

interface AttachmentFieldProps {
    urlUpload: string;
    onChange: (event: React$1.ChangeEvent<HTMLInputElement>) => void;
}

declare const AttachmentField: React$1.FC<AttachmentFieldProps>;

interface FieldProps {
    id: string;
    value?: string | number;
    className: string;
    label: string;
    placeholder: string;
    required?: boolean;
    onChange: (event: React.ChangeEvent<any>) => void;
}

declare const DateField: React$1.FC<FieldProps>;

declare const EmailField: React$1.FC<FieldProps>;

declare const NumberField: React$1.FC<FieldProps>;

declare const TextField: React$1.FC<FieldProps>;

interface LookupProps extends FieldProps {
    options: string[];
}

declare const LookupField: React$1.FC<LookupProps>;

declare const PasswordField: React$1.FC<FieldProps>;

interface HeaderProps {
    user?: string;
    type?: string;
    userName?: string;
    appTitlePrimary?: string;
}

declare const Header: React$1.FC<HeaderProps>;

type MenuItem = {
    label: string;
    path: string;
};
type MenuProps = {
    items: MenuItem[];
    LinkComponent: React$1.ComponentType<{
        href: string;
        children: React$1.ReactNode;
        className?: string;
    }>;
};
declare const Menu: React$1.FC<MenuProps>;

interface ModalProps {
    isOpen: boolean;
    message: string;
    onClose: () => void;
    type: string;
}

declare const Modal: React$1.FC<ModalProps>;

interface DashboardProps {
    children?: React$1.ReactNode;
    className?: string;
}

declare const Dashboard: React$1.FC<DashboardProps>;

declare const Button: React$1.FC<{
    className?: string;
    title: string;
    action: () => void;
}>;

declare const LoginButton: React$1.FC<{
    className?: string;
}>;

declare const FilterIconButton: React$1.FC<{
    className?: string;
    onClick: () => void;
}>;

declare const NextLinkWrapper: React$1.ForwardRefExoticComponent<LinkProps<any> & {
    children: React$1.ReactNode;
    className?: string;
} & React$1.RefAttributes<HTMLAnchorElement>>;

export { AttachmentField, Button, Dashboard, DateField, EmailField, FilterIconButton, Header, LoginButton, LookupField, Menu, Modal, NextLinkWrapper, NumberField, PasswordField, TextField };
