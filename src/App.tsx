import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import LifeBalance from "./components/LifeBalance"; 
import LifeBalance2 from "./components/LifeBalance2";
import LifeBalance3 from "./components/LifeBalance3";
import LifeBalance4 from "./components/LifeBalance4";
import LifeBalance5 from "./components/LifeBalance5";
import LifeBalance6 from "./components/LifeBalance6";
import LifeBalance7 from "./components/LifeBalance7";


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
            <Route path="/lifebalance4" element={<LifeBalance4 />} />
            <Route path="/lifebalance5" element={<LifeBalance5 />} />
            <Route path="/lifebalance6" element={<LifeBalance6 />} />
            <Route path="/lifebalance7" element={<LifeBalance7 />} />
            
          </Route>
        </Routes>
      </div>
    </Router>
  );
}


export default App;
