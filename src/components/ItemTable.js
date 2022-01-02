import ClayTable from "@clayui/table";
import ClayButton from "@clayui/button";
import { GlobalContext } from "../Context/GlobalContext";
import { useContext } from "react";

const ItemTable = () => {
  const data = useContext(GlobalContext);
  const tableMapping = data?.list.map((element, index) => {
    return (
      <ClayTable.Row key={index}>
        <ClayTable.Cell
          responsivesize={"sm"}
          striped={"true"}
          headingTitle
          className="p-1 w-100"
        >
          {element.product}
        </ClayTable.Cell>
        <ClayTable.Cell className="p-1">
          {element.unitValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </ClayTable.Cell>
        <ClayTable.Cell className="p-1">{element.quantity}</ClayTable.Cell>
        <ClayTable.Cell className="p-1">
          {element.totalValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </ClayTable.Cell>
        <ClayTable.Cell className="p-1">
          <ClayButton
            className="btn-sm"
            displayType="warning"
            type="button"
            onClick={() => data?.removeItem(index)}
          >
            X
          </ClayButton>
        </ClayTable.Cell>
      </ClayTable.Row>
    );
  });
  return (
    <>
      {/* {JSON.stringify(lista)} */}
      <ClayTable striped responsiveSize="true" borderedColumns>
        <ClayTable.Head>
          <ClayTable.Row>
            <ClayTable.Cell headingCell className="text-center">
              {"Desc"}
            </ClayTable.Cell>
            <ClayTable.Cell headingCell className="text-center">
              {"V.Unit"}
            </ClayTable.Cell>
            <ClayTable.Cell headingCell className="text-center">
              {"Qtd"}
            </ClayTable.Cell>
            <ClayTable.Cell headingCell className="text-center">
              {"V.Ttoal"}
            </ClayTable.Cell>
            <ClayTable.Cell headingCell className="text-center">
              {"Remove"}
            </ClayTable.Cell>
          </ClayTable.Row>
        </ClayTable.Head>
        <ClayTable.Body>{tableMapping}</ClayTable.Body>
      </ClayTable>
    </>
  );
};

export default ItemTable;
