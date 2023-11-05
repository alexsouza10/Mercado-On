import React, { useState } from "react";
import { setItem, getItem } from './services/LocalStorageFuncs';

export const Login = (props) => {
  const storedUser = getItem('usuario');
  const defaultUser = storedUser ? storedUser : { name: '', pass: '' };
  
  const [name, setName] = useState(defaultUser.name);
  const [pass, setPass] = useState(defaultUser.pass);
  const [passIncorrect, setPassIncorrect] = useState(false);

  const cond = name.length > 4 && pass.length > 8;

  const saveUser = () => {
    const { history: { push } } = props;
    
    if (name === defaultUser.name && pass === defaultUser.pass) {
      push('/store');
    } else if (name === defaultUser.name && pass !== defaultUser.pass) {
      setPassIncorrect(true);
    } else {
      setItem('usuario', { name, pass });
      push('/store');
    }
  };

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

      {passIncorrect && <p>Password Incorrect</p>}
      <br /> <br />

      <button
        type="button"
        onClick={saveUser}
        disabled={!cond}
      >        
        Sign In
      </button>
    </div>
  );
};
