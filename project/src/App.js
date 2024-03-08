import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
    <nav>
    <Link to = "/"> Home </Link>
    <Link to = "/about"> About </Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </div>
  );
}

export default App;
//Routes 안에 어떤 컴포넌트를 정의해서 보여줄지 결정할 수 있음
// Link -> Route -> element 
// <Link to = "/"> 는 <a href = "/" > 와 같음