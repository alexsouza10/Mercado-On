import React from "react";
import { getItem } from "../services/LocalStorageFuncs";
import { AiFillCheckCircle } from 'react-icons/ai';
import { PaymentStuyled } from '../styles/PaymentStyle'

export const Payment = (props) => {
  const {
    params: { price },
  } = props.match;
  const user = getItem("usuario");
  return (
    <div>
      <h3>Sua compra foi concluída com sucesso!</h3>
      <span><AiFillCheckCircle /></span>
        <img src="" alt="" />
        <p>{`Valor: R$ ${price}`}</p>
        <p>{`Usuário: ${user.name}`}</p>
        <p>{`Prazo: ${Math.ceil(Math.random() * 5) + 1} dias.`}</p>
    </div>
  );
};
