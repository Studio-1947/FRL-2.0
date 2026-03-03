import "./LifeBalance3.css";
import DarkVeil from "./DarkVeil";
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';

function LifeBalance3() {
  const countryRef = useRef<HTMLSelectElement>(null);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  
  const handleExploreNow = () => {
    navigate("/lifebalance4");
  };

  return (
    <>
      <div style={{ width: "100%", minHeight: "100vh", position: "relative" }}>
        <DarkVeil
          hueShift={45}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={3}
          scanlineFrequency={0}
          warpAmount={0}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* Content */}
            <div className="md-cta">
            <button onClick={handleBack}>
              <img src="assets/leftarr.png" alt="" id="leftarr" />
            </button>
          </div>
          <div className="main-sec1">
            <div className="leftdiv">
              {/* Desktop CTA */}
              <div className="back-btn">
                <button onClick={handleBack}>
                  <img src="assets/leftarr.png" width="20" height="20" />
                </button>
              </div>
              <div className="text-div" id="where">
                <h1>Where Are You From?</h1>
               
                
                {/* Updated Country + ZIP Text Input */}
                <div className="countryzip">
                  <select 
                    id="countrySelect" 
                    ref={countryRef}
                    defaultValue=""
                  >
                    <option value="">Select your country</option>
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Japan">Japan</option>
                    <option value="Brazil">Brazil</option>
                    <option value="China">China</option>
                  </select>
                  
                  {/* ZIP Text Input - Same styling as dropdown */}
                  <input
                    type="text"
                    id="zipInput"
                    placeholder="PIN / ZIP Code"
                    maxLength={10}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      fontSize: '16px',
                      fontWeight: '500',
                      color: 'white',
                      background: 'transparent',
                      border: '2px solid white',
                      borderRadius: '12px',
                      outline: 'none'
                    }}
                  />
                </div>
                

                <div className="ctacontent">
                  <button onClick={handleExploreNow}>
                    Next
                    <img
                      src="assets/rightarrow.png"
                      alt=""
                      width="20"
                      height="20"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="rightdiv">
              <img src="/assets/circle2.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LifeBalance3;
