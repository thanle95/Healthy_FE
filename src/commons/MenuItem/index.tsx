import "./style.css";
interface PropsNavigationButton {
  title: string;
  onClick?: React.MouseEventHandler<HTMLElement> | undefined;
}
const MenuItem = ({ title, onClick }: PropsNavigationButton) => {
  return (
    <button className="menu-item" onClick={onClick}>
      {title}
    </button>
  );
};
export default MenuItem;
