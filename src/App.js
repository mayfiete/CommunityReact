import Hero from './components/HeroComponent';
import Body from './components/BodyComponent';
import Footer from './components/FooterComponent';
import Header from './components/HeaderComponent';
import Logo from './components/LogoComponent';
import './App.css';
import { logDOM } from '@testing-library/react';
import Main from './components/MainComponent';

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
