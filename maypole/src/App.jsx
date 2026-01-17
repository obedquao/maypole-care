import Navbar from "./components/navbar";
import Home from "./sections/home";
import About from "./sections/about";
import Services from "./sections/services";
import Career from "./sections/career";
import Contact from "./sections/contact";
import Footer from "./sections/footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Career />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
