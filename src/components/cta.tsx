import "./cta.css";
import type { CSSProperties } from "react";

interface CTAProps {
  name?: string;
  icon?: string;
  variant?: "light" | "dark"; 
  style?: CSSProperties; 
  onClick?: () => void;
}

const getVariantStyle = (variant?: string): CSSProperties => {
  const darkstyle: CSSProperties = {
    border: "1px solid transparent",
    borderRadius: "32px",
    width: "auto",
    maxWidth: "199px",
    height: "67px",
    marginLeft: "20px",
    color: "white",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    paddingLeft: "22px",
  };

  const lightstyle: CSSProperties = {
    backgroundColor: "#eefcfd",
    border: "none",
    borderRadius: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "15px 22px",
    width: "auto",
    minWidth: "146px",
    height: "67px",
  };

  switch (variant) {
    case "dark":
      return darkstyle;
    case "light":
      return lightstyle;
    default:
      return {};
  }
};

const CTA = ({ name, icon, variant, style, onClick }: CTAProps) => {
  const variantStyle = getVariantStyle(variant);
  const buttonStyle: CSSProperties = { ...variantStyle, ...style };

  return (
    <div className="press1">
      <button style={buttonStyle} onClick={onClick}>
        <div className="name">{name}</div>
        <div className="userIcon">
          <img src={icon} alt={name} />
        </div>
      </button>
    </div>
  );
};

export default CTA;
