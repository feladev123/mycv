import Navbar from './pages/Navbar/Navbar';
import "./App.css"
import HeroSection from './pages/HeroSection/HeroSection';
import AboutMe from './pages/aboutMe/AboutMe';
import Services from './pages/services/Services';
import Projects from './pages/Projects/Projects';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <HeroSection/>
        <section id="about">
          <AboutMe/>
        </section>
        <section id="Experience">
          <Services/>
        </section>
        <section id="Project">
          <Projects/>
        </section>
        <section id="Contact">
          <Contact/>
        </section>
    </div>
  );
}

export default App;
