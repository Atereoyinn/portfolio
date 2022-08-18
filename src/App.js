import Intro from "./component/introPage/Intro";
import "./App.css";
import About from "./component/aboutPage/About";
import Contact from "./component/contactPage/Contact";
import ProductCardList from "./component/projectPage/ProductCardList";
import styled from "styled-components";
const Container = styled.div`
  padding: "0px";
  margin: "0px";
  color: "bisque";
  background: rgb(60, 58, 58);
  width: fit-content;
  height: "100vh";
`;
const App = () => {
  return (
    <Container>
      <Intro />
      <About />
      <ProductCardList />
      <Contact />
    </Container>
  );
};

export default App;
