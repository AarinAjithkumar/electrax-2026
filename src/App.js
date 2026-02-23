import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";
import "./App.css";
import Speakers from "./components/Speakers";
import Register from "./components/Register";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Speakers />
      <Register />
      <Schedule />
      <Contact />
    </div>
  );
}

export default App;