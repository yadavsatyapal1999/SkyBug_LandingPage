import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';


// Nav Bar

export default function Nav() {

    return <div id="outerNav">
        <div id="expand">Click Me</div>
        <div id="view">
            <span>
                <FaLaptopCode size={40} />
            </span>
            <span>
                <FaMobileAlt size={40} />
            </span>
            <span>
                <FaMobileAlt size={40} />
            </span>
            <span>
                <FaTimes size={40} />
            </span>
        </div>
    </div>

}