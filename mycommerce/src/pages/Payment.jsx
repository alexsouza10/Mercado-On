import React, { useState, useEffect } from "react";
import { getItem } from "../services/LocalStorageFuncs";
import { AiFillCheckCircle } from 'react-icons/ai';
import { PaymentArea } from '../styles/PaymentStyle';
import { Loading } from "../components/Loading";

export const Payment = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer); 
  }, []); 
  const { params: { price } } = props.match;
  const user = getItem("usuario");

  return (
    <>
      {loading ? (
        <Loading/>
      ) : (
        <PaymentArea>
          <h2>Sua compra foi concluída com sucesso!</h2>
          <span><AiFillCheckCircle /></span>
          <h4>{`Valor: R$ ${price}`}</h4>
          {user && user.name ? (
            <>
              <h4>{`Usuário: ${user.name}`}</h4>
              <h4>{`Prazo: ${Math.ceil(Math.random() * 5) + 1} dias.`}</h4>
            </>
          ) : (
            <h4>User information not available</h4>
          )}
        </PaymentArea>
      )}
    </>
  );
};
