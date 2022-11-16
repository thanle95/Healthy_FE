import "./style.css";
import icon from '../../assets/icon_back_to_top.png'
import Icon from "../icons/Icon";
import {Image} from 'antd'
interface PropsNavigationButton {
  onClick?: React.MouseEventHandler<HTMLElement> | undefined;
}
const BackToTopButton = ({  onClick }: PropsNavigationButton) => {
  return (
    <button className=" back-to-top" onClick={onClick}>
      <Image
        src={icon}
        preview={false}
    ></Image>
    </button>
  );
};
export default BackToTopButton;
