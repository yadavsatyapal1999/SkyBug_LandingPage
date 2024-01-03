
import React from 'react';
import { FaBars } from 'react-icons/fa';


export default function First() {

    return <div id="first">
        <div id='menu' >
            <div id='glint' >Glint</div>
            <div id='menusticky' >   Menu   <span> <FaBars size={20} />  </span>  </div>
        </div>
        <div>

            <h4>
                <p>Welcome to Glint</p>
                We are creative group of people
                who design influential brands
                and digital experiences.
            </h4>
            <div>
                <button>Start a Project</button>
                <button>About Us</button>
            </div>
        </div>

    </div>
}