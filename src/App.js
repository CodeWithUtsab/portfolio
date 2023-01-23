import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";
import Testimonial from "./components/Testimonial/Testimonial";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Contact/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Testimonial />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
