import ClayTable from "@clayui/table";
import ClayButton from "@clayui/button";
import { GlobalContext } from "../Context/GlobalContext";
import { useContext } from "react";

const ItemTable = () => {
  const data = useContext(GlobalContext);
  return (
    <>
      {/* {JSON.stringify(lista)} */}
      <ClayTable>
        <ClayTable.Head>
          <ClayTable.Row>
            <ClayTable.Cell headingCell>{"Desc"}</ClayTable.Cell>
            <ClayTable.Cell headingCell>{"V.Unit"}</ClayTable.Cell>
            <ClayTable.Cell headingCell>{"Qtd"}</ClayTable.Cell>
            <ClayTable.Cell headingCell>{"V.Ttoal"}</ClayTable.Cell>
            <ClayTable.Cell headingCell>{"Remove"}</ClayTable.Cell>
          </ClayTable.Row>
        </ClayTable.Head>
        <ClayTable.Body>
          {data.list.map((element, index) => {
            return (
              <ClayTable.Row key={index}>
                <ClayTable.Cell headingTitle>{element.product}</ClayTable.Cell>
                <ClayTable.Cell>
                  {element.unitValue.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </ClayTable.Cell>
                <ClayTable.Cell>{element.quantity}</ClayTable.Cell>
                <ClayTable.Cell>
                  {element.totalValue.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </ClayTable.Cell>
                <ClayTable.Cell>
                  <ClayButton
                    displayType="warning"
                    type="button"
                    onClick={() => data.removeItem(index)}
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

export default ItemTable;
