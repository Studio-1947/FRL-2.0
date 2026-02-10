import "./LifeBalance.css";
import danceImage from "../assets/dance.png";
import DarkVeil from "./DarkVeil";
import "./LifeBalance2";
import { useNavigate } from "react-router-dom";

function LifeBalance() {
  const navigate = useNavigate();

const handleExploreNow = () => {
  navigate("/lifebalance2");
};
const handleBack = () => {
  navigate(-1);
}


  return (
    <div style={{ width: '100%', minHeight: '100vh' , position: 'relative' }}>
      <DarkVeil 
        hueShift={45} 
        noiseIntensity={0} 
        scanlineIntensity={0} 
        speed={3} 
        scanlineFrequency={0} 
        warpAmount={0} 
      />
      <div style={{ position: 'relative', zIndex: 1 , display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
         
        <div className="main-sec">
          <div className="md-cta">
            {/* mobile CTA */}
          <button onClick={handleBack}>
            <img src="assets/leftarr.png" alt="" id="leftarr" />
          </button>
        </div>
          <div className="Lb-div1">
            <div className="back-btn">
              <button onClick={handleBack}>
                <img src="assets/leftarr.png" width="20" height="20" />
              </button>
            </div>
            <div className="text-div">
              <h1>Life Balance Wheel</h1>
              <p>
                The Life Balance Wheel Tool will help to raise awareness and create insight into your internal and external environments. It will give you a picture of what is going on in your life, both externally at home, work, with your friends, in relationships and internally your own inner language, how you feel about a situation. This powerful tool will allow you to evaluate eight areas of your life and create awareness around changes that you may want to or need to make in.
              </p>
              <div className="ctacontent">
                <button onClick={handleExploreNow}>
                  Explore Now
                  <img src="assets/rightarrow.png" alt="" width="20" height="20" />
                </button>
              </div>
            </div>
          </div>
          <div className="Lb-div2">
            <div className="img-div">
              <div className="animated-girl">
                <img src={danceImage} alt="Balancing girl" />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default LifeBalance;
