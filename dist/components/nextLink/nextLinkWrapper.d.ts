import React from 'react';
import { LinkProps } from 'next/link';
declare const NextLinkWrapper: React.ForwardRefExoticComponent<LinkProps<any> & {
    children: React.ReactNode;
    className?: string;
} & React.RefAttributes<HTMLAnchorElement>>;
export default NextLinkWrapper;
