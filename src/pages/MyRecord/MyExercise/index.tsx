import mainGraph from "../../../assets/photoes/main_graph.png";
import Item from "./Item";
import "./style.css";
const MyExercise = () => {
  return (
    <div className="body-record" >
      <div className="top">
        <span className="title">MY EXERCISE</span>
        <span className="date">2021.05.21</span>
      </div>
      <ul className="exercise-list">
        {[...new Array(30).fill(0).map((x, index)=> <Item key={index}/>)]}
      </ul>
    </div>
  );
};
export default MyExercise;
