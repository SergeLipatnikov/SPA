import React from "react";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";

import "./style.sass";
import Main from "./Components/Main/Main";
import Contacts from "./Components/Contacts/Contacts";


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Contacts/>

      
    </div>
  );
}

export default App;
