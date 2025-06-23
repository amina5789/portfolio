import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Header from "./components/shared/Header";
import Skills from "./components/Skills/Skills";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
