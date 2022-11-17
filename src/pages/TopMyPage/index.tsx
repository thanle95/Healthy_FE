import ThumbnailPart from "./ThumbnailPart";
import m01Icon from "../../assets/photoes/m01.jpg";
import l03Icon from "../../assets/photoes/l03.jpg";
import d01Icon from "../../assets/photoes/d01.jpg";
import l01Icon from "../../assets/photoes/l01.jpg";
import l02Icon from "../../assets/photoes/l02.jpg";
import d02Icon from "../../assets/photoes/d02.jpg";
import s01Icon from "../../assets/photoes/s01.jpg";
import knifeIcon from "../../assets/icon_knife.png";
import cupIcon from "../../assets/icon_cup.png";
import mainGraph from "../../assets/photoes/main_graph.png";
import "./style.css";
import HexagonButton from "../../commons/HexagonButton";
import Button from "../../commons/Button";
function TopMyPage() {
  return (
    <div className="top-my-page container">
      <div className="top ">
        <div className="main-photo">
            <img src={d01Icon}/>
            {/* <div className="content c100 c75">
                <span className="left">05/21</span>
                <span className="right">75%</span>
            </div> */}
        </div>
        <div className="main-graph">
        <img src={mainGraph}/>
        </div>
      </div>
      <div className="center container">
        <HexagonButton title="Morning" icon={knifeIcon} />
        <HexagonButton title="Lunch" icon={knifeIcon} />
        <HexagonButton title="Dinner" icon={knifeIcon} />
        <HexagonButton title="Snack" icon={cupIcon} />
      </div>
      <div className="bottom container">
        <ThumbnailPart text="05.21.Morning" img={m01Icon} />
        <ThumbnailPart text="05.21.Lunch" img={l03Icon} />
        <ThumbnailPart text="05.21.Dinner" img={d01Icon} />
        <ThumbnailPart text="05.21.Snack" img={l01Icon} />
        <ThumbnailPart text="05.20.Morning" img={m01Icon} />
        <ThumbnailPart text="05.20.Lunch" img={l02Icon} />
        <ThumbnailPart text="05.20.Dinner" img={d02Icon} />
        <ThumbnailPart text="05.20.Snack" img={s01Icon} />
      </div>
      <Button title='記録をもっと見る'/>
    </div>
  );
}
export default TopMyPage;
