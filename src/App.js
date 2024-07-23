import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Features from "./Components/Features/Features";
import Technology from "./Components/Technology/Technology";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Technology />
      <Footer />
    </div>
  );
}

export default App;
