import React from "react";
const Header = ({ lengthValue }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div className="container">
        <a
          className="navbar-brand"
          target="_blank"
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send?phone=250789083823"
        >
          <i
            className="fa fa-phone-square"
            aria-hidden="true"
            style={{ fontSize: "15px" }}
          >
            Peaples({lengthValue})
          </i>
        </a>
      </div>
    </nav>
  );
};

export default Header;
