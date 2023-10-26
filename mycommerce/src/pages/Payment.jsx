import React, { useState } from "react";
import { getItem } from "../services/LocalStorageFuncs";
import { AiFillCheckCircle } from 'react-icons/ai';
import { PaymentArea } from '../styles/PaymentStyle'

export const Payment = (props) => {
  const [Loading, setLoading] = useState(true)
  setTimeout(() => {setLoading(false)},2500)

  const {params: { price }} = props.match;
  const user = getItem("usuario");
  return (
    <>
    {
      loading ? <Loading /> : (
    <PaymentArea>
      <h2>Sua compra foi concluída com sucesso!</h2>
      <span> <AiFillCheckCircle /> </span>
        <h4>{`Valor: R$ ${price}`}</h4>
        <h4>{`Usuário: ${user.name}`}</h4>
        <h4>{`Prazo: ${Math.ceil(Math.random() * 5) + 1} dias.`}</h4>
    </PaymentArea>
      )
    }
    </>
  );
};
