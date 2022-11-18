import { Button } from "antd";
import { createContext, ReactNode, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../../providers/MenuProvider";

import Menu from "../Menu";
import "./style.css";

interface PropsNavigationButton {
  title: string;
  icon?: ReactNode | undefined;
  router: string;
  isMenu?: boolean;
}

const NavigationButton = ({
  title,
  icon,
  router,
  isMenu = false,
}: PropsNavigationButton) => {
  const context  = useContext(MenuContext)
  if (isMenu)
    return (
      <button
        className={`btn-menu`}
        onClick={()=> context.show()}
      >
        {icon}

        <div className="menu">
          <Menu />
        </div>
      </button>
    );
  return (
    <Link to={router}>
      <Button type="text" icon={icon}>
        {title}
      </Button>
    </Link>
  );
};
export default NavigationButton;
