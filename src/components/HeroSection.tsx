import { useNavigate } from "react-router-dom";
import "./HeroSection.css";
import ImageCard from "./ImageCard";
import CTA from "./cta";

function HeroSection() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/lifebalance");
  };
  return (
    <>
      <div className="hero-sec">
        <div className="lefthero">
          {/* card content */}
          <div className="hero-content">
            <ImageCard
              image="./assets/cardimg1.png"
              border="Notice Board"
              head="Featured Member"
              click="Click here to know more"
            />
            <ImageCard
              image="./assets/cardimg2.png"
              border="Notice Board"
              head="What's New in FRL"
              click="Click here to know more"
            />
          </div>
          {/* para content */}
          <div className="hero-content2">
            <h1>Co-Creating A Harmonious Thriving Future</h1>
            <p>
              The Forum for Responsible Living (FRL) is a safe space for members
              to explore how each of us can contribute towards healing
              ourselves, local communities and ecosystems.
            </p>
            <p>
              FRL supports members to explore fresh perspectives on themselves
              and the systems that influence social, ecological and economic
              (SEE) challenges that concern them the most – helping them to
              emerge as change-makers who are systems aware & guided by
              universal values.
            </p>
          </div>
          {/* buttons */}
          <div className="hero-content3">
            <CTA
              variant="light" // Cleaner than passing full style object
              name="Login"
              icon="assets/user2.png" // Relative path for public/assets/
            />
            <CTA variant="dark" name="Play Video" icon="assets/play.png" />
          </div>
        </div>
        <div className="righthero">
          <div className="hero-content4">
            <img src="/assets/grey.jpg" alt="Hero background" />
            <div className="bottomcontent">
              <h1>Experience Life Balance Tool</h1>
              <p>
                No matter where we are from and what we do, there are universal
                values that we share. This magical reality can help us to
                co-create ecosystems of knowledge. One way to begin is to
                consciously prioritize personal & planetary well-being. Change
                begins with you, visualize all the important areas of your life
                at once, and become aware of how fulfilled you feel in each
                area.
              </p>
              <div className="ctacontent">
                <CTA
                  variant="light" // Consistent variant usage
                  name="Explore Now"
                  icon="assets/rightarrow.png"
                  onClick={handleExploreClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
