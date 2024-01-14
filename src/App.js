import "./App.css";
import React, { useRef } from "react";
import Nav from "./Component/Nav/Nav";
import First from "./Component/FIrstPage/First";
import Second from "./Component/Second/Second";
import Third from "./Component/Third/Third";
import Fourth from "./Component/Fourth/Fourth";
import Fifth from "./Component/Fifth/Fifth";
import Sixth from "./Component/Sixth/Sixth";
import Sventh from "./Component/Seventh/Seventh";
import Menu from "./Component/Menu";

function App() {
  // Array of refs to store references to each section
  const targetRefs = [useRef(), useRef(), useRef(), useRef(),useRef(), useRef(), useRef()];

  // Function to scroll to a specific section based on index
  const scrollToRef = (index) => {
    if (targetRefs[index].current) {
      targetRefs[index].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Rendering the main application structure
  return (
    <div className="App">
      {/* Navigation component */}
      <Nav />
      
      {/* Menu component with scroll-to functionality */}
      <Menu scrollToRef={scrollToRef} />

      {/* Individual section components */}
      <First targetRefs={targetRefs[0]} />
      <Second targetRefs={targetRefs[1]} />
      <Third targetRefs={targetRefs[2]} />
      <Fourth targetRefs={targetRefs[3]} />
      <Fifth targetRefs={targetRefs[4]} />
      <Sixth targetRefs={targetRefs[5]} />
      <Sventh targetRefs={targetRefs[6]} />
    </div>
  );
}

export default App;
