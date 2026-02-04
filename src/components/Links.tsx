import "./Links.css"

interface linksProps{
    name:string;
}

const links = ({name}: linksProps) => {
  return (
    <div>
        <a href="">{name}</a>
    </div>
  );
};

export default links;