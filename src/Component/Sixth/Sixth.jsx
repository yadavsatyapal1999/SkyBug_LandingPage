


import "./sixth.css";

export default function Sixth() {

    return <div id="sixth">

        <div id="center" >
            <p className="green">CONTACT US</p>
            <h1>
                Reach out for a new project or just say hello.
            </h1>
        </div>
        <div className="form" >
            <div className="message">
                <p>SEND US MESSAGE</p>
                <input type="text" placeholder="Your Name" /> <br />
                <input type="email" placeholder="Your Email" /> <br />
                <input type="text" placeholder="Subject" /> <br />
                <textarea name="Message" id="" cols="30" rows="10">
                    Message
                </textarea>  <br />
                <button> SUBMIT </button>
            </div>
            <div>
                <p className="green" >CONTACT INFO</p>
                <div>
                    <p>WHERE TO FIND US</p>
                    <p>1600 Amphitheatre Parkway
                        Mountain View, CA
                        94043 US</p>
                </div>
                <div>
                    <p className="green" >Email us At</p>
                    <p>
                        contact@glintsite.com
                        <br />
                        info@glintsite.com
                    </p>
                </div>
                <div>
                    <p className="green" >Call Us At</p>
                    <p>
                        Phone: (+63) 555 1212 <br />
                        Mobile: (+63) 555 0100 <br />
                        Fax: (+63) 555 0101
                    </p>
                </div>

            </div>
        </div>
    </div>

}