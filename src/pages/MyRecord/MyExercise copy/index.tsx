import Item from "./Item";
import "./style.css";
const MyDiary = () => {
  return (
    <div className="diary" >
      <div className="top">
        <span className="title">MY EXERCISE</span>
      </div>
      <div className="diary-list">
        {[...new Array(8).fill(0).map((x, index)=> <Item key={index}/>)]}
      </div>
    </div>
  );
};
export default MyDiary;
