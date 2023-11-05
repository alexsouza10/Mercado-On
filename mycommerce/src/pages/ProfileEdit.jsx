import React, { useState, useEffect } from "react";
import { getItem, setItem } from "../services/LocalStorageFuncs";

export const ProfileEdit = (props) => {
  // Initialize states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [img, setImg] = useState('');
  const [cpf, setCpf] = useState('');

  // Fetch user data once when the component mounts
  useEffect(() => {
    const user = getItem('usuario');
    if (user) {
      setName(user.name || '');
      setEmail(user.email || '');
      setPass(user.pass || '');
      setImg(user.img || '');
      setCpf(user.cpf || '');
    }
  }, []); 


  const cond =
    name.length > 4 &&
    email.includes('@') &&
    email.length > 8 &&
    pass.length > 8 &&
    img.length > 4 &&
    String(cpf).length === 11; 


  const saveChanges = () => {
    const userData = { name, email, pass, img, cpf };
    setItem('usuario', userData);
    const { history: { push } } = props;
    push('/profile');
  };

  return (
    <div>
      <p>Name</p>
      <input
        type="text"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      />

      <p>Email</p>
      <input
        type="email"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
      />

      <p>Password</p>
      <input
        type="password"
        value={pass}
        onChange={({ target: { value } }) => setPass(value)}
      />

      <p>Image Url</p>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          setImg(file); 
        }}
      />

      <p>CPF</p>
      <input
        type="number"
        value={cpf}
        onChange={({ target: { value } }) => setCpf(value)}
      />

      <br /> <br /> <br />

      <button disabled={!cond} onClick={saveChanges}>
        Save Changes
      </button>
    </div>
  );
};


