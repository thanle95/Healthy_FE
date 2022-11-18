import { Dispatch, MouseEventHandler, useContext } from "react";
import { MenuContext } from "../../providers/MenuProvider";
import CloseIcon from "../icons/CloseIcon";
import MenuItem from "../MenuItem";
import "./style.css";

const Menu = () => {
  const context = useContext(MenuContext);
  return (
    <div className={`menu-list ${context.visible ? "" : "hidden"}`}>
      <div className="close-icon">
        <button
          onClick={() => {
            context.hidden();
          }}
        >
          <CloseIcon />
        </button>
      </div>
      <MenuItem title="自分の記録" />
      <MenuItem title="体重グラフ" />
      <MenuItem title="目標" />
      <MenuItem title="選択中のコース" />
      <MenuItem title="コラム一覧" />
      <MenuItem title="設定" />
    </div>
  );
};
export default Menu;
