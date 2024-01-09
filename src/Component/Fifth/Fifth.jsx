

import "./fifth.css";
import React from 'react';
import { FaAmazon, FaGoogle, FaMicrosoft, FaInstagram, FaFacebook, FaApple, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from "react";



export default function Fifth() {
    const array = [<FaAmazon className="icon" size={60} />, <FaGoogle className="icon" size={60}  />, <FaMicrosoft className="icon" size={60}  />, <FaFacebook className="icon"  size={60} />, <FaApple className="icon" size={60}  />, <FaGithub className="icon" size={60}  />, <FaTwitter className="icon" size={60}  />, <FaLinkedin className="icon" size={60}   />, <FaInstagram className="icon" size={60}  />]

    console.log(array.length)
    const [state, Setstate] = useState(0)
    return <div id="fifth">
        <div className="head">
            <p id="client" >OUR CLIENT</p>
            <h2>Glint has be honored to be partner up with these clients</h2>
        </div>
        <div className="images">

            {array.map((obj, index) => {
                return <>{index >= state && index <= state + 4 ? <span key={index} >{obj}</span> : <></>}</>
            })}
            <div >
                <button className="btn" onClick={() => {
                    Setstate(0)
                }} >.</button>
                <button className="btn" onClick={() => {
                    Setstate(1)
                }}>.</button>
                <button className="btn" onClick={() => {
                    Setstate(2)
                }} >.</button>
                <button className="btn" onClick={() => {
                    Setstate(3)
                }} >.</button>
                <button className="btn" onClick={() => {
                    Setstate(4)
                }} >.</button>

            </div>
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