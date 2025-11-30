import Home from './pages/Home'
import './Global.css'
import ParticlesComponent from './components/particles';
import Skills from './pages/Skills';

function App() {
  return (
    <>
      <ParticlesComponent id="tsparticles" /> 
      <div style={{ position: "relative", zIndex: 1 }}>
        <Home />
        <Skills />
      </div>    
    </>
  );
}

export default App;
