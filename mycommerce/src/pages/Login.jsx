import React, { useState } from "react";
import { setItem, getItem } from '../services/LocalStorageFuncs';

export const Login = (props) => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const cond = name.length > 4 && pass.length > 8;

  const saveUser = () => {
    setItem('usuario', { name, pass });
    const { history } = props;
    history.push('/store');
  }

  return (
    <div>
      <p>Name</p>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <p>Password</p>
      <input
        type="password"
        onChange={(e) => setPass(e.target.value)}
        value={pass}
      />
      <br /> <br />

      <button
        type="button"
        onClick={() => saveUser()}
        disabled={!cond}
      >        
        Sign In
      </button>
    </div>
  );
};
