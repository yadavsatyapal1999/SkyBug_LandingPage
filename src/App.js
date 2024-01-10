import './App.css';
import Nav from './Component/Nav/Nav';
import First from './Component/FIrstPage/First';
import Second from './Component/Second/Second';
import Third from './Component/Third/Third';
import Fourth from './Component/Fourth/Fourth';
import Fifth from './Component/Fifth/Fifth';
import Sixth from './Component/Sixth/Sixth';
import Sventh from './Component/Seventh/Seventh';
import Menu from './Component/Menu';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Menu/>
     <First/>
     <Second/>
     <Third/>
     <Fourth/>
     <Fifth/>
     <Sixth/>
     <Sventh/>
    </div>
  );
}

export default App;
