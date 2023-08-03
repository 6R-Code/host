import './App.css';
// following imports are for cylinder threejs
// npm start pour lancer l'app react
import { Canvas } from "@react-three/fiber";
import Cylinder3d from "./component/Cylinder3d";

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div className='App-header-left'>
          <h1>PROJECT 3D</h1>
        </div>
        <div className='App-header-right'>
          <h3>Account</h3>
          <h3>Product</h3>
          <h3>Investments</h3>
          <img src='../image.png' alt='Image'></img>
        </div>
      </header>




      <div className="App-3DModel">
        <Canvas>
          <pointLight position={[10, 10, 10]} />
          <ambientLight />
          <Cylinder3d position={[-1.2, 0, 0]} />
          <Cylinder3d position={[1.2, 0, 0]} />
        </Canvas>
      </div>






    </div>
  );
}

export default App;