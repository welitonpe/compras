import ClayForm, { ClayInput, ClaySelect } from "@clayui/form";
import ClayButton from "@clayui/button";
import { useEffect, useState, useContext } from "react";
import { initialState } from "../Constants/InitialSatate";
import { GlobalContext, GlobalData } from "../Context/GlobalContext";
const Form = () => {
  const data = useContext(GlobalContext);

  return (
    <ClayForm.Group>
      <ClayInput.Group>
        <ClayInput.GroupItem prepend>
          <ClayInput
            name="product"
            placeholder="Produto"
            type="text"
            className="text-center"
            onChange={data.handleChange}
            value={data.produto.product}
          />

          {/* MAIS TARDE PODE SER IMPLEMENTADO UM SELECT NO LUCAR OU UM SEARCH}
      {/* <ClaySelect aria-label="Select Label" id="mySelectId">
      {options.map((item) => (
        <ClaySelect.Option
          key={item.value}
          label={item.label}
          value={item.value}
        />
      ))}
    </ClaySelect> */}
        </ClayInput.GroupItem>
        <ClayInput.GroupItem prepend>
          <ClayInput
            placeholder="R$"
            type="number"
            className="text-center"
            onChange={data.handleChange}
            name="unitValue"
            min="0.00"
            max="10000.00"
            step="0.01"
            value={data.produto.unitValue.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          />
        </ClayInput.GroupItem>
        <ClayInput.GroupItem prepend>
          <ClayInput
            name="quantity"
            placeholder={"quantidade"}
            type="number"
            value={data.produto.quantity}
            onChange={data.handleChange}
            className="text-center"
            disabled
          />
        </ClayInput.GroupItem>
        <ClayInput.GroupItem shrink prepend className="">
          <ClayButton
            name="quantity"
            displayType="secondary"
            type="button"
            onClick={data.menos}
          >
            -
          </ClayButton>
        </ClayInput.GroupItem>
        <ClayInput.GroupItem shrink prepend>
          <ClayButton
            name="quantity"
            displayType="secondary"
            type="button"
            onClick={data.mais}
          >
            +
          </ClayButton>
        </ClayInput.GroupItem>{" "}
        <ClayInput.GroupItem shrink append>
          <ClayButton
            displayType="success"
            type="button"
            onClick={data.addProduct}
          >
            AD
          </ClayButton>
        </ClayInput.GroupItem>
      </ClayInput.Group>
    </ClayForm.Group>
  );
};

export default Form;
