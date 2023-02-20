import React from "react";
import { Link, useMatch } from "react-router-dom";
import ShopeeLogoIcon from "../Icon/ShopeeLogoIcon";

const AuthenticationNavbar = () => {
  const matchRegister = useMatch("/register");
  return (
    <header className="bg-white py-5">
      <div className="container">
        <nav className="flex items-end">
          <Link to="/">
            <ShopeeLogoIcon fillColor="primary"></ShopeeLogoIcon>
          </Link>
          <div className="ml-5 text-xl lg:text-2xl">{matchRegister ? "Đăng ký" : "Đăng nhập"}</div>
        </nav>
      </div>
    </header>
  );
};

export default AuthenticationNavbar;