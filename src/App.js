import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import initializeAuthentication from "./Firebase/firebase.init";


initializeAuthentication();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
