import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaBeer } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import "./third.css";

// Third Page component showcasing what the company does
export default function Third({ targetRefs }) {
  return (
    // The outer div of the third Page with an id and a reference to targetRefs
    <div id="third" ref={targetRefs}>
      {/* Header */}
      <p id="green">WHAT WE DO</p>
      <h4 id="green2">
        We've got everything you need to launch and grow your business
      </h4>

      {/* Content section with various services */}
      <div id="content">
        {/* Service Block 1 */}
        <div>
          <p className="logo">
            <FaTwitter size={60} style={{ color: "green" }} />
            <span> Brand Identity</span>
          </p>
          <p className="text">
            {/* Placeholder text for the service */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Service Block 2 */}
        <div>
          <p className="logo">
            <FaBeer size={60} style={{ color: "green" }} />
            <span> Illustration</span>
          </p>
          <p className="text">
            {/* Placeholder text for the service */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Service Block 3 */}
        <div>
          <p className="logo">
            <FaBullhorn size={60} style={{ color: "green" }} />
            <span> Marketing</span>
          </p>
          <p className="text">
            {/* Placeholder text for the service */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Service Block 4 */}
        <div>
          <p className="logo">
            <FaPencilAlt size={60} style={{ color: "green" }} />
            <span> Web Design</span>
          </p>
          <p className="text">
            {/* Placeholder text for the service */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Service Block 5 */}
        <div>
          <p className="logo">
            <FaBox size={60} style={{ color: "green" }} />
            <span> Packaging Design</span>
          </p>
          <p className="text">
            {/* Placeholder text for the service */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Service Block 6 */}
        <div>
          <p className="logo">
            <FaCode size={60} style={{ color: "green" }} />
            <span> Web Development</span>
          </p>
          <p className="text">
            {/* Placeholder text for the service */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
