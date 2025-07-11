import React from "react";
//import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";
import { HeaderProps } from "../../types/header/HeaderProps";

const UserName: React.FC<{ name?: string }> = ({ name }) => (
  <div className="yes-bank-header-user-name">{name ?? ""}</div>
);

const Header: React.FC<HeaderProps> = ({
  user,
  type,
  userName,
  appTitlePrimary,
}) => {
  if (!user || !type) {
    console.error("Missing required props: user or type");
    return null;
  }

  const renderHeaderContent = () => (
    <>
      <Logo
        link="/"
        appTitlePrimary={appTitlePrimary}
      />
      <UserName name={userName} />
      <div>
        <a href="/user" className="yes-bank-header-link">
          <FontAwesomeIcon icon={faUser} />
        </a>
      </div>
    </>
  );

  return <header className="yes-bank-header">{renderHeaderContent()}</header>;
};

export default Header;
