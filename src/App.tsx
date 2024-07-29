import Hero from "./components/Hero/Hero";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
