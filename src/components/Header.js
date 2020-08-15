import React from "react";

const Header = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em"
  };
  return (
    <header style={headerStyle}>
      <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>
        React Todo App
      </h1>
      <p style={{ fontSize: "19px" }}>
        Legg til / fjern gjøremål
      </p>
      <a href="https://ibaslogic.com/react-tutorial-for-beginners/">Tutorial: https://ibaslogic.com/react-tutorial-for-beginners/</a>
    </header>
  );
};

export default Header;