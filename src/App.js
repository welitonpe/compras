import "@clayui/css/lib/css/atlas.css";
import ClayLayout from "@clayui/layout";
import ClayAlert from "@clayui/alert";
import Form from "./components/Form";
import { GlobalData } from "./Context/GlobalContext";
import ItemTable from "./components/ItemTable";
import { initialState } from "./Constants/InitialSatate";
import { useState, useContext } from "react";
import { GlobalContext } from "./Context/GlobalContext";

function App() {
  const data = useContext(GlobalContext);
  return (
    <>
      <div className="App">
        <ClayLayout.ContainerFluid view className="fixed">
          <ClayAlert
            displayType="warning"
            spritemap={"!"}
            title=""
            className=""
          >
            <h1 className="mb-0">
              {data?.totalValues.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              }) || "R$ 00.00"}
            </h1>
          </ClayAlert>
        </ClayLayout.ContainerFluid>

        <ClayLayout.ContainerFluid view>
          <Form></Form>
        </ClayLayout.ContainerFluid>

        <ClayLayout.ContainerFluid view>
          <ItemTable lista={data?.list} onRemove={data?.removeItem} />
        </ClayLayout.ContainerFluid>
      </div>
    </>
  );
}

export default App;
