import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Posicionamento } from './sections/Posicionamento';
import { Metodo } from './sections/Metodo';
import { Portfolio } from './sections/Portfolio';
import { Contato } from './sections/Contato';
import { Footer } from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Posicionamento />
        <Metodo />
        <Portfolio />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;
