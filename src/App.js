import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Features from "./Components/Features/Features";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Features />
    </div>
  );
}

export default App;
