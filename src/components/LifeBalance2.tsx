import "./LifeBalance2.css";
import danceImage from "../assets/dance.png";
import DarkVeil from "./DarkVeil";
import { useNavigate } from "react-router-dom";

function LifeBalance2() {
    const navigate = useNavigate();

const handleBack = () => {
  navigate(-1);
};
const handleExploreNow = () => {
  navigate("/lifebalance3");
};
  return (
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
        <div className="main-sec">
            {/* mobile cta */}
          <div className="md-cta">
            <button onClick={handleBack}>
              <img src="assets/leftarr.png" alt="" id="leftarr" />
            </button>
          </div>
          <div className="Lb-div1">
            {/* Desktop CTA */}
            <div className="back-btn">
              <button onClick={handleBack}>
                <img src="assets/leftarr.png" width="20" height="20" />
              </button>
            </div>
            <div className="text-div">
              <h1>Life Balance Wheel</h1>
              <p>
                This is a subjective assessment. It is not about how your family
                or colleagues or neighbors see you. It is not about success. It
                is about your personal satisfaction at this point in life.
                Choose your answers quickly, without giving much thought to
                them. <br /><br />Please note, we will not record your responses other than
                the country of your residence and your PIN / ZIP code. So, be
                honest to yourself. After answering all 8 questions, you can
                download a snapshot of your responses today.
              </p>
              <div className="ctacontent">
                <button onClick={handleExploreNow}>
                  Let's Go
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

export default LifeBalance2;
