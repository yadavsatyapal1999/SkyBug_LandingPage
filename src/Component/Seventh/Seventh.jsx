// Importing the styles from the "seventh.css" file
import "./seventh.css";

// Defining a functional component named "Sventh"
export default function Sventh({targetRefs}) {
  // Returning JSX for the component
  return (
    <div id="seventh"  ref={targetRefs} >
      {/* First section */}
      <div id="seventhfirst">
        <h2>Glint.</h2>
        <p>
          Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt
          nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec,
          egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh
          pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor
          accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.
        </p>
      </div>

      {/* Second section */}
      <div id="seventhsecond">
        <h3>Get Notified</h3>
        <p>
          Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut
          non alias sed quia.Ut itaque enim optio ut excepturi deserunt iusto
          porro.
        </p>
        {/* Input section with a form */}
        <p className="input">
          <input type="text" placeholder="Email Address" />
          <button type="submit">SUBMIT</button>
        </p>
      </div>
    </div>
  );
}
