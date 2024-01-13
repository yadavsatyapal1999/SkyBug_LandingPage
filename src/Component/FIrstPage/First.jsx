import React  from "react"
import { useRef } from "react"
import  { useEffect } from 'react';


// First Page contain company name  and another two button
export default function First() {




    return <div id="first"  >

        <div id='menu' >
            <div id='glint' >Glint</div>

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