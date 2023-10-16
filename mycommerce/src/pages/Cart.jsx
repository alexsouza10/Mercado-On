import React, { useState } from "react";
import { getItem, setItem } from "../services/LocalStorageFuncs";
import { BsFillCartDashFill } from "react-icons/bs";
import { ProdutcsArea } from "../styles/CartStyle";
import { Header } from "../components/Header";

export const Cart = () => {
  const [data, setData] = useState(getItem("carrinhoYt") || []);
  const removeItem = (obj) => {
    const arrFilter = data.filter((e) => e.id !== obj.id);
    setData(arrFilter);
    setItem("carrinhoYt", arrFilter);
  };

  const subTotal = data.reduce((acc,cur) => acc + cur.price, 0)
  return (
    <div>
      <Header />
      <h3>{`Total: R$ ${subTotal}`}</h3>
      <ProdutcsArea>
        {data.map((e) => (
          <div key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt={e.title} />
            <h4>{`R$ ${e.price}`}</h4>
            <button onClick={() => removeItem(e)}>
              <BsFillCartDashFill />
            </button>
          </div>
        ))}
      </ProdutcsArea>
    </div>
  );
};
