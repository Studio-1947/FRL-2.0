import "./LifeBalance.css";
import danceImage from "../assets/dance.png";
import DarkVeil from "./DarkVeil";

function LifeBalance() {
  return (
    <div style={{ width: '100%', minHeight: '100vh' , position: 'relative' }}>
      <DarkVeil 
        hueShift={0} 
        noiseIntensity={0} 
        scanlineIntensity={0} 
        speed={3} 
        scanlineFrequency={0} 
        warpAmount={0} 
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
         
        <div className="main-sec">
          <div className="md-cta">
          <button>
            <img src="assets/leftarr.png" alt="" id="leftarr" />
          </button>
        </div>
          <div className="Lb-div1">
            <div className="back-btn">
              <a href="/">
                <img src="assets/leftarr.png" width="20" height="20" />
              </a>
            </div>
            <div className="text-div">
              <h1>Life Balance Wheel</h1>
              <p>
                The Life Balance Wheel Tool will help to raise awareness and create insight into your internal and external environments. It will give you a picture of what is going on in your life, both externally at home, work, with your friends, in relationships and internally your own inner language, how you feel about a situation. This powerful tool will allow you to evaluate eight areas of your life and create awareness around changes that you may want to or need to make in.
              </p>
              <div className="ctacontent">
                <button>
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
