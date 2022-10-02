import Nav from "./components/Navbar/Nav";
import Heading from "./components/Heading/Heading";
import About from "./components/About/About";
import Service from "./components/Services/Service/Service";
function App() {
  return (
    <div className="App">
      <Nav />
      <Heading />
      <About />
      <Service />
    </div>
  );
}

export default App;
