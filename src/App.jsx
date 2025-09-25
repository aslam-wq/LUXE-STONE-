import "./App.css";
import { Routes, Route } from "react-router-dom";

import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Values from "./components/Values";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServiceDetail from "./components/ServiceDetail"; // import the detail page

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Values />
              <Portfolio />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/service/:id" element={<ServiceDetail />} />
      </Routes>
    </>
  );
}

export default App;
