import { useNavigate } from "react-router-dom";
import "./LifeBalance.css";
import CTA from "./cta";
import danceImage from '../assets/dance.png'; 

function LifeBalance() {
     const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/lifebalance");
  };
  return (
    <>
    <div className="main-sec">
      <div className="Lb-div1">
        <div className="back-btn">
          <a href="/">
           <img src="/assets/leftarr.png" width={32} height={32}/>
          </a>
        </div>
        <div className="text-div">
          <h1>Life Balance Wheel</h1>
          <p>
            The Life Balance Wheel Tool will help to raise awareness and create
            insight into your internal and external environments. It will give
            you a picture of what is going on in your life, both externally (at
            home, work, with your friends, in relationships) and internally
            (your own inner language, how you feel about a situation). This
            powerful tool will allow you to evaluate eight areas of your life
            and create awareness around changes that you may want to or need to
            make in.
          </p>
          <div className="ctacontent">
                <CTA
                  variant="light" 
                  name="Explore Now"
                  icon="assets/rightarrow.png"
                  onClick={handleExploreClick}
                />
          </div>
        </div>
      </div>
      <div className="Lb-div2">
        <div className="img-div">
              <div className="animated-girl">
        <img src={danceImage} alt="Balancing girl"  />
      </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default LifeBalance;
