import { Image } from "antd";
import { ReactNode } from "react";
import "./style.css";
interface PropsNavigationButton {
  title: string;
  icon: string | undefined;
  onClick?: React.MouseEventHandler<HTMLElement> | undefined;
}
const HexagonButton = ({ title, icon, onClick }: PropsNavigationButton) => {
  return (
    <div className="hex" onClick={onClick}>
      <Image width={53} height={45} src={icon} preview={false}></Image>
      <span className="hex-title">{title}</span>
    </div>
  );
};
export default HexagonButton;
