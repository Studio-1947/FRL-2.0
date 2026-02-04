import "./ImageCard.css";

interface ImageCardProps {
  image: string;
  border: string;
  head: string;
  click: string;
}

const ImageCard = ({ image, border, head, click }: ImageCardProps) => {
  return (
    <>
      <div className="cardborder">
        <div className="cardimg">
          <img src={image} id="cardimg" />
        </div>
        <div className="border">{border}</div>
        <div className="head">{head}</div>
        <div className="click">{click}</div>
      </div>
    </>
  );
};

export default ImageCard;
