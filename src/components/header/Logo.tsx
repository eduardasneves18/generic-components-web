import React from 'react';
import "./Header.css";
import { LogoProps } from '../../types/header/LogoProps';

const Logo: React.FC<LogoProps> = ({
  link,
  appTitlePrimary,
}) => {
  return (
    <a href={link ?? ''} className="yes-bank-header-link">
      <div className="yes-bank-header-yes">{appTitlePrimary}</div>
    </a>
  );
};

export default Logo;
