import React from "react";
import { Link } from "react-router-dom";
import { HeaderArea } from "../styles/HeaderStyle";
import { getItem } from "../services/LocalStorageFuncs";

export const Header = () => {
  const user = getItem('usuario') || {};
  const name = user.name || ' ';

  return (
    <HeaderArea>
      <Link to="/store">Store</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/profile">My profile</Link>
    </HeaderArea>
  );
};
