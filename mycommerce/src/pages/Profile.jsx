import React from "react";
import { getItem } from "../services/LocalStorageFuncs";

export const Profile = (props) => {
  const user = getItem("usuario");

  // Check if 'user' is null or undefined before accessing its properties
  const name = user ? user.name : " ";
  const cpf = user ? user.cpf : " ";
  const email = user ? user.email : " ";
  const imgSrc = user ? user.img : " "; // Handle 'null' or 'undefined' image

  const toProfileEdit = () => {
    const {
      history: { push },
    } = props;
    push("/profile/edit");
  };

  return (
    <div>
      <p>{`Name: ${name}`}</p>
      <p>{`CPF: ${cpf}`}</p>
      <p>{`E-mail: ${email}`}</p>
      {imgSrc && <img src={imgSrc} alt="img-user" />} {/* Display image only if 'imgSrc' exists */}
      <br /> <br />
      <button onClick={toProfileEdit}>Edit Profile</button>
    </div>
  );
};
