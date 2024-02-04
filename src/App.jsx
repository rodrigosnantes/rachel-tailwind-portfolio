import AOS from 'aos';
import MyParticle from './components/MyParticle';

import Menu from './components/menu/Menu';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Experiences from './components/experiences/Experiences';

import './App.css'
import 'aos/dist/aos.css';

AOS.init();

export default function App() {

  return (
    <div className='min-h-screen bg-slate-950 overflow-hidden'>
      <Header />
      <Menu />
      <MyParticle />
      <Home />
      <About />
      <Skills />
      <Experiences />
      <Contact />
    </div>
  )
}
