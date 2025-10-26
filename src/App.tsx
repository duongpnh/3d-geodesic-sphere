
import Scene from './components/Scene';

function App() {

  return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', textTransform: 'uppercase', fontFamily: 'sans-serif' }}>3D Geodesic Sphere</h1>
    <Scene />
  </div>
}

export default App
