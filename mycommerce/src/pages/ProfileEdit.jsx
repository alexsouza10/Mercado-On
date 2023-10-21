import React, { useState } from "react";
import { getItem, setItem } from "../services/LocalStorageFuncs";

export const ProfileEdit = (props) => {
  const user = getItem('usuario');
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [pass, setPass] = useState(user.pass || '');
  const [img, setImg] = useState(user.img || '');
  const [cpf, setCpf] = useState(user.cpf || '');

  const cond = (
    name.length > 4 && (email.includes('@') && email.length > 8)
    && pass.length > 8 && img.length > 4 && cpf.length === 12
  );

  const saveChanges = () => {
    // Correção do uso de setItem
    setItem('usuario', { name, email, pass, img, cpf });
    const { history: { push } } = props;
    push('/profile');
  }

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
        type="text"
        value={img}
        onChange={({ target: { value } }) => setImg(value)}
      />

      <p>CPF</p>
      <input
        type="number"
        value={cpf}
        onChange={({ target: { value } }) => setCpf(value)}
      />

      <br /> <br /> <br />
      {/* Correção na propriedade disabled */}
      <button
        disabled={!cond}
        onClick={saveChanges}
      >
        Save Changes
      </button>
    </div>
  );
};
