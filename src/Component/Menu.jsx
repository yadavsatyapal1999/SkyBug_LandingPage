import React  from "react";
import { FaBars } from "react-icons/fa";

export default function Menu({ scrollToRef,show, setShow }) {
  

  return (
    <div id="menusticky"  className={show ? "absolute" :""} >
      {/* Menu icon */}
      <div onClick={() => setShow(!show)}>
        Menu{" "}
        <span>
          <FaBars size={20} />
        </span>
      </div>
      <br />
      {/* Render the menu items conditionally based on the 'show' state */}
      {show ? (
        <div className="list">
          {/* Menu items with click handlers */}
          <li onClick={() => scrollToRef(0)}>Home</li>
          <li onClick={() => scrollToRef(1)}>Milestone</li>
          <li onClick={() => scrollToRef(2)}>Experties</li>
          <li onClick={() => scrollToRef(3)}>Recent Project</li>
          <li onClick={() => scrollToRef(4)}>Customer</li>
          <li onClick={() => scrollToRef(5)}>Contact Us</li>
          <li onClick={() => scrollToRef(6)}>About Us</li>
        </div>
      ) : null}
    </div>
  );
}
