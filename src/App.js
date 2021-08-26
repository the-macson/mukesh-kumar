import './App.css';
// import Navbar from "./Components/Navbar";
import Head1 from "./Components/Head1.js";
import Service from './Components/Service';
import Skill from './Components/Skill';
import Project from './Components/Project';
import Contact from './Components/Contact'
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Head1/>
      <Service/>
      <Skill/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
