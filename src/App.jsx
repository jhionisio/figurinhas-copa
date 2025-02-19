import React from "react";
import Menu from "./components/Menu";
import MainRoutes from "./routes/MainRoutes";
import { DivGeral } from "./components/style";
import Rodape from "./components/Rodape";



export default function App() {
  return (
    <DivGeral>
    <div>
      <Menu/>
      <MainRoutes/>
      <Rodape/>
    </div>
    </DivGeral>
  );
}