import "./App.css";

import Menu from "./componentes/Menu";
import Slider from "./componentes/Slider/Slider";
import Forms from "./componentes/Forms";
import louroJose from "./assets/logo.png";
import { Container, Typography } from "@mui/material";

function App() {
  return (
    <>
      <Menu />
      <Container maxWidth='lg'>
        <Typography variant="h2" textAlign={'center'} mt={9}>MaisVocê</Typography>
        <Typography variant="h4" textAlign={'center'} mt={1} mb={10}>Receitas e Análises de pratos</Typography>
      </Container>
      {/* <h1 style={{display: 'flex', justifyContent: 'center', marginTop: '2em', textAlign: 'center'}}>MaisVocê Receitas brasileiras</h1> */}
      <Slider />
      <Forms img={louroJose} />
    </>
  );
}
export default App;
