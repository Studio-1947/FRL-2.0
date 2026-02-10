import "./LifeBalance3.css";
import DarkVeil from "./DarkVeil";

function LifeBalance3() {
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
        ></div>
      </div>
    </>
  );
}

export default LifeBalance3;
