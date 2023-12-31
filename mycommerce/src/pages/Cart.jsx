import React, { useState } from "react";
import { getItem, setItem } from "../services/LocalStorageFuncs";
import { BsFillCartDashFill } from "react-icons/bs";
import { ProdutcsArea } from "../styles/CartStyle";

export const Cart = (props) => {
  const [data, setData] = useState(getItem("carrinhoYt") || []);
  const removeItem = (obj) => {
    const arrFilter = data.filter((e) => e.id !== obj.id);
    setData(arrFilter);
    setItem("carrinhoYt", arrFilter);
  };

  const handleClick = () => {
    const { history: { push } } = props;
    push(`/payment/${subTotal}`)
    setItem('carrinhoYt',[])
  }

  const subTotal = data.reduce((acc,cur) => acc + cur.price, 0)
  return (
    <div>
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
      <br /> <br />
      <button
      disabled = { !subTotal > 0}
      onClick={handleClick}>
        Comprar
      </button>
    </div>
  );
};
