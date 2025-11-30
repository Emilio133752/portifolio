import Home from './pages/Home'
import './Global.css'
import ParticlesComponent from './components/particles';

function App() {
  return (
    <>
      <ParticlesComponent id="tsparticles" /> 
      <div style={{ position: "relative", zIndex: 1 }}>
        <Home />
      </div>    
    </>
  );
}

export default App;
