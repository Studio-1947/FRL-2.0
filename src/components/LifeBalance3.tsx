import "./LifeBalance3.css";
import DarkVeil from "./DarkVeil";
import { useNavigate } from "react-router-dom";

function LifeBalance3() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  const handleExploreNow = () => {
    navigate("/lifebalance3");
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
          <div className="main-sec">
            <div className="Lb-div1">
              {/* Desktop CTA */}
              <div className="back-btn">
                <button onClick={handleBack}>
                  <img src="assets/leftarr.png" width="20" height="20" />
                </button>
              </div>
              <div className="text-div">
                <h1>Where Are You From?</h1>
                <div className="countryzip">
                 
                  <select id="countrySelect">
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
                 
                  <select id="zipSelect" >
                    <option value="">Select country first </option>
                  </select>
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
            <div className="rightdiv"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LifeBalance3;
