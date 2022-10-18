import React from 'react'
import Nav from "./components/Navbar/Nav";
import Heading from "./components/Heading/Heading";
import Speciality from "./components/Speciality/Speciality";
import Services from "./components/Services/Services";
import Review from './components/Reviews/Review';
import Form from './components/Form/Form';
import About from './components/About/About'
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Nav />
      <Heading />
      <About />
      <Services />
      <Speciality />
      <Review />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
