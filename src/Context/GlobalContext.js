import { createContext } from "react";
import { useState, useEffect } from "react";
import { initialState } from "../Constants/InitialSatate";

export const GlobalContext = createContext();

export const GlobalData = ({ children }) => {
  const [produto, setProduto] = useState(initialState);
  const [list, setList] = useState([]);
  const [totalValues, setTotalValues] = useState(0);

  useEffect(() => {
    setProduto({
      ...produto,
      totalValue: produto.quantity * produto.unitValue,
    });
  }, [produto.quantity, produto.unitValue]);

  useEffect(() => {
    let values = 0;
    if (list.length === 0) {
      setTotalValues(values);
    }
    for (const valor in list) {
      values += list[valor].totalValue;
    }
    setTotalValues(values);
    // list.map((product) => {
    //   values += product.totalValue;
    //   return setTotalValues(values);
    // });
  }, [list]);

  function handleChange({ target }) {
    const { name, value } = target;

    setProduto({ ...produto, [name]: value });
  }

  function mais() {
    if (produto.quantity >= 0) {
      setProduto({ ...produto, quantity: produto.quantity + 1 });
    }
  }

  function menos() {
    if (produto.quantity > 0) {
      setProduto({ ...produto, quantity: produto.quantity - 1 });
    }
  }

  function addProduct() {
    setList([...list, produto]);
    setProduto(initialState);
  }
  function removeItem(key) {
    return setList([...list.slice(0, key), ...list.slice(key + 1)]);
  }

  return (
    <GlobalContext.Provider
      value={{
        produto,
        setProduto,
        list,
        setList,
        totalValues,
        setTotalValues,
        handleChange,
        mais,
        menos,
        addProduct,
        removeItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
