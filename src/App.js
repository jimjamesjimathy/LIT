import Home from "./components/home/Home";
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
