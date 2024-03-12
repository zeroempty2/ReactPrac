import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Input2 from "./pages/Input2";
import List from "./pages/List";

function App() {
  return (
    <div className="App">
    <nav>
    <Link to = "/"> Home </Link> | <Link to = "/about"> About </Link> | <Link to = "/counter"> Counter </Link> | 
    <Link to = "/input"> Input </Link> | <Link to = "/input2"> Input2 </Link> | <Link to = "/list"> List </Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/input" element={<Input />} />
      <Route path="/input2" element={<Input2 />} />
      <Route path="/list" element={<List />} />
    </Routes>
    </div>
  );
}

export default App;

//Routes 안에 어떤 컴포넌트를 정의해서 보여줄지 결정할 수 있음
// Link -> Route -> element 
// <Link to = "/"> 는 <a href = "/" > 와 같음