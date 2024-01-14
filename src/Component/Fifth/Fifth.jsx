// Importing the stylesheet for the component
import "./fifth.css";
// Importing React and necessary icons from 'react-icons/fa'
import React from "react";
import {
  FaAmazon,
  FaGoogle,
  FaMicrosoft,
  FaInstagram,
  FaFacebook,
  FaApple,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
// Importing the 'useState' hook from React
import { useState } from "react";

// Functional component named Fifth
export default function Fifth({ targetRefs }) {
  // Array of client icons using react-icons
  const array = [
    <FaAmazon className="icon" size={60} />,
    <FaGoogle className="icon" size={60} />,
    <FaMicrosoft className="icon" size={60} />,
    <FaFacebook className="icon" size={60} />,
    <FaApple className="icon" size={60} />,
    <FaGithub className="icon" size={60} />,
    <FaTwitter className="icon" size={60} />,
    <FaLinkedin className="icon" size={60} />,
    <FaInstagram className="icon" size={60} />,
  ];

  // State to keep track of the current set of client icons
  const [state, Setstate] = useState(0);

  // JSX structure for the Fifth component
  return (
    <div id="fifth" ref={targetRefs}>
      {/* Section with header text */}
      <div className="head">
        <p id="client">OUR CLIENT</p>
        <h2>Glint has been honored to partner up with these clients</h2>
      </div>

      {/* Section with client icons */}
      <div className="images">
        {array.map((obj, index) => (
          // Displaying client icons based on the current state
          <React.Fragment key={index}>
            {index >= state && index <= state + 4 ? <span>{obj}</span> : <></>}
          </React.Fragment>
        ))}
        {/* Navigation buttons to switch between sets of client icons */}
        <div>
          <button className="btn" onClick={() => Setstate(0)}>
            .
          </button>
          <button className="btn" onClick={() => Setstate(1)}>
            .
          </button>
          <button className="btn" onClick={() => Setstate(2)}>
            .
          </button>
          <button className="btn" onClick={() => Setstate(3)}>
            .
          </button>
          <button className="btn" onClick={() => Setstate(4)}>
            .
          </button>
        </div>
      </div>

      {/* Section with additional text */}
      <div className="textfifth">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  );
}
