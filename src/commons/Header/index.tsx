import { AppRouter } from "../../App";
import BadgeButton from "../BadgeButton";
import ChallengeIcon from "../icons/ChallengeIcon";
import MenuIcon from "../icons/MenuIcon";
import MyRecordIcon from "../icons/MyRecordIcon";
import NewsIcon from "../icons/NewsIcon";
import Logo from "../Logo";
import Menu from "../Menu";
import NavigationButton from "../NavigationButton";
import "./style.css";


function Header() {
  return (
    <div className="header">
      <div className="container">
        <Logo />
        <div className="header-right">
          <NavigationButton
            title="自分の記録"
            icon={<MyRecordIcon />}
            router={AppRouter.TopMyPage}
          />
          <NavigationButton
            title="チャレンジ"
            icon={<ChallengeIcon />}
            router={AppRouter.MyRecord}
          />
          <NavigationButton
            title="お知らせ"
            icon={<BadgeButton count={1} icon={<NewsIcon />} />}
            router={AppRouter.Column}
          />

          <NavigationButton title="" icon={<MenuIcon />}   router={""} isMenu />
        </div>
      </div>
    </div>
  );
}
export default Header;
