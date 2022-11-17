import { Image } from "antd";
import "./style.css";
interface PropsNavigationButton {
  img: string;
  title: string;
  subTitle: string;
  onClick?: React.MouseEventHandler<HTMLElement> | undefined;
}
const Category = ({ img, title, subTitle, onClick }: PropsNavigationButton) => {
  return (
    <div className="category" onClick={onClick}>
      <img className="category-img" src={img}>
       
      </img>
      <div className="cover"></div>
      <div className="category-content"> <span className="title">{title}</span>
        <span className="sub-title">{subTitle}</span></div>
    </div>
  );
};
export default Category;
