import React from 'react'
import Nav from "./components/Navbar/Nav";
import Heading from "./components/Heading/Heading";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Review from './components/Reviews/Review';
function App() {
  return (
    <div className="App">
      <Nav />
      <Heading />
      <About />
      <Services />
      <Review />
    </div>
  );
}

export default App;
