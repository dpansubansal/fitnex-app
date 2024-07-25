import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Features from "./Components/Features/Features";
import Technology from "./Components/Technology/Technology";
import Footer from "./Components/Footer/Footer";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Technology />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
