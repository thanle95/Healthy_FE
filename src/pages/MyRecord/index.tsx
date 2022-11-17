
import r1Img from "../../assets/photoes/MyRecommend-1.jpg";
import r2Img from "../../assets/photoes/MyRecommend-2.jpg";
import r3Img from "../../assets/photoes/MyRecommend-3.jpg";
import Button from "../../commons/Button";
import BodyRecord from "./BodyRecord";
import Category from "./Category";
import MyExercise from "./MyExercise";
import "./style.css";
function MyRecord() {
  return (
    <div className="my-record container">
      <div className="categories ">
      <Category title="BODY RECORD" subTitle="自分のカラダの記録" img={r1Img} />
      <Category title="MY EXERCISE" subTitle="自分の運動の記録" img={r2Img} />
      <Category title="MY DIARY" subTitle="自分の日記" img={r3Img} />
      </div>
      <BodyRecord/>
      <MyExercise/>
      <div className="bottom container">
      </div>
      <Button title='記録をもっと見る'/>
    </div>
  );
}
export default MyRecord;
