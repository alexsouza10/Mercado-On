import React from "react";
import { Link } from "react-router-dom";
import { HeaderArea } from "../styles/HeaderStyle";

export const Header = () => {
  return (
    <HeaderArea>
      <Link to="/">Store</Link>
      <Link to="/cart">Cart</Link>
    </HeaderArea>
  );
};
