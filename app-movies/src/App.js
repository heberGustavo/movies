import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Container>
        <h2>Hello World!</h2>
        <p>I'm lerning React JS</p>
      </Container>
      <Footer />
    </>
  );
}

export default App;
