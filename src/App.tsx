import React from "react";
import { DarkModeProvider } from "./DarkModeContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import "./App.scss";

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Footer />
    </DarkModeProvider>
  );
};

export default App;
