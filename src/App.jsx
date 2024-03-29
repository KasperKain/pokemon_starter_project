import "./App.css";
import Nav from "./components/Nav/Nav";

//#region Page Imports

import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import Single from "./pages/Single/Single";
import About from "./pages/About/About";

//#endregion

import { Route, Routes } from "react-router-dom";

//#region Functional Component
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/display" element={<Single />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

//#endregion

export default App;
