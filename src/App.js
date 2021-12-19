import { Element } from 'react-scroll';
import './App.css';
import Contact from './components/Contact/Contact';
import ContactSeparator from './components/ContactSeparator/ContactSeparator';
import ContactSeparator2 from './components/ContactSeparator2/ContactSeparator2';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import IntroRow from './components/IntroRow/IntroRow';
import IntroSeparator from './components/IntroSeparator/IntroSeparator';
import ProfSeparator from './components/ProfSeparator/ProfSeparator';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import TopBar from './components/TopBar/TopBar';
import ToTop from './components/topTop/ToTop';

function App() {
  return (
    <div className="base">
      <ToTop />
      <Element id="top" style={{ height: 1 }}></Element>
      <TopBar />
      <Hero />
      <IntroSeparator />
      <IntroRow />
      <ProfSeparator />
      <Skills />
      <ContactSeparator />
      <Projects />
      <ContactSeparator2 />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
