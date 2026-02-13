import "./LifeBalance8.css";
import DarkVeil from "./DarkVeil";
import { useNavigate } from "react-router-dom";
import PointTracker from "./PointTracker";

function LifeBalance8() {
  const navigate = useNavigate();
  

  const handleBack = () => navigate(-1);
  const handleExploreNow = () => navigate("/lifebalance9");

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
          <div className="main-sec1">
            <div className="md-cta">
              <button onClick={handleBack}>
                <img src="assets/leftarr.png" alt="" id="leftarr" />
              </button>
            </div>

            <div className="leftdiv">
              <div className="back-btn">
                <button onClick={handleBack}>
                  <img src="assets/leftarr.png" width="20" height="20" />
                </button>
              </div>

              <div className="text-div">
                <h1>
                 How Satisfied Are You <br /> With Romance In your <br /> Life Right Now?
                </h1>
                <p>Rate your level of satisfaction from 0.00 to 1.00</p>

                <div
                  style={{ margin: "2rem 0", width: "100%", maxWidth: "420px" }}
                >
                  <PointTracker/>
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
              <img src="/assets/circle6.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LifeBalance8;
