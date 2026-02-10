import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import LifeBalance from "./components/LifeBalance"; 
import LifeBalance2 from "./components/LifeBalance2";
import LifeBalance3 from "./components/LifeBalance3";


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
            <Route path="/lifebalance2" element={<LifeBalance2 />} />
            <Route path="/lifebalance3" element={<LifeBalance3 />} />
            
          </Route>
        </Routes>
      </div>
    </Router>
  );
}


export default App;
