import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import LifeBalance from "./components/LifeBalance"; 


function LayoutWithNav() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}


function LayoutNoNav() {
  return <Outlet />;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
         
          <Route element={<LayoutWithNav />}>
            <Route path="/" element={<HeroSection />} />
          </Route>
          
         
          <Route element={<LayoutNoNav />}>
            <Route path="/lifebalance" element={<LifeBalance />} />
            <Route path="/" element={<LifeBalance />} /> 
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
