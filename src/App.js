import './App.css';
import {Navbar, Work, CreateGame, Hero} from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Work/>
      {/* <CreateGame/> */}
    </div>
  );
}

export default App;
