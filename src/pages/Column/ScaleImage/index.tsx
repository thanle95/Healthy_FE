import { Image } from "antd";
import "./style.css";
interface PropsNavigationButton {
  img: string;
  text: string;
  description: string;
  tag: string;
  onClick?: React.MouseEventHandler<HTMLElement> | undefined;
}
const ScaleImage = ({
  img,
  text,
  description,
  tag,
  onClick,
}: PropsNavigationButton) => {
  return (
    <div className="scale-image">
      <div className="scale-image-image" onClick={onClick}>
        <img src={img}></img>
        <span className="text">{text}</span>
      </div>
      <p className="description">{description}</p>
      <span className="tag">{tag}</span>
    </div>
  );
};
export default ScaleImage;
