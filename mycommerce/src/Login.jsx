import React, { useState } from "react";
import { setItem } from './services/LocalStorageFuncs';
import {  getItem } from './services/LocalStorageFuncs'

export const Login = (props) => {
  const user = getItem('usuario')
  
  const [name, setName] = useState(user.name || '');
  const [pass, setPass] = useState(user.pass || '');

  const cond = (name.length > 4 && pass.length > 8);

  const saveUser = (name,pass) => {
    const {history: {push} } = props;
    if(name === user.name && pass === user.pass){
      push('/store');
      return;
    }
    setItem('usuario',{ name, pass });
    push('/store')
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
