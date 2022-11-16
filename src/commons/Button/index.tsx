import "./style.css";
interface PropsNavigationButton {
  title: string;
  onClick?: React.MouseEventHandler<HTMLElement> | undefined;
}
const Button = ({ title, onClick }: PropsNavigationButton) => {
  return (
    <button className="btn" onClick={onClick}>
      {title}
    </button>
  );
};
export default Button;
