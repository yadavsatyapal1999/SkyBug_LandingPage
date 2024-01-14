import React from "react";

// Second Page with information about Glint, awards, coffee, projects, and clients
export default function Second({ targetRefs }) {
  return (
    // The whole section with an id and a reference to targetRefs
    <div id="second" ref={targetRefs}>
      <div>
        {/* Introduction */}
        <p className="collapse1">HELLO THERE</p>
        <h3 className="collapse">We Are Glint</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div id="secondalign">
        {/* Statistics section */}
        <div>
          <span className="number">127</span> <br />
          Awards Received
        </div>
        <div>
          <span className="number">1505</span> <br />
          Cups of Coffee
        </div>
        <div>
          <span className="number">109</span> <br />
          Projects Completed
        </div>
        <div>
          <span className="number"> 102</span> <br />
          Happy Clients
        </div>
      </div>
    </div>
  );
}
