import React, { useState } from "react";

export const ProfileEdit = () => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ pass, setPass ] = useState('')
  const [ img, setImg ] = useState('')
  const [ cpf, setCpf ] = useState('')

  const cond = (
    name.length > 4 && (email.includes('@') && email.length > 8)
    && pass.length > 8 && img.length > 4 && cpf.length === 12
  )

  return (
    <div>
      <p>Name</p>
      <input 
      type="text"
      value={name}
      onChange={({target:{value}}) =>setName(value) }
      />
      
      <p>Email</p>
      <input 
      type="email" 
      value={email}
      onChange={({target:{value}}) => setEmail(value)}
      />
      
      <p>Password</p>
      <input 
      type="password" 
      value={pass}
      onChange={({target:{value}}) => setPass(value)}
      />
      
      <p>Image Url</p>
      <input 
      type="text" 
      alue={img}
      onChange={({target:{value}}) => setImg(value)}
      />
      
      <p>CPF</p>
      <input 
      type="number" 
      alue={cpf}
      onChange={({target:{value}}) => setCpf(value)}
      />
      
      <br /> <br /> <br />
      <button
        disable={!cond}
      >
        Save Changes
      </button>
    </div>
  );
};
