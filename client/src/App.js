import React from 'react'
import Nav from "./components/Navbar/Nav";
import Heading from "./components/Heading/Heading";
import Speciality from "./components/Speciality/Speciality";
import Services from "./components/Services/Services";
import Review from './components/Reviews/Review';
import Form from './components/Form/Form';
import About from './components/About/About'
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom'
import Gallery from './components/Gallery/Gallery';
function App() {
  return (
    <div className="App">
      <Route path='/gallery'>
        <Gallery />
      </Route>
      <Route exact path='/'>
        <Nav />
        <Heading />
        <About />
        <Services />
        <Speciality />
        <Review />
        <Form />
        <Footer />
      </Route>

    </div>
  );
}

export default App;
