import React, { useState, useEffect } from "react";
import { getItem } from "../services/LocalStorageFuncs";
import { AiFillCheckCircle } from 'react-icons/ai';
import { PaymentArea } from '../styles/PaymentStyle';

export const Payment = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading completion after 2500 milliseconds
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer); // Clear the timer on unmount or re-render
  }, []); // Empty dependency array ensures this effect runs only once

  const { params: { price } } = props.match;
  const user = getItem("usuario");

  return (
    <>
      {loading ? (
        <p>Loading...</p>
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
