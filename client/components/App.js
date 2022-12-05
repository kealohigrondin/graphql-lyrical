import React from "react";
import { Link } from "react-router";

function App({ children }) {
  return (
    <div className="container">
      <Link to="/">
        <h3>Lyrical</h3>
      </Link>
      {children}
    </div>
  );
}
export default App;
