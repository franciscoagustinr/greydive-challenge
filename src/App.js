import { Routes, Route, Link, BrowserRouter, NavLink } from "react-router-dom";
import "./App.css";
import { Home } from "./COMPONENTS/Home";
import { Error } from "./COMPONENTS/Error";
import { TestCliente } from "./COMPONENTS/TestCliente";

function App() {
  return (
    <BrowserRouter id='App' className=''>

        {/* TEST CHANLLENGE  */}
        <h1 className="text-[3rem] text-white hover:text-sky-500 transition-all duration-300">
          <Link to="/" className="flex flex-col items-center content-center mt-4">
            Data test 🔭
          </Link>
        </h1>



      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<TestCliente />} />
        <Route path="/test/:testCliente/" element={<TestCliente />} />
        <Route path="*" element={<Error />} />
      </Routes>

        
    </BrowserRouter>
  );
}

export default App;
