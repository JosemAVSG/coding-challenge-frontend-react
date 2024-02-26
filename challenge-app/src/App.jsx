import "./App.css";
import React from "react";
import Bootstrap from "./components/nav";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Bootstrap></Bootstrap>
      <br></br>
      <Search></Search>
    </div>
  );
}

export default App;
