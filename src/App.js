import "./App.css";

import Menu from "./componentes/Menu";
import Slider from "./componentes/Slider/Slider";
import Forms from "./componentes/Forms";
import louroJose from "./assets/logo.png";

function App() {
  return (
    <>
      <Menu />
      <Slider />
      <Forms img={louroJose} />
    </>
  );
}
export default App;
