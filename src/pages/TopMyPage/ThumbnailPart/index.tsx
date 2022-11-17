import { Image } from "antd";
import "./style.css";
interface PropsNavigationButton {
  img: string;
  text: string ;
  onClick?: React.MouseEventHandler<HTMLElement> | undefined;
}
const ThumbnailPart = ({ img, text, onClick }: PropsNavigationButton) => {
  return (
    <div className="thumbnail-part" onClick={onClick}>
      <img src={img} ></img>
      <span className="text">{text}</span>
    </div>
  );
};
export default ThumbnailPart;
