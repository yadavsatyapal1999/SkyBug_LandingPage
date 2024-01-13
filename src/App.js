import './App.css';
import React,{useRef} from 'react';
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

  const targetRefs = [useRef(), useRef()];

  const scrollToRef = (index) => {
    if (targetRefs[index].current) {
      targetRefs[index].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return <div className="App">
      
     <Nav/>
     <Menu  scrollToRef={scrollToRef} />
     <First/>
     <Second/>
     <Third targetRefs={targetRefs[0]} />
     <Fourth/>
     <Fifth/>
     <Sixth targetRefs={targetRefs[1]}/>
     <Sventh/>
    
    </div>
     
  ;
}

export default App;
