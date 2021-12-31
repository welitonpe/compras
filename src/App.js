import "@clayui/css/lib/css/atlas.css";
import ClayLayout from "@clayui/layout";
import ClayAlert from "@clayui/alert";
import ClayTable from "@clayui/table";
import ClayForm, { ClayInput, ClaySelect } from "@clayui/form";
import ClayButton from "@clayui/button";
import { useEffect, useState } from "react";

const Test = (props) => {
  return (
    <>
      {/* {JSON.stringify(lista)} */}
      <ClayTable>
        <ClayTable.Head>
          <ClayTable.Row>
            <ClayTable.Cell headingCell>{"Desc"}</ClayTable.Cell>
            <ClayTable.Cell headingCell>{"Qtd"}</ClayTable.Cell>
            <ClayTable.Cell headingCell>{"V.Unit"}</ClayTable.Cell>
            <ClayTable.Cell headingCell>{"V.Ttoal"}</ClayTable.Cell>
            <ClayTable.Cell headingCell>{"Remove"}</ClayTable.Cell>
          </ClayTable.Row>
        </ClayTable.Head>
        <ClayTable.Body>
          {props.lista.map((elemento, index) => {
            return (
              <ClayTable.Row key={index}>
                <ClayTable.Cell headingTitle>{elemento.product}</ClayTable.Cell>
                <ClayTable.Cell>{elemento.unitValue}</ClayTable.Cell>
                <ClayTable.Cell>{elemento.quantity}</ClayTable.Cell>
                <ClayTable.Cell>{elemento.totalValue}</ClayTable.Cell>
                <ClayTable.Cell>
                  <ClayButton
                    displayType="warning"
                    type="button"
                    onClick={() => props.onRemove(props.lista, index)}
                  >
                    X
                  </ClayButton>
                </ClayTable.Cell>
              </ClayTable.Row>
            );
          })}
        </ClayTable.Body>
      </ClayTable>
    </>
  );
};
function App() {
  const initialState = {
    product: "",
    unitValue: 0,
    quantity: 0,
    totalValue: "false",
  };
  const [list, setList] = useState([]);
  const [totalValues, setTotalValues] = useState(0);
  const [produto, setProduto] = useState(initialState);
  const options = [
    {
      label: "Option 1",
      value: "1",
    },
    {
      label: "Option 2",
      value: "2",
    },
  ];

  useEffect(() => {
    setProduto({
      ...produto,
      totalValue: produto.quantity * produto.unitValue,
    });
    fimValues();
  }, [produto.quantity, produto.unitValue]);

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

  function removeItem(lista, key) {
    return setList([...lista.slice(0, key), ...lista.slice(key + 1)]);
  }
  function fimValues() {
    console.log(list);
  }

  return (
    <div className="App">
      <ClayLayout.ContainerFluid view className="fixed">
        <ClayAlert displayType="warning" spritemap={"!"} title="">
          <h1>{totalValues || "R$ 00.00"}</h1>
        </ClayAlert>
      </ClayLayout.ContainerFluid>
      <ClayLayout.ContainerFluid view>
        <ClayForm.Group>
          <ClayInput.Group>
            <ClayInput.GroupItem prepend>
              <ClayInput
                name="product"
                placeholder="Produto"
                type="text"
                className="text-center"
                onChange={handleChange}
                value={produto.product}
              />
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
                onChange={handleChange}
                name="unitValue"
                min="0.00"
                max="10000.00"
                step="0.01"
                value={produto.unitValue}
              />
            </ClayInput.GroupItem>
            <ClayInput.GroupItem prepend>
              <ClayInput
                name="quantity"
                placeholder={"quantidade"}
                type="number"
                value={produto.quantity}
                onChange={handleChange}
                className="text-center"
                disabled
              />
            </ClayInput.GroupItem>
            <ClayInput.GroupItem shrink prepend className="">
              <ClayButton
                name="quantity"
                displayType="secondary"
                type="button"
                onClick={menos}
              >
                -
              </ClayButton>
            </ClayInput.GroupItem>
            <ClayInput.GroupItem shrink prepend>
              <ClayButton
                name="quantity"
                displayType="secondary"
                type="button"
                onClick={mais}
              >
                +
              </ClayButton>
            </ClayInput.GroupItem>{" "}
            <ClayInput.GroupItem shrink append>
              <ClayButton
                displayType="success"
                type="button"
                onClick={() => {
                  setList([...list, produto]);
                  setProduto(initialState);
                  fimValues();
                }}
              >
                AD
              </ClayButton>
            </ClayInput.GroupItem>
          </ClayInput.Group>
        </ClayForm.Group>
      </ClayLayout.ContainerFluid>
      <ClayLayout.ContainerFluid view>
        <Test lista={list} onRemove={removeItem} />
      </ClayLayout.ContainerFluid>
    </div>
  );
}

export default App;
