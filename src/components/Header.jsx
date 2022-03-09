import React from "react";
import PropTypes from "prop-types";


function Header({ text, bgColor, textColor }) {
  const HeaderStyle = {
    backgroundColor: bgColor,
    color: textColor,
    textAlign: "center",
  };
  return (
    <>
      <header style={HeaderStyle}>
        <div className="container">
          <p>FeedBack</p>
        </div>
      </header>
    </>
  );
}

Header.defaultProps = {
  text: "FeedBackUi",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff9a95",
};
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Header;
