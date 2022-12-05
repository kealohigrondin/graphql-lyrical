import React from "react";
import SongList from "./SongList";

function App({ children }) {
  return (
    <div className="container">
      <h3>Lyrical</h3>
      {children}
    </div>
  );
}
export default App;
