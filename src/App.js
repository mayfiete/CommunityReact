import Hero from './components/Hero';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';
import './App.css';
import { logDOM } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <Hero />
      <Logo />
      <Header />
    </div>
  );
}

export default App;
