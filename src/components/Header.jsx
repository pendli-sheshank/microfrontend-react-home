import React from "react";
import { Link } from "react-router-dom";

const HeaderStyles = {
  backgroundColor: "cyan",
  width: "100%",
};

const navStyles = {
  display: "flex",
};
const linkStyles = {
  display: "flex",
  justifyContent: "between",
  alignItems: "center",
  fontSize: "18px",
  margin: "5px",
  padding: "3px",
};

const Header = (props) => {
  const { navigations: navigation, year } = props;
  console.log(navigation, year);
  return (
    <nav style={HeaderStyles}>
      <ul style={navStyles}>
        {navigation?.map((link, index) => (
          <li key={index} role="button" style={linkStyles}>
            <a href={link?.path}> {link?.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
