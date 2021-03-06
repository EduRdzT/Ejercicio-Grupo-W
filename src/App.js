import Formulario from "./components/formulario";
import NavBar from "./components/navBar";
import { DisignProvide } from "./context/disignContext";
import Mobi from "./assets/fiat-mobi.png";
import Ducato from "./assets/fiat-ducato.png";
import Argo from "./assets/fiat-argo.png";

const disign = [
  {
    id: "mobi",
    model: "Mobi",
    bgColor: "#ffba4b",
    fgColor: "#6e645f",
    svgColor: "#6e645f",
    src: Mobi,
  },
  {
    id: "argo",
    model: "Argo",
    bgColor: "#00bdd1",
    fgColor: "#ff0000",
    svgColor: "#ff0000",
    src: Argo,
  },
  {
    id: "ducato",
    model: "Ducato Cargo Van",
    bgColor: "#f94152",
    fgColor: "#ebe3d8",
    svgColor: "#ffffff",
    src: Ducato,
  },
];

function App() {
  return (
    <>
      <NavBar />
      <h4>Fuerza de manejo</h4>
      <h3>Elige tu pareja perfecta</h3>
      <h1>Enamórate</h1>
      <DisignProvide>
        <Formulario disign={disign} />
      </DisignProvide>
    </>
  );
}

export default App;
