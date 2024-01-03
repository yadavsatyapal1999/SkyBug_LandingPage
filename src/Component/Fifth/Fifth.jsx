

import "./fifth.css";
import React from 'react';
import { FaAmazon, FaGoogle, FaMicrosoft, FaInstagram, FaFacebook, FaApple, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from "react";



export default function Fifth() {

    const [state,Setstate] = useState()

    return <div id="fifth">
        <div className="head">
            <p id="client" >OUR CLIENT</p>
            <h2>Glint has be honored to be partner up with these clients</h2>
        </div>
        <div className="images">
            <FaAmazon size={60} color="orange" />
            <FaGoogle size={60} color="blue" />
            <FaMicrosoft size={60} color="green" />
            <FaFacebook size={60} color="blue" />
            <FaApple size={60} color="black" />
            <FaGithub size={60} color="black" />
            <FaTwitter size={60} color="blue" />
            <FaLinkedin size={60} color="blue" />
            <FaInstagram size={60} color="red" />

        </div>
        <div className="textfifth" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
    </div>

}