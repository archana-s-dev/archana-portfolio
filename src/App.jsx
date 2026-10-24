
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';
import './components/Introduction.css';
import './components/About.css';
import './components/Projects.css';
import './components/Education.css';
import './components/Contact.css';
import './components/Footer.css';

function App() {
  return (
    <>
      <Navbar />

      <main className="main-content">
        <Introduction />
        <About />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
