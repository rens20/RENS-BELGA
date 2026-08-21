import Header from "./components/Header";
import Home from "./components/Home";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-floral text-ink">
      <Header />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="about">
          <AboutMe />
        </section>

        <section id="projects">
          <Projects />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
