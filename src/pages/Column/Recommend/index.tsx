import { Image } from "antd";
import "./style.css";
interface PropsNavigationButton {
  title: string;
  subTitle: string;
  onClick?: React.MouseEventHandler<HTMLElement> | undefined;
}
const Recommend = ({

  title,
  subTitle,
  onClick,
}: PropsNavigationButton) => {
  return (
    <div className="recommend" onClick={onClick}>
      <span className="title">{title}</span>
      <div className="line"></div>
      <span className="sub-title">{subTitle}</span>
    </div>
  );
};
export default Recommend;
