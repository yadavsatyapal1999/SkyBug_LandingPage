
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';




export default function Menu({scrollToRef}) {

    // menu icon 
    const [show, Setshow] = useState(false);

  

    return <div id='menusticky'>
        <div onClick={() => {
            Setshow(!show)
        }} >   Menu   <span> <FaBars size={20} />  </span>
        </div>
        <br />
        {show ? <div className='list' >
            <button onClick={scrollToRef(0)} >Home</button>
            <li>Milestone</li>
            <li>Experties</li>
            <li>Recent Project</li>
            <li>Customer</li>
            <button onClick={scrollToRef(1)}>Contact Us</button>
            <li>About Us</li>
        </div> : <></>}
    </div>


}