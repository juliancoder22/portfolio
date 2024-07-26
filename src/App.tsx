import React from "react";
import { DarkModeProvider } from "./DarkModeContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import "./App.scss";

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <Header />
      <Hero />
      <Footer />
    </DarkModeProvider>
  );
};

export default App;
