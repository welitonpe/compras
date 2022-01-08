import "@clayui/css/lib/css/atlas.css";
import ClayLayout from "@clayui/layout";
import ClayAlert from "@clayui/alert";
import Form from "./components/Form";
import ItemTable from "./components/ItemTable";
import { useContext } from "react";
import { GlobalContext } from "./Context/GlobalContext";

function Home() {
  const data = useContext(GlobalContext);
  return (

      <div className="Container">
      
      
      </div>

  );
}

export default Home;
