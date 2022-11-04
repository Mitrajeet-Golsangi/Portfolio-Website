import './App.css';
import Contact from './components/Contact/Contact';
import ContactSeparator from './components/ContactSeparator/ContactSeparator';
import ContactSeparator2 from './components/ContactSeparator2/ContactSeparator2';
import ColorContextProvider from './components/CustomColorPicker/ColorContextProvider';
import CustomColorPicker from './components/CustomColorPicker/CustomColorPicker';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import IntroRow from './components/IntroRow/IntroRow';
import IntroSeparator from './components/IntroSeparator/IntroSeparator';
import ProfSeparator from './components/ProfSeparator/ProfSeparator';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import TopBar from './components/TopBar/TopBar';

function App() {
	return (
		<div className="base">
			<ColorContextProvider>
				<CustomColorPicker />
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
			</ColorContextProvider>
		</div>
	);
}

export default App;
