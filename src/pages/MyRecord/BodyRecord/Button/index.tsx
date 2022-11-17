import "./style.css";
interface PropsNavigationButton {
  title: string;
  isPrimary?: boolean
  onClick?: React.MouseEventHandler<HTMLElement> | undefined;
}
const Button = ({ title, isPrimary,  onClick }: PropsNavigationButton) => {
  return (
    <button className={`body-record-btn ${isPrimary? "primary": ""}`} onClick={onClick}>
      {title}
    </button>
  );
};
export default Button;
