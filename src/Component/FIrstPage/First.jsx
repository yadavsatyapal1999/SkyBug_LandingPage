import React from "react";

// First Page contains company name and another two buttons
export default function First({ targetRefs }) {
  return (
    // The whole section with an id and a reference to targetRefs
    <div id="first" ref={targetRefs} >
      {/* The menu section */}
      <div id="menu">
        {/* The company name */}
        <div id="glint">Glint</div>
      </div>
      <div>
        {/* Heading and introduction */}
        <h4>
          <p>Welcome to Glint</p>
          We are a creative group of people who design influential brands and
          digital experiences.
        </h4>
        {/* Buttons section */}
        <div>
          <button>Start a Project</button>
          <button>About Us</button>
        </div>
      </div>
    </div>
  );
}
