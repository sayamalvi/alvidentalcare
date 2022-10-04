import React from 'react'
import Nav from "./components/Navbar/Nav";
import Heading from "./components/Heading/Heading";
import About from "./components/About/About";
import Services from "./components/Services/Services";
function App() {
  return (
    <div className="App">
      <Nav />
      <Heading />
      <About />
      <Services />
    </div>
  );
}

export default App;
